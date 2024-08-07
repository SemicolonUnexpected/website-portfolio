"use client";

import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { useState } from "react";

import sendEmail from "@/actions/email";
import { revalidatePath } from "next/cache";

export default function ContactForm() {
  const validateEmail = (value: string) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameInvalid, setNameInvalid] = useState(true);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [messageInvalid, setMessageInvalid] = useState(false);

  const [loading, setLoading] = useState(false);

  return(
    <>
      <Input
        label="Name"
        value={name}
        onValueChange={setName}
        isInvalid={nameInvalid}
        isRequired
      />

      <Input
        type="email"
        label="Email"
        value={email}
        onValueChange={setEmail}
        isRequired
      />

      <Textarea
        label="Your message"
        minRows={8}
        value={message}
        onValueChange={setMessage}
        isRequired
      />

      <Button
        color="primary"
        size="lg"
        type="submit"
        isLoading={loading}
        onPress={async () => {
          // Validation
          if (name === "") {}
          if (!validateEmail(email)) {}
          if(message === "") {

          }

          setLoading(true);
          // Send message
          await sendEmail(name, email, message);

          // Clear fields
          setName("");
          setEmail("");
          setMessage("");

          setLoading(false);
        }}
      >
        Submit
      </Button>
      <div>
        Oops, there was an error while trying to send your email
      </div>
    </>
  );
}
