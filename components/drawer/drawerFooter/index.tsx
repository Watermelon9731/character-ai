import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DrawerFooter() {
  return (
    <div className="flex">
      <nav className="flex flex-col w-full text-sm font-medium lg:px-4">
        <Link
          href="#"
          className="flex w-full min-h-[3rem] items-center gap-3 rounded-full overflow-hidden mt-5 transition-all"
        >
          <Button className="flex justify-start w-full h-full gap-4 rounded-full bg-transparent border border-solid border-gray-200 hover:bg-surface text-black">
            <h2 className="text-md text-center w-full">Sign in</h2>
          </Button>
        </Link>
        <Link
          href="#"
          className="flex w-full min-h-[3rem] items-center gap-3 rounded-full overflow-hidden mt-5 transition-all"
        >
          <Button className="flex justify-start w-full h-full gap-4 bg-gray-900 hover:bg-gray-800 text-white">
            <h2 className="text-md text-center w-full">Sign up</h2>
          </Button>
        </Link>
      </nav>
    </div>
  );
}
