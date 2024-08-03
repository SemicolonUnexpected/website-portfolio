"use client";

import { Card, CardBody } from "@nextui-org/card";
import { useRouter } from "next/navigation";

export default function NavigatableCard ({ route, children, className }: { route: string, children: React.ReactNode, className: string}) {
  const router = useRouter();

  return (
    <Card className={className} isPressable onPress={() => router.push(route)}>
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
}
