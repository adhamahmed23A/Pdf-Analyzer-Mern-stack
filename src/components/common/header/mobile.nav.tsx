/*
 * Imports
 */
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { CircleQuestionMark, Menu } from "lucide-react";
import Logo from "@/assets/svg/logo";
import { Separator } from "@/components/ui/separator";
import { HeaderData } from "@/constants/HeaderData";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils";
import Profile from "./profile";
export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size={"icon"}
          variant={"outline"}
          className="hover:bg-primary/5 bg-transparent cursor-pointer"
        >
          <Menu className="text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent
        showCloseButton={false}
        className="bg-zinc-100/95 dark:bg-zinc-900/95 max-w-80 rounded-r-2xl  py-1 "
        side="left"
      >
        <SheetHeader className="px-2">
          <SheetTitle className=" px-2">
            <div className="inline-flex items-center justify-center gap-2 cursor-pointer">
              {/* Navigate to the home page */}
              <Logo />
            </div>
          </SheetTitle>
          <Separator />
          <ul className="flex flex-col gap-1 mt-2  ">
            {HeaderData.navigation.map((link) => (
              <li key={link.label}>
                <NavLink
                  className={({ isActive }) =>
                    cn(
                      "text-primary text-base px-2 py-1.5 rounded-lg transition-all duration-100 flex gap-1.5 items-center font-normal",
                      isActive
                        ? "text-brand-color hover:bg-transparent border-l-[1.5px] border-brand-color rounded-none "
                        : "hover:bg-zinc-200 dark:hover:bg-zinc-800 hover-text",
                    )
                  }
                  to={link.href}
                >
                  <link.icon size={14} />
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </SheetHeader>

        <SheetFooter className=" px-2 mb-2 flex flex-col gap-2 ">
          <NavLink
            to={"/about"}
            className={() =>
              cn(
                "text-primary hover:bg-zinc-200 dark:hover:bg-zinc-800 hover-text text-base px-2 py-1.5 rounded-lg transition-all duration-100 flex gap-1.5 items-center font-normal",
              )
            }
          >
            <CircleQuestionMark size={16} />
            About us
          </NavLink>
          <div className="">
            <Profile />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
