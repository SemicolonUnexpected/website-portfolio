import { title } from "@/components/primitives";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import clsx from "clsx";

export default function ContactPage() {
  return (
    <div className="space-y-4">
        <h1 className={title()}>Got questions?</h1>
        <div className="text-center">
                Please feel free to contact me with any queries, questions or thoughts on my projects using the form below
        </div>

        <Input label="Name"/>

        <Input type="email" label="Email"/>

        <Textarea label="Your message" minRows={8}/>

        <Button color="primary" size="lg">Submit</Button>

    </div>
  );
}
