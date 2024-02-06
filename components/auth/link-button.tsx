"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BackButtonProps {
  href: string;
  label: string;
  className?: string;
};

export const LinkButton = ({
  href,
  label,
className,
}: BackButtonProps) => {
  return (
    <Button
      variant="link"
      className={cn("font-normal",className)}
      size="sm"
      asChild
    >
      <Link href={href}>
        {label}
      </Link>
    </Button>
  );
};
