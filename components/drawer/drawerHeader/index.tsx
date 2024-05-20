import Link from "next/link";

export default function DrawerHeader() {
  return (
    <div className="flex flex-col">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="font-bold text-lg">character.ai</span>
        </Link>
      </div>
    </div>
  );
}
