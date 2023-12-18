import { auth } from 'app/auth';
import { getGuestbookEntries } from 'app/db/queries';
import { SignIn, SignOut } from './buttons';
import { Suspense } from 'react';
import Form from './form';

export const metadata = {
  title: 'Guestbook - Sujal Shah',
  description: 'Sign my guestbook and leave your mark.',
  alternates: {
    canonical: '/guestbook',
  },
};

export default function GuestbookPage() {
  return (
    <section>
      <h1 className="font-medium text-3xl mb-8 tracking-tighter">
        ✍️ Sign My Guestbook
      </h1>
      <p className="mb-8 text-gray-300">
        Leave a comment below. It could be anything - appreciation, information,
        wisdom, or even humor. Surprise me!
      </p>
      <Suspense>
        <GuestbookForm />
        <GuestbookEntries />
      </Suspense>
    </section>
  );
}

async function GuestbookForm() {
  const session = await auth();

  return session?.user ? (
    <>
      <Form />
      <SignOut />
    </>
  ) : (
    <SignIn />
  );
}

async function GuestbookEntries() {
  const entries = await getGuestbookEntries();

  if (entries.length === 0) {
    return null;
  }

  return entries.map((entry) => (
    <div key={entry.id} className="flex flex-col space-y-1 mb-4">
      <div className="w-full text-sm break-words">
        <span className="text-neutral-400 mr-1">{entry.created_by}:</span>
        {entry.body}
      </div>
    </div>
  ));
}
