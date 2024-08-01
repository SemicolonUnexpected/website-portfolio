"use client"

import { Card, CardBody } from "@nextui-org/card";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
    <Card className="max-w-5xl h-96 w-full md:h-48" isPressable onPress={() => router.push(route)}>
      <CardBody>
        <div className="">
          <div className="w-24 h-24">
            {imageSrc &&
              <Image src={imageSrc} alt={alt} layout="fill" objectFit="cover"/>
            }
          </div>
          <div className="basis-1/2">
            <h1 className="font-semibold text-xl">{title}</h1>
            <p className="text-ellipses">{text}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;

