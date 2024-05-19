import { PropsWithChildren } from "react";
import Drawer from "../drawer";
import Header from "../header";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <Drawer />
        <div>
          <header className="flex h-14 max-w-full items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <Header />
          </header>
          <div>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
