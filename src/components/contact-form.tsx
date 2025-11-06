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
    <section className="mb-16">
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-3">
          <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
          <h2 className="text-[10px] font-medium text-white/50 uppercase tracking-[0.3em]">
            Send a Message
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent"></div>
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-light text-white/60 tracking-wide">
            Name
          </label>
          <Input
            type="text"
            name="name"
            id="name"
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-white/20 focus-visible:border-white/30"
            placeholder="Your name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-light text-white/60 tracking-wide">
            Email
          </label>
          <Input
            type="email"
            name="email"
            id="email"
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-white/20 focus-visible:border-white/30"
            placeholder="your.email@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-light text-white/60 tracking-wide">
            Message
          </label>
          <Textarea
            name="message"
            id="message"
            required
            rows={5}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-white/20 focus-visible:border-white/30 resize-none"
            placeholder="Tell me about your project or just say hi..."
          />
        </div>

        {message && (
          <div
            className={`text-sm font-light tracking-wide ${
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
          className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          size="lg"
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
