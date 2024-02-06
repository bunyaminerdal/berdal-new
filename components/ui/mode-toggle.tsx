import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function ModeToggle({ size="default" ,className}: { size?: "icon"|"default" ,className?: string}) {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={cn("gap-2", className)} size={size}>
          <div className="flex center">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 flex transition-all dark:-rotate-90 dark:hidden" />
            <MoonIcon className=" h-[1.2rem] w-[1.2rem] rotate-90 hidden transition-all dark:rotate-0 dark:flex" />
          </div>
          <div className={cn("", size==="icon" ? "sr-only" : "not-sr-only")}>
             <span className="flex dark:hidden">Light Mode</span>
             <span className="dark:flex hidden">Dark Mode</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
