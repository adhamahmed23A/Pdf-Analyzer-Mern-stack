import { Button } from "@/components/ui/button";
import { useState } from "react";
import { authClient } from "../lib/auth-client";
import { Spinner } from "@/components/ui/spinner";
type SocialButtonProps = {
  children: React.ReactNode;
  provider: "google" | "github";
};
export const SocialButton = ({ children, provider }: SocialButtonProps) => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const handleSocialLogin = async () => {
    await authClient.signIn.social({
      provider,
      callbackURL: "http://localhost:4000/chat/1",
      errorCallbackURL: "http://localhost:4000/auth/error",

      fetchOptions: {
        onRequest: () => setIsPending(true),
        onResponse: () => setIsPending(false),
      },
    });
  };
  return (
    <Button
      onClick={handleSocialLogin}
      disabled={isPending}
      className=" w-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900/60 dark:hover:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-600/40 text-zinc-800 dark:text-zinc-200 rounded-sm flex items-center justify-center gap-1 cursor-pointer transition-colors duration-200"
    >
      {isPending ? <Spinner data-icon="inline-start" /> : children}
    </Button>
  );
};
//  <IconBrandGoogleFilled color="currentColor" />
//       Google
