import { MessageCircle } from "lucide-react";
import { company } from "../data";
import "../styles/WhatsAppButton.css";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hello ${company.name}, I would like to request a cleaning quotation.`
  );

  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${company.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Request a quotation on WhatsApp"
    >
      <MessageCircle size={22} />
      <span>Get a WhatsApp quote</span>
    </a>
  );
}