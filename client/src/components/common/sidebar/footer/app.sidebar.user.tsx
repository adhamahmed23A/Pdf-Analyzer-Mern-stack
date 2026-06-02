/**
 * Imports
 */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useGetSession } from "@/hooks/useGetSession";
import { SidebarUserSkeleton } from "./skeletons/sidebar-user-skeleton";

export const AppSidebarUser = () => {
  const { isLoading, user } = useGetSession();

  if (isLoading) {
    return <SidebarUserSkeleton />;
  }

  return (
    <>
      <Avatar className="h-8 w-8 rounded-lg ">
        <AvatarImage src={user?.image || ""} alt={"user"} />
        {!user?.image && (
          <AvatarFallback className="rounded-lg">
            {user?.name.at(0)?.toUpperCase()}
          </AvatarFallback>
        )}
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">{user?.name}</span>
      </div>
    </>
  );
};
