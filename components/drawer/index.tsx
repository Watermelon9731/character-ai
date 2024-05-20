import DrawerHeader from "./drawerHeader";
import DrawerBody from "./drawerBody";
import DrawerFooter from "./drawerFooter";

export default function Drawer() {
  return (
    <div className="border-r h-full flex flex-col justify-between">
      <div>
        <DrawerHeader />
        <DrawerBody />
      </div>
      <div className="pb-3">
        <DrawerFooter />
      </div>
    </div>
  );
}
