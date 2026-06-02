import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  IconCreditCard,
  IconNotification,
  IconUserCircle,
} from "@tabler/icons-react";
import { AppSidebarLogout } from "./app.sidebar.logout";

/**
 * Imports
 */
export const AppSidebarFooterDropdown = () => {
  return (
    <>
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
      <AppSidebarLogout />
    </>
  );
};
