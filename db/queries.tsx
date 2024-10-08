'use server';

import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export async function getSnippetsViews() {
  noStore();
  const data = await sql`
    SELECT count
    FROM views
  `;

  return data.rows.reduce((acc, curr) => acc + Number(curr.count), 0);
}

export async function getViewsCount() {
  noStore();
  const data = await sql`
    SELECT slug, count
    FROM views
  `;

  return data.rows as { slug: string; count: number }[];
}

export async function getGuestbookEntries() {
  noStore();
  const entries = await sql`
    SELECT id, body, created_by, updated_at, email
    FROM guestbook
    ORDER BY created_at DESC
    LIMIT 100
  `;
  return entries.rows;
}
