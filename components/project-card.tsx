"use client"

import { Card, CardBody } from "@nextui-org/card";
import { useRouter } from "next/navigation";
import { Image } from "@nextui-org/image";

import * as React from "react";

interface CardProps {
  title: string;
  text: string;
  route: string;
  imageSrc?: string;
  alt?: string;
}

interface ImageProps {
}

type ProjectCardProps = CardProps | ( CardProps & ImageProps )

const ProjectCard: React.FC<ProjectCardProps> = ({ title, text, route, imageSrc="", alt=""}) => {
  const router = useRouter();

  return (
    <Card className="w-68 md:w-full h-96 md:h-48" isPressable onPress={() => router.push(route)}>
      <CardBody>
        <div className="flex items-center space-x-4">
        <span className="shrink-0 grow-0">
          {imageSrc &&
            <Image src={imageSrc} alt={alt} height={168} width={250} className="shrink-0"/>
          }
        </span>
        <div className="block md:inline-block">
          <h1 className="font-semibold text-xl">{title}</h1>
          <p className="text-ellipses">{text}</p>
        </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;

