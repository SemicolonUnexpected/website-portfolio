"use client"

import { Card, CardBody } from "@nextui-org/card";
import { useRouter } from "next/navigation";
import Image from "next/image";

import * as React from "react";

interface CardProps {
  title: string;
  text: string;
  route: string;
}

interface ImageProps {
  imageSrc: string;
  alt: string;
}

type ProjectCardProps = CardProps | ( CardProps & ImageProps )


const ProjectCard: React.FC<ProjectCardProps> = ({ title, text, route, imageSrc="", alt="" }) => {
  const router = useRouter();

  return (
    <Card className="w-full" isPressable onPress={() => router.push(route)}>
      <CardBody>
        <span>
          {imageSrc != "" &&
            <Image src={imageSrc} alt={alt}/>
          }
        </span>

        <span>
        <h1 className="font-semibold text-xl">{title}</h1>
        <p>{text}</p>
        </span>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;

