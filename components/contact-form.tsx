"use client";

import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { useState } from "react";

import sendEmail from "@/actions/email";

import nodemailer from "nodemailer";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  return(
    <>
      <Input
        label="Name"
        value={name}
        onValueChange={setName}
      />

      <Input
        type="email"
        label="Email"
        value={email}
        onValueChange={setEmail}
      />

      <Textarea
        label="Your message"
        minRows={8}
        value={message}
        onValueChange={setMessage}
      />

      <Button
        color="primary"
        size="lg"
        type="submit"
        isLoading={false}
        onPress={async () => {
          // Validation

          // Send message
          setLoading(true);
          await sendEmail(name, email, message).then(() => {
            setLoading(false);
          })
        }}
      >
        Submit
      </Button>
    </>
  );
}
