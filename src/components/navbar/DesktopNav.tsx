import { NavLink, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { NavLinks_Constants } from "@/constants/NavLinks";
import { Button } from "@/components/ui/button";
import { CtaButton } from "./CtaButtons";

export function DesktopNav() {
  const { pathname } = useLocation();
  const Logo = NavLinks_Constants.icon;

  return (
    <nav className="hidden lg:flex w-full justify-between ">
      <div className="flex ">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 mr-4 text-foreground hover:text-foreground/80 transition-colors"
        >
          <Logo className="size-6" />
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center ">
          {NavLinks_Constants.navMain.map((link) => {
            const isActive = pathname === link.url;

            return (
              <Button
                key={link.url}
                variant="ghost"
                size="sm"
                asChild
                className={cn(
                  "text-muted-foreground tracking-tight text-sm hover:text-foreground",
                  isActive &&
                    " bg-transparent hover:bg-transparent text-foreground",
                )}
              >
                <NavLink to={link.url}>
                  <span>{link.title}</span>
                </NavLink>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Cta Buttons */}

      <CtaButton />
    </nav>
  );
}
