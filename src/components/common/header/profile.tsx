/*
 * Imports
 */
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="p-2 flex gap-2 rounded-lg border border-primary/10  cursor-pointer hover:bg-zinc-200 duration-200">
        <div className="">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            <AvatarBadge className="bg-green-600 dark:bg-green-800" />
          </Avatar>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-sm font-semibold leading-none">Shadcn</p>
          <p className="text-xs leading-none text-muted-foreground">@shadcn</p>
        </div>
      </div>
      <Button
        variant={"destructive"}
        className="cursor-pointer text-sm font-normal"
      >
        Logout
      </Button>
    </div>
  );
};

export default Profile;
