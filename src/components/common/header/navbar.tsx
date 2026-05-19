/*
 * Imports
 */
import Logo from "@/assets/svg/logo";
import { Button } from "@/components/ui/button";
import { HeaderData } from "@/constants/HeaderData";
import { NavLink } from "react-router";
import { MobileNav } from "./mobile.nav";
import { Separator } from "@/components/ui/separator";

export const Navbar = () => {
  return (
    <>
      <nav className="w-full flex justify-center main-x-padding py-1">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="lg:hidden flex">
              <MobileNav />
            </div>
            <Logo />
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-8">
              {HeaderData.navigation.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  className="text-sm hover-text "
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <Separator
              orientation="vertical"
              className="lg:flex hidden  h-6 my-auto"
            />
            <div className="flex items-center gap-4">
              <Button
                className="lg:flex hidden hover:bg-primary/5 font-normal text-sm  cursor-pointer  "
                variant={"outline"}
              >
                <NavLink to={"/login"}>Login</NavLink>
              </Button>
              <Button
                className="bg-brand-color hover:bg-brand-color/90 font-normal text-sm text-white cursor-pointer  "
                variant={"default"}
              >
                <NavLink to={"/login"}>Upload Now</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
