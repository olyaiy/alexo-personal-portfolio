"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    try {
      console.log("📤 Client: Preparing form submission");
      const formData = new FormData(event.currentTarget);
      
      // access_key can be provided server-side; still append if present client-side
      if (process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) {
        formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
        console.log("🔑 Client: Added access key from env");
      }

      console.log("📋 Client: FormData entries:", Array.from(formData.entries()));
      console.log("🌐 Client: Sending to /api/contact");

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });

      console.log("📡 Client: Response status:", response.status);
      const data = await response.json();
      console.log("📦 Client: Response data:", data);
      
      if (data.success) {
        console.log("✅ Success!");
        setResult("Message sent successfully!");
        event.currentTarget.reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        console.error("❌ Submission failed:", data);
        setResult(data.message || "Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("❌ Client error:", error);
      console.error("❌ Error details:", error instanceof Error ? error.message : String(error));
      setResult("Error sending message. Please try again.");
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

        {result && (
          <div className={`text-sm font-light tracking-wide ${
            result.includes("success") ? 'text-emerald-400' : result.includes("Error") ? 'text-red-400' : 'text-white/60'
          }`}>
            {result}
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
