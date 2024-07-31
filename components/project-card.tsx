"use client"

import { Card, CardBody } from "@nextui-org/card";
import { useRouter } from "next/navigation";

import * as React from "react";

interface ProjectCardProps {
  title: string;
  text: string;
  page: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, text, page }) => {
  const router = useRouter();

  return (
    <Card className="w-full" isPressable onPress={() => router.push(page)}>
      <CardBody>
        <h1 className="font-semibold text-xl">{title}</h1>
        <p>{text}</p>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;

