import { auth } from "app/auth";
import { getGuestbookEntries } from "@/db/queries";
import { SignIn, SignOut } from "./buttons";
import { Suspense } from "react";
import Form from "./form";
import GuestbookEntriesSkeleton from "@/components/skeleton-loader/guestbook-entries";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { deleteGuestbookEntry } from "@/db/actions";

export const metadata = {
  title: "Guestbook - Sujal Shah",
  description: "Sign my guestbook and leave your mark.",
  alternates: {
    canonical: "/guestbook",
  },
};

export default async function GuestbookPage() {
  return (
    <section>
      <h1 className="font-medium text-3xl mb-8 tracking-tighter">
        ✍️ Sign My Guestbook
      </h1>
      <p className="mb-8 text-gray-300">
        Leave a comment below. It could be anything - appreciation, information,
        wisdom, or even humor. Surprise me!
      </p>
      <Suspense fallback={<GuestbookEntriesSkeleton />}>
        <GuestbookForm />
        <GuestbookEntries />
      </Suspense>
    </section>
  );
}

async function GuestbookForm() {
  const session = await auth();

  if (!session?.user) {
    return <SignIn />;
  }

  return (
    <>
      <Form />
      <SignOut />
    </>
  );
}

async function GuestbookEntries() {
  const [entries, session] = await Promise.all([getGuestbookEntries(), auth()]);

  if (entries.length === 0) {
    return <p className="text-gray-300">No entries yet. Be the first!</p>;
  }

  return entries.map((entry) => (
    <div key={entry.id} className="flex flex-col space-y-1 mb-4">
      <div className="w-full text-sm break-words flex items-center">
        <span className="text-neutral-400 mr-1">{entry.created_by}:</span>
        {entry.body}
        {entry.email === session?.user?.email ? (
          <Tooltip>
            <TooltipTrigger asChild>
              <form className="flex" action={deleteGuestbookEntry}>
                <input type="hidden" name="id" value={entry.id} />
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2 w-4 h-4 text-red-500"
                  type="submit"
                >
                  <Trash />
                </Button>
              </form>
            </TooltipTrigger>
            <TooltipContent>Delete</TooltipContent>
          </Tooltip>
        ) : null}
      </div>
    </div>
  ));
}
