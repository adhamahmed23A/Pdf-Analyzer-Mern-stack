/*
 * Imports
 */
import { NavLink } from "react-router";
/*
 * Types
 */

type Props = {
  type: "login" | "signup";
};
export const FooterAuth = ({ type }: Props) => {
  return (
    <span className="text-sm text-muted-foreground/60">
      {type === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
      <NavLink
        to={`/auth/${type === "login" ? "signup" : "login"}`}
        className="hover:underline hover:text-muted-foreground duration-200"
      >
        {type === "login" ? "Signup" : "Login"}
      </NavLink>
    </span>
  );
};
