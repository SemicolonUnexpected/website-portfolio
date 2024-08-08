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

  const [nameInvalid, setNameInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [messageInvalid, setMessageInvalid] = useState(false);

  const [loading, setLoading] = useState(false);

  return(
    <div className="text-start space-y-4">
      <Input
        label="Name"
        value={name}
        onValueChange={setName}
        isInvalid={nameInvalid}
        errorMessage="Please enter a valid name"
        isRequired
      />

      <Input
        type="email"
        label="Email"
        value={email}
        onValueChange={setEmail}
        isInvalid={emailInvalid}
        errorMessage="Please enter a valid email"
        isRequired
      />

      <Textarea
        label="Your message"
        minRows={8}
        value={message}
        onValueChange={setMessage}
        isInvalid={messageInvalid}
        errorMessage="Please enter a valid message"
        isRequired
      />

      <div className="flex">
        <Button
          className="mx-auto justify-center self-center"
          color="primary"
          size="lg"
          type="submit"
          isLoading={loading}
          onPress={async () => {
            // Validation
            let error = false;
            if (name === "") {
              setNameInvalid(true);
              error = true;
            }
            else setNameInvalid(false);
            if (!validateEmail(email)) {
              setEmailInvalid(true);
              error = true;
            }
            else setEmailInvalid(false);
            if(message === "") {
              setMessageInvalid(true);
              error = true;
            }
            else setMessageInvalid(false);

            if (error) return;

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
      </div>
    </div>
  );
}
