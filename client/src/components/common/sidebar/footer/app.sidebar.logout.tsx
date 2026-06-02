import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Spinner } from "@/components/ui/spinner";
import { useGetSession } from "@/hooks/useGetSession";
import { authClient } from "@/routes/auth/lib/auth-client";
import { IconLogout } from "@tabler/icons-react";
import { useState } from "react";
import { toast } from "sonner";

export const AppSidebarLogout = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const { setIsLoggingOut } = useGetSession();

  const handleLogOut = async () => {
    setIsLoggingOut(true);
    await authClient.signOut({
      fetchOptions: {
        onRequest: () => {
          setIsPending(true);
        },
        onResponse: () => {
          setIsPending(false);
        },
        onSuccess: () => {
          toast.success("Logged out successfully", { position: "top-center" });
        },
        onError: (ctx) => {
          setIsPending(false);
          setIsLoggingOut(false);
          toast.error(ctx.error.message ?? "Something went wrong", {
            position: "top-center",
          });
        },
      },
    });
  };
  return (
    <DropdownMenuItem
      onClick={handleLogOut}
      className="hover:bg-destructive! duration-200"
    >
      {isPending ? <Spinner /> : <IconLogout />}
      {isPending ? "Logging out..." : "Logout"}
    </DropdownMenuItem>
  );
};
