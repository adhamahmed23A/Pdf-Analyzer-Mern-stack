import { NavLink, useLocation } from "react-router";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLinks_Constants } from "@/constants/NavLinks";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "../ui/sheet";
import Search from "../Search";

export function MobileNav() {
  const { pathname } = useLocation();
  const Logo = NavLinks_Constants.icon;

  return (
    <div className="flex lg:hidden w-full items-center justify-between">
      {/* Logo */}
      <NavLink
        to="/"
        className="flex items-center gap-2 text-foreground hover:text-foreground/80 transition-colors"
      >
        <Logo className="size-5" />
      </NavLink>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden ml-auto">
            <Menu className="size-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 flex flex-col">
          <SheetHeader className="border-b pb-4">
            <SheetTitle className="flex items-center gap-2">
              <Logo className="size-5" />
            </SheetTitle>
          </SheetHeader>

          {/* Nav Links */}
          <nav className="flex flex-col gap-1 p-4 flex-1">
            {NavLinks_Constants.navMain.map((link) => {
              const isActive = pathname === link.url;
              const Icon = link.icon;

              return (
                <SheetClose key={link.url} asChild>
                  <NavLink
                    to={link.url}
                    className={cn(
                      "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    <Icon className="size-4" />
                    <span>{link.title}</span>
                  </NavLink>
                </SheetClose>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="p-4  flex flex-col gap-3 border-t">
            <Search type="mobile" />
            <SheetClose asChild>
              <NavLink to="sign-up">
                <Button className="w-full button ">Sign up</Button>
              </NavLink>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
