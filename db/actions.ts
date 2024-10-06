'use server';

import { auth } from 'app/auth';
import { type Session } from 'next-auth';
import { sql } from '@vercel/postgres';
import { revalidatePath, unstable_noStore as noStore } from 'next/cache';

export async function increment(slug: string) {
  noStore();
  await sql`
    INSERT INTO views (slug, count)
    VALUES (${slug}, 1)
    ON CONFLICT (slug)
    DO UPDATE SET count = views.count + 1
  `;
}

async function getSession(): Promise<Session> {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error('Unauthorized');
  }

  return session;
}

export async function saveGuestbookEntry(formData: FormData) {
  const session = await getSession();
  const email = session.user?.email as string;
  const created_by = session.user?.name as string;

  if (!session.user) {
    throw new Error('Unauthorized');
  }

  const entry = formData.get('entry')?.toString() || '';
  const body = entry.slice(0, 500);

  await sql`
    INSERT INTO guestbook (email, body, created_by, created_at)
    VALUES (${email}, ${body}, ${created_by}, NOW())
  `;

  revalidatePath('/guestbook');

  const data = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_SECRET}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'onboarding@resend.dev',
      to: 'shahc9437@gmail.com',
      subject: 'New Guestbook Entry',
      html: `<p>Email: ${email}</p><p>Message: ${body}</p>`,
    }),
  });

  await data.json();
}

export async function deleteGuestbookEntries(selectedEntries: string[]) {
  const session = await getSession();
  const email = session.user?.email as string;

  if (email !== 'shahc9437@gmail.com') {
    throw new Error('Unauthorized');
  }

  const selectedEntriesAsNumbers = selectedEntries.map(Number);
  const arrayLiteral = `{${selectedEntriesAsNumbers.join(',')}}`;

  await sql`
    DELETE FROM guestbook
    WHERE id = ANY(${arrayLiteral}::int[])
  `;

  revalidatePath('/admin');
  revalidatePath('/guestbook');
}

export async function deleteGuestbookEntry(formData: FormData) {
  const id = formData.get('id') as string;
  await sql`
    DELETE FROM guestbook
    WHERE id = ${id}
  `;

  revalidatePath('/guestbook');
}

