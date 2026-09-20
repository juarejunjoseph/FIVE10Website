"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent(`Website inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nContact Number: ${phone}\n\nMessage:\n${message}`
    );

    setSent(true);
    window.location.href = `mailto:fiveproductions@five10productionscorp.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        <span>Email Address</span>
        <input type="email" name="email" required autoComplete="email" />
      </label>
      <label>
        <span>Contact Number</span>
        <input name="phone" autoComplete="tel" />
      </label>
      <label className="message-field">
        <span>Your Message</span>
        <textarea name="message" required rows={7} />
      </label>
      <button type="submit">{sent ? "Message prepared" : "Submit"}</button>
    </form>
  );
}
