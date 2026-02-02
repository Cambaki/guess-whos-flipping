import { Hono } from "hono";
import { cors } from "hono/cors";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const app = new Hono<{ Bindings: Env }>();

// Enable CORS for your frontend
app.use("/api/*", cors());

// Contact form endpoint
app.post("/api/contact", zValidator("json", contactSchema), async (c) => {
  const { name, email, message } = c.req.valid("json");

  try {
    // Using Resend API to send email
    const resendApiKey = c.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not configured");
      return c.json({ error: "Email service not configured" }, 500);
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Guess Who's Flipping <onboarding@resend.dev>", // You'll update this with your verified domain
        to: ["Guesswhosflipping@gmail.com"],
        reply_to: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend API error:", error);
      return c.json({ error: "Failed to send email" }, 500);
    }

    return c.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return c.json({ error: "Failed to send email" }, 500);
  }
});

export default app;
