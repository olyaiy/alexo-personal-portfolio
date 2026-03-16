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

  const inputClass =
    "w-full bg-transparent text-[15px] text-[#f5f5f7] placeholder:text-[#48484a] border-0 border-b border-[#222] py-3 outline-none focus:border-[#86868b] transition-colors duration-200"

  return (
    <form onSubmit={onSubmit} className="space-y-2">
      <input
        type="text"
        name="name"
        required
        placeholder="Name"
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className={inputClass}
      />
      <textarea
        name="message"
        required
        rows={3}
        placeholder="Message"
        className={`${inputClass} resize-none`}
      />

      {message && (
        <p
          className={`text-[13px] pt-2 ${
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

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-11 rounded-full bg-[#f5f5f7] text-[15px] font-medium text-black hover:bg-[#e8e8ed] active:bg-[#d1d1d6] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-150"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
