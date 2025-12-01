"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";

//switch to react hook form!
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-sm border-4 border-western-brown rounded-lg p-8 shadow-2xl text-left"
      >
        <div className="space-y-6">
          {/* name */}
          <div>
            <label
              htmlFor="name"
              className="block text-western-brown font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-western-beige/50 border-2 border-western-brown rounded-lg focus:outline-none focus:border-western-amber transition-colors"
              placeholder="Your name"
            />
          </div>

          {/* email */}
          <div>
            <label
              htmlFor="email"
              className="block text-western-brown font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-western-beige/50 border-2 border-western-brown rounded-lg focus:outline-none focus:border-western-amber transition-colors"
              placeholder="your@email.com"
            />
          </div>

          {/* message */}
          <div>
            <label
              htmlFor="message"
              className="block text-western-brown font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-western-beige/50 border-2 border-western-brown rounded-lg focus:outline-none focus:border-western-amber transition-colors resize-none"
              placeholder="Tell us what's on your mind..."
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>

          {status === "success" && (
            <div className="p-4 bg-green-100 border-2 border-green-600 rounded-lg text-green-800 text-center font-semibold animate-fadeIn">
              Message sent successfully! We&apos;ll get back to you soon.
            </div>
          )}

          {status === "error" && (
            <div className="p-4 bg-red-100 border-2 border-red-600 rounded-lg text-red-800 text-center font-semibold animate-fadeIn">
              {errorMessage}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
