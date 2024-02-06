import { FaUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { LogoutButton } from "@/components/auth/logout-button";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useCurrentRole } from "@/hooks/useCurrentRole";
import { UserRole } from "@prisma/client";

export const UserButton = ({
  setOpen,
  className,
}: {
  setOpen: React.Dispatch<React.SetStateAction<"closed" | "open">>;
  className?: string;
}) => {
  const user = useCurrentUser();
  const role = useCurrentRole();

  return (
    <>
      {!user ? (
        <div className="flex">
          <Button
            variant="outline"
            className={cn("gap-2 overflow-hidden w-full", className)}
            asChild
            onClick={() => setOpen("closed")}
          >
            <Link href="/auth/login">Sign In</Link>
          </Button>
          <Button
            variant="outline"
            className={cn("gap-2 overflow-hidden w-full", className)}
            asChild
            onClick={() => setOpen("closed")}
          >
            <Link href="/auth/register">Sign Up</Link>
          </Button>
        </div>
      ) : (
        <DropdownMenu modal>
          <DropdownMenuTrigger asChild>
            {!!user && (
              <Button
                variant="outline"
                className={cn("gap-2 overflow-hidden", className)}
                size="lg"
              >
                <div className="w-full flex justify-between items-center gap-2">
                  <p className="w-auto truncate text-ellipsis">
                    {user?.name ?? user?.email ?? "user name"}
                  </p>
                  <div className="flex center">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={user?.image || ""} />
                      <AvatarFallback className="bg-primary">
                        <FaUser className="text-white" />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </Button>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-40" align="end" side="top">
            <LogoutButton>
              <DropdownMenuItem>
                <ExitIcon className="h-4 w-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </LogoutButton>
            {user && !user.isOAuth && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild onClick={() => setOpen("closed")}>
                  <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
              </>
            )}
            {role === UserRole.ADMIN && (
              <DropdownMenuItem asChild onClick={() => setOpen("closed")}>
                <Link href="/admin">Admin Panel</Link>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};
