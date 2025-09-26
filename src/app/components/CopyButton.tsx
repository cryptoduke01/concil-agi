"use client";

type CopyButtonProps = {
  text: string;
};

export default function CopyButton({ text }: CopyButtonProps) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(text)}
      className="inline-flex items-center rounded border border-white/15 px-2 py-1 hover:bg-white/10 active:scale-[.98]"
      aria-label="Copy"
      title="Copy"
    >
      ⧉
    </button>
  );
}


