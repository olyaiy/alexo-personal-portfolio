"use client";

import { useState } from "react";
import { submitContactMessage } from "@/lib/contact";

type ContactFormStatus = "idle" | "sending" | "success" | "error"

export function ContactForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("sending");
    setMessage("Sending...");

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      const payload = {
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        message: String(formData.get("message") ?? "")
      };

      const data = await submitContactMessage(payload);

      if (data.success) {
        setStatus("success");
        setMessage(data.message || "Message sent successfully!");
        form.reset();
        setTimeout(() => setMessage(""), 5000);
      } else {
        setStatus("error");
        setMessage(data.message || "Error sending message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Error sending message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <input
        type="text"
        name="name"
        required
        placeholder="Name"
        className="w-full h-11 px-4 rounded-xl bg-[#2c2c2e] text-[15px] text-[#f5f5f7] placeholder:text-[#636366] border-0 outline-none focus:ring-2 focus:ring-[#0a84ff] transition-shadow duration-200"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className="w-full h-11 px-4 rounded-xl bg-[#2c2c2e] text-[15px] text-[#f5f5f7] placeholder:text-[#636366] border-0 outline-none focus:ring-2 focus:ring-[#0a84ff] transition-shadow duration-200"
      />
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Message"
        className="w-full px-4 py-3 rounded-xl bg-[#2c2c2e] text-[15px] text-[#f5f5f7] placeholder:text-[#636366] border-0 outline-none focus:ring-2 focus:ring-[#0a84ff] resize-none transition-shadow duration-200"
      />

      {message && (
        <p
          className={`text-[13px] ${
            status === "success"
              ? "text-[#30d158]"
              : status === "error"
              ? "text-[#ff453a]"
              : "text-[#86868b]"
          }`}
        >
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-11 rounded-xl bg-[#0a84ff] text-[15px] font-medium text-white hover:bg-[#0a84ff]/90 active:bg-[#0a84ff]/80 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-150"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
