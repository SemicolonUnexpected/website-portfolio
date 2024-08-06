"use server";

const sendEmail = async (name: string, email: string, message: string) => {
  console.log(process.env.GMAIL_APP_PASSWORD);
};

export default sendEmail;
