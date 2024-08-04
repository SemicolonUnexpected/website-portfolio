import { title } from "@/components/primitives";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import nodemailer from "nodemailer";

export default function ContactPage() {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "semicolonunexpected@gmail.com",
      pass: "",
    },
  })

  return (
    <div className="space-y-4">
      <h1 className={title()}>Got questions?</h1>
      <div className="text-center">
        Please feel free to contact me with any queries, questions or thoughts on my projects using the form below
      </div>

      <Input label="Name"/>

      <Input type="email" label="Email"/>

      <Textarea label="Your message" minRows={8}/>

      <Button color="primary" size="lg" onPress={() => {
        transporter.sendMail({
          from: {}
        })
      }
      }>
        Submit
      </Button>

    </div>
  );
}
