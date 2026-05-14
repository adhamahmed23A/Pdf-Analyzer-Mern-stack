import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b main-x-padding bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" flex h-14 w-full items-center">
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
