"use client"

import { Card, CardBody } from "@nextui-org/card";
import { useRouter } from "next/navigation";
import { Image } from "@nextui-org/image";

import * as React from "react";

interface ProjectCardProps {
  title: string;
  text: string;
  route: string;
  imageSrc?: string;
  alt?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, text, route, imageSrc="", alt=""}) => {
  const router = useRouter();

  return (
    <Card className="max-w-5xl h-96 w-full md:h-48" isPressable onPress={() => router.push(route)}>
      <CardBody>
        <div className="flex flex-col md:flex-row gap-4">
            {imageSrc &&
            <div className="relative basis-1/2">
              <Image src={imageSrc} alt={alt} width="100% md:auto" className="object-cover basis-1/2 max-h-48 md:max-h-[10.5rem]"/>
            </div>
            }
          <div className={imageSrc &&"basis-1/2"}>
            <h1 className="font-semibold text-xl">{title}</h1>
            <p>{text}</p>
          </div>

          {imageSrc &&
            <div>
              <Image src={imageSrc} alt={alt} width="64" height="64" className="mt-auto md:ml-auto"/>
            </div>
          }
        </div>
      </CardBody>
    </Card>
  );
};

interface IconProjectCardProps extends ProjectCardProps {
  imageSrc?: never;
  icon: string;
}


export const IconProjectCard: React.FC<IconProjectCardProps> = ({ title, text, route, imageSrc="", alt=""}) => {
  const router = useRouter();

  return (
    <Card className="max-w-5xl h-96 w-full md:h-48" isPressable onPress={() => router.push(route)}>
      <CardBody>
        <div className="flex flex-col md:flex-row gap-4">
            {imageSrc &&
            <div className="relative basis-1/2">
              <Image src={imageSrc} alt={alt} width="100% md:auto" className="object-cover basis-1/2 max-h-48 md:max-h-[10.5rem]"/>
            </div>
            }
          <div className={imageSrc &&"basis-1/2"}>
            <h1 className="font-semibold text-xl">{title}</h1>
            <p>{text}</p>
          </div>

          {imageSrc &&
            <div>
              <Image src={imageSrc} alt={alt} width="64" height="64" className="mt-auto md:ml-auto"/>
            </div>
          }
        </div>
      </CardBody>
    </Card>
  );
};
