import { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Rangoo",
  description: "Get in touch with Rangoo for bookings, press inquiries, or just to say hi.",
  openGraph: {
    title: "Contact | Rangoo",
    description: "Get in touch with Rangoo for bookings, press inquiries, or just to say hi.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-24 text-center">
      <h1 className="ml-3 text-6xl font-display text-western-brown">Contact</h1>
      <div className="section-container">
        <ContactForm />
      </div>
    </div>
  );
}
