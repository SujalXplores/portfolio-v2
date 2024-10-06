import { auth } from 'app/auth';
import { getGuestbookEntries } from '@/db/queries';
import { redirect } from 'next/navigation';
import Form from './form';

export const metadata = {
  title: 'Admin',
};

export default async function GuestbookPage() {
  const session = await auth();
  if (session?.user?.email !== 'shahc9437@gmail.com') {
    redirect('/');
  }

  const entries = await getGuestbookEntries();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Admin</h1>
      <Form entries={entries} />
    </section>
  );
}
