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

  const [loading, setLoading] = useState(false);

  return(
    <>
      <form action={(formData) => {
        formData.get("button")
      }}>
        <Button type="submit" name="button">Submit</Button>
      </form>
      <Input
        label="Name"
        value={name}
        onValueChange={setName}
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
          if(message === "") {
            console.log("Message empty");
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
    </>
  );
}
