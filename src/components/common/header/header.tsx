/*
 * Imports
 */
import { AnnouncementBar } from "./announcement.bar";
import { NavItems } from "./nav.items";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/svg/logo";
import { MobileNav } from "./mobile.nav";
import { NavLink } from "react-router";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full h-fit">
      <div className="flex flex-col gap-0">
        <AnnouncementBar />
        <nav className="w-full h-14 main-x-padding py-2">
          <div className=" flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="flex lg:hidden">
                <MobileNav />
              </div>
              <div className="inline-flex  items-center justify-center gap-2 cursor-pointer">
                {/* Navigate to the home page */}
                <NavLink to={"/"}>
                  <Logo />
                </NavLink>
              </div>
            </div>
            <div className="">
              <NavItems />
            </div>
            <div className="flex gap-2 items-center  ">
              <div className="lg:flex hidden">
                <Button
                  variant={"ghost"}
                  className="cursor-pointer text-sm font-normal"
                >
                  Login
                </Button>
              </div>
              <Button
                variant={"default"}
                className="cursor-pointer text-sm font-normal bg-brand-color hover:bg-brand-color/90 transition-all duration-300  "
              >
                Upload Now
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
