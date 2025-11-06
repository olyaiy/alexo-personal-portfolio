"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
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
    <section className="border-t border-white/5 pt-8">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Input
            type="text"
            name="name"
            id="name"
            required
            className="bg-transparent border-white/5 text-white placeholder:text-white/30 focus-visible:ring-0 focus-visible:border-white/10 h-12"
            placeholder="Name"
          />
        </div>

        <div>
          <Input
            type="email"
            name="email"
            id="email"
            required
            className="bg-transparent border-white/5 text-white placeholder:text-white/30 focus-visible:ring-0 focus-visible:border-white/10 h-12"
            placeholder="Email"
          />
        </div>

        <div>
          <Textarea
            name="message"
            id="message"
            required
            rows={4}
            className="bg-transparent border-white/5 text-white placeholder:text-white/30 focus-visible:ring-0 focus-visible:border-white/10 resize-none"
            placeholder="Message"
          />
        </div>

        {message && (
          <div
            className={`text-sm ${
              status === "success"
                ? "text-emerald-400"
                : status === "error"
                ? "text-red-400"
                : "text-white/60"
            }`}
          >
            {message}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-black hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed h-12"
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send className="h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </section>
  );
}
