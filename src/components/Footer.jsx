
import { Link } from "react-router-dom";
import {
  Leaf,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { company } from "../data";
import "../styles/Footer.css";

const siteLinks = [
  { label: "Home", path: "/" },
  { label: "Our services", path: "/services" },
  { label: "About us", path: "/about" },
  { label: "Gallery", path: "/gallery" },
  { label: "Booking", path: "/booking" },
  { label: "Contact us", path: "/contact" },
];

const serviceAreas = [
  "Cape Town CBD",
  "Northern Suburbs",
  "Southern Suburbs",
  "Constantia",
  "Noordhoek",
  "Sea Point",
  "Milnerton",
  "Green Point",
  "Camps Bay",
];

export default function Footer() {
  const whatsappNumber = company.whatsapp.replace(/\D/g, "");

  return (
    <footer className="footer">
      {/* TOP CTA */}
      <div className="footer-cta-wrap">
        <div className="wrap footer-cta">
          <div>
            <span className="footer-cta-eyebrow">
              A FRESHER SPACE STARTS HERE
            </span>
            <h2>Ready to enjoy a cleaner space?</h2>
            <p>
              Let PureSpace take care of the cleaning while you enjoy
              the comfort of a fresh, welcoming environment.
            </p>
          </div>

          <Link className="footer-cta-button" to="/contact">
            Request a quotation
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="wrap footer-grid">
          {/* BRAND */}
          <div className="footer-about">
            <Link to="/" className="brand footer-brand">
              <span className="brand-mark">
                <Leaf size={21} />
              </span>

              <span>
                {company.name}
                <small>CARE IN EVERY DETAIL</small>
              </span>
            </Link>

            <p>
              Professional cleaning and thoughtful service for
              homes and businesses. We help create fresher,
              cleaner spaces throughout Cape Town.
            </p>
          </div>

          {/* SITEMAP */}
          <div className="footer-column">
            <h3>Explore</h3>

            <div className="footer-links">
              {siteLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <ChevronRight size={14} />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* SERVICE AREAS */}
          <div className="footer-column footer-areas">
            <h3>Areas we serve</h3>

            <p className="footer-column-intro">
              Cleaning services available across:
            </p>

            <div className="footer-area-list">
              {serviceAreas.map((area) => (
                <span key={area}>
                  <MapPin size={13} />
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="footer-column footer-contact">
            <h3>Get in touch</h3>

            <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
              <span className="footer-contact-icon">
                <Phone size={16} />
              </span>
              <span>{company.phone}</span>
            </a>

            <a href={`mailto:${company.email}`}>
              <span className="footer-contact-icon">
                <Mail size={16} />
              </span>
              <span>{company.email}</span>
            </a>

            <div>
              <span className="footer-contact-icon">
                <MapPin size={16} />
              </span>
              <span>{company.address}</span>
            </div>

            <div>
              <span className="footer-contact-icon">
                <Clock size={16} />
              </span>
              <span>
                {company.workingHours}
                <small>{company.openingTime}</small>
                <small>Sunday: Closed</small>
              </span>
            </div>

            <a
              className="footer-whatsapp-link"
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom-wrap">
        <div className="wrap footer-bottom">
          <p>
            © {new Date().getFullYear()} {company.name}.
            All rights reserved.
          </p>

          <p>Made for cleaner, calmer spaces.</p>

          <Link to="/" className="footer-back-top">
            Back to top <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
