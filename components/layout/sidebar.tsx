"use client";

import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import React, { useState } from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { UserButton } from "../auth/user-button";
import {
  FaFolder,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import beImg from "../../public/images/be.png";
import { RiMailSendFill } from "react-icons/ri";

const SideMenuItems = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<"closed" | "open">>;
}) => {
  const pathname = usePathname();

  return (
    <div className=" w-full h-full flex  flex-col justify-between">
      <div>
        <div className="flex flex-col w-full items-center border-b">
          <Image
            alt="Bunyamin Erdal"
            src={beImg}
            width={140}
            height={140}
            placeholder="blur"
            className="rounded-full shadow-md my-5 shadow-primary"
            priority
          />
          <h1 className="text-xl font-bold">Bünyamin Erdal</h1>
          <div className="flex justify-center gap-1 m-1">
            <Button
              size="icon"
              variant="ghost"
              className="hover:text-primary"
              asChild
            >
              <Link
                href={"https://github.com/bunyaminerdal"}
                target="_blank"
                title="GitHub"
              >
                <FaGithub className="h-7 w-7" />
              </Link>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="hover:text-primary"
              asChild
            >
              <Link
                href={
                  "https://www.linkedin.com/in/b%C3%BCnyamin-erdal-18736345/"
                }
                target="_blank"
                title="LinkedIn"
              >
                <FaLinkedin className="h-7 w-7" />
              </Link>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="hover:text-primary"
              asChild
            >
              <Link
                href={"https://twitter.com/bunyaminerdal"}
                target="_blank"
                title="Twitter"
              >
                <FaTwitter className="h-7 w-7" />
              </Link>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="hover:text-primary"
              asChild
            >
              <Link
                href={"https://www.instagram.com/bunyaminerdal"}
                target="_blank"
                title="Instagram"
              >
                <FaInstagram className="h-7 w-7" />
              </Link>
            </Button>
          </div>
        </div>
        <Button
          variant={pathname === "/" ? "default" : "outline"}
          className="flex flex-grow rounded-md m-1 shadow "
          asChild
          onClick={() => setOpen("closed")}
        >
          <Link href="/" className="flex gap-2">
            <FaHome />
            Home
          </Link>
        </Button>
        <Button
          variant={pathname === "/projects" ? "default" : "outline"}
          className="flex flex-grow rounded-md m-1 shadow "
          asChild
          onClick={() => setOpen("closed")}
        >
          <Link href="/projects" className="flex gap-2">
            <FaFolder />
            Projects
          </Link>
        </Button>
        <Button
          variant={pathname === "/contact-me" ? "default" : "outline"}
          className="flex flex-grow rounded-md m-1 shadow "
          asChild
          onClick={() => setOpen("closed")}
        >
          <Link href="/contact-me" className="flex gap-2">
            <RiMailSendFill />
            Contact Me
          </Link>
        </Button>
      </div>
      <div className="flex flex-col">
        <UserButton setOpen={setOpen} className="rounded-md m-1 shadow" />
        <ModeToggle className=" rounded-md m-1 shadow" />
      </div>
    </div>
  );
};
const Sidebar = () => {
  const [open, setOpen] = useState<"closed" | "open">("closed");
  return (
    <div className="w-full md:w-96 md:h-full h-10 overflow-y-auto bg-primary md:bg-background min-w-64">
      <div className="hidden md:flex md:flex-col  border-r w-full h-full">
        <SideMenuItems setOpen={() => {}} />
      </div>
      <div className="flex md:hidden w-full h-10 justify-between items-center p-4 border">
        <span className="text-primary-foreground">Bünyamin Erdal</span>
        <Button
          variant="ghost"
          size="icon"
          className="w-7 h-7 p-1 text-primary-foreground"
          onClick={() => setOpen(open === "open" ? "closed" : "open")}
          name="hamburger-menu-button"
          title="Menu"
        >
          <RxHamburgerMenu
            data-state={open}
            className="w-7 h-7 data-[state=open]:sr-only"
          />
          <RxCross1
            data-state={open}
            className="w-7 h-7 data-[state=closed]:sr-only"
          />
        </Button>
        <div
          data-state={open}
          className="data-[state=closed]:sr-only fixed inset-x-0 inset-y-10 h-full pb-10 bg-background z-50 transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          <SideMenuItems setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
