"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { LinkButton } from "@/components/auth/link-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string | React.ReactNode;
  headerTitle: string;
  backButtonLabel?: string;
  backButtonHref?: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  headerTitle,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-full md:w-[500px] shadow-md mx-5">
      <CardHeader>
        <Header label={headerLabel} title={headerTitle} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <div className="flex items-center w-full gap-x-2">
            <Social provider="google" />
            <Social provider="github" />
          </div>
        </CardFooter>
      )}
      {backButtonLabel && backButtonHref && (
        <CardFooter>
          <LinkButton
            label={backButtonLabel}
            href={backButtonHref}
            className="w-full"
          />
        </CardFooter>
      )}
    </Card>
  );
};
