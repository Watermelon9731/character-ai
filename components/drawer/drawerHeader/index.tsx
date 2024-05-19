import Link from "next/link";
import {
  Home,
  ShoppingCart,
  Badge,
  Package2,
  Package,
  Users,
  LineChart,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DrawerHeader() {
  return (
    <div className="flex-col">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span className="">Acme Inc</span>
        </Link>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
    </div>
  );
}