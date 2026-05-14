import { NavLink } from "react-router";
import Search from "../Search";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const CtaButton = () => {
  return (
    <>
      <div className="flex gap-4 items-center  h-fit ">
        <Search type="desktop" />
        <Separator orientation="vertical" className="h-5 my-auto" />
        <NavLink to={"sign-up"}>
          <Button size={"default"} className="button">
            Sign up
          </Button>
        </NavLink>
      </div>
    </>
  );
};
