/*
 * Imports
 */
import { Button } from "@/components/ui/button";
import { HeaderData } from "@/constants/HeaderData";
import { NavLink } from "react-router";

export const NavItems = () => {
  return (
    <>
      <div className="flex-1 flex justify-center items-center">
        <ul className="hidden lg:inline-flex gap-2 items-center">
          {HeaderData.navigation.map((link) => (
            <li key={link.label}>
              <Button variant={"ghost"} asChild>
                <NavLink className={"text-primary font-normal"} to={link.href}>
                  {link.label}
                </NavLink>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
