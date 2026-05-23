/**
 * Imports
 */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export const AppSidebarUser = () => {
  return (
    <>
      <Avatar className="h-8 w-8 rounded-lg grayscale">
        <AvatarImage src={"/"} alt={"user"} />
        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
      </Avatar>
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">Schadcn</span>
        <span className="truncate text-xs text-muted-foreground">
          shadcn@gmail.com
        </span>
      </div>
    </>
  );
};
