import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { FooterData } from "@/constants/FooterData";
export const FooterLinks = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-4">
        {FooterData.links.map((link) => (
          <NavLink
            key={link.label}
            to={link.href}
            className="text-sm hover-text "
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 ">
        {FooterData.socials.map((link) => (
          <Button
            key={link.label}
            variant={"outline"}
            size={"icon"}
            onClick={() => window.open(link.href, "_blank")}
            className="cursor-pointer"
          >
            {<link.icon />}
          </Button>
        ))}
      </div>
    </>
  );
};
