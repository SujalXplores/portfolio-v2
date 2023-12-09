'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <p>Oh no, something went wrong... maybe refresh?</p>
      <button
        onClick={reset}
        type="button"
        className="flex items-center justify-center mt-3 px-2 py-1 font-medium h-8 bg-neutral-700 text-neutral-100 rounded w-16"
      >
        Reset
      </button>
    </div>
  );
}
