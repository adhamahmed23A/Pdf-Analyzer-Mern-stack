import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { AppSidebarUser } from "./app.sidebar.user";
import {
  IconCreditCard,
  IconLogout,
  IconNotification,
  IconUserCircle,
} from "@tabler/icons-react";

/**
 * Imports
 */
export const AppSidebarFooterDropdown = () => {
  return (
    <>
      <DropdownMenuLabel className="p-0 font-normal">
        <AppSidebarUser />
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <IconUserCircle />
          Account
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconCreditCard />
          Billing
        </DropdownMenuItem>
        <DropdownMenuItem>
          <IconNotification />
          Notifications
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <IconLogout />
        Log out
      </DropdownMenuItem>
    </>
  );
};
