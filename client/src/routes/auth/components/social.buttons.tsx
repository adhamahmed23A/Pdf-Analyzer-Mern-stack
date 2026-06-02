/*
 * Imports
 */
import {
  IconBrandGithubFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import { SocialButton } from "./social.button";
export const SocialButtons = () => {
  return (
    <div className="w-full flex justify-between items-center gap-4 ">
      <div className="w-1/2 ">
        <SocialButton provider="google">
          <IconBrandGoogleFilled color="currentColor" />
          Google
        </SocialButton>
      </div>
      <div className="w-1/2 ">
        <SocialButton provider="github">
          <IconBrandGithubFilled color="currentColor" />
          Github
        </SocialButton>
      </div>
    </div>
  );
};
