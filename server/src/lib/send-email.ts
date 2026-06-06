import nodemailer from "nodemailer";
import { env } from "../configs/env.js";

interface SendEmailProps {
  to: string;
  type: "verify" | "reset";
  html: string;
}
const { GMAIL_APP_PASSWORD, GMAIL_USER } = env;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD,
  },
});

export const sendEmail = async ({
  to,
  type,
  html,
}: SendEmailProps): Promise<void> => {
  const subject =
    type === "verify" ? "Verify your email" : "Reset your password";

  const res = await transporter.sendMail({
    from: `"Sonorous" <${GMAIL_USER}>`,
    to,
    subject,
    html,
  });
  console.log(res.accepted);
};
