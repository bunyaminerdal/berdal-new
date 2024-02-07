import React from "react";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { LinkButton } from "../auth/link-button";

type ProjectType = {
  title: string;
  description: string;
  img: StaticImageData;
  githubUrl: string;
  visitUrl: string;
};
const ProjectCard = ({ project }: { project: ProjectType }) => {
  return (
    <Card className="mx-3 lg:w-[70%]">
      <CardContent className="p-0 flex">
        <div className="flex border-r items-center">
          <Image
            src={project.img}
            alt="Bunyamin Erdal"
            width={200}
            height={200}
            className="rounded-s-xl w-36 h-36 lg:w-48 lg:h-48"
            placeholder="blur"
            priority
          />
        </div>
        <div className=" text-sm  flex-1 flex flex-col justify-between my-2">
          <div className="flex flex-col gap-2 ">
            <p className=" mx-5 font-bold text-md">{project.title}</p>
            <div className="border-b w-full " />
            <p className=" mx-5">{project.description}</p>
          </div>
          <div className="flex flex-col gap-2 ">
            <div className="border-b w-full " />
            <div className="flex gap-2  mx-5 text-primary">
              <LinkButton
                label={"GitHub"}
                href={project.githubUrl}
                target="_blank"
              />
              <LinkButton
                label={"Visit"}
                href={project.visitUrl}
                target="_blank"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
