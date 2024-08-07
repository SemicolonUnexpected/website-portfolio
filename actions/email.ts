"use server";

import { Resend } from "resend";
import EmailTemplate from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (name: string, email: string, message: string) => {
  console.log(name, email, message);

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "Website message",
      react: EmailTemplate({ name, email, message }),
    });

    return { data: data, error: error };
  }
  catch (error) {
    console.log("Error");
  }
};

export default sendEmail;
