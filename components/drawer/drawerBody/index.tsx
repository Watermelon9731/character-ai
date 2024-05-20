import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DrawerBody() {
  return (
    <div className="flex">
      <nav className="flex flex-col w-full text-sm font-medium lg:px-4">
        <Link
          href="#"
          className="flex w-full min-h-[3rem] items-center gap-3 rounded-full overflow-hidden mt-5 transition-all"
        >
          <Button className="flex justify-start w-fit h-full gap-4 rounded-full bg-gray-100 hover:bg-surface text-black">
            <div className="rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                ></path>
              </svg>
            </div>
            <h2 className="text-md">Create</h2>
          </Button>
        </Link>
        <Link
          href="#"
          className="flex w-full min-h-[3rem] items-center gap-3 rounded-lg mt-5 transition-all"
        >
          <Button className="flex justify-start w-full h-full gap-4 bg-gray-100 hover:bg-surface text-black">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 5c3.859.001 7 3.142 7 7.001c0 3.858-3.141 6.998-7 6.999c-3.859 0-7-3.14-7-6.999s3.141-7 7-7.001m0-2a9 9 0 0 0 0 18a9 9 0 0 0 0-18m4.182 4.819a.498.498 0 0 0-.491-.127L9.74 9.398a.498.498 0 0 0-.342.343l-1.707 5.951a.496.496 0 0 0 .481.637l.138-.02l5.95-1.708a.498.498 0 0 0 .342-.343l1.707-5.949a.498.498 0 0 0-.127-.49M8.9 15.101l1.383-4.817l3.434 3.435z"
                ></path>
              </svg>
            </div>
            <h2 className="text-md">Discover</h2>
          </Button>
        </Link>
      </nav>
    </div>
  );
}
