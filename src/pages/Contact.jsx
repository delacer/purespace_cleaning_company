
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  MessageCircle,
  Send,
  CalendarDays,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { company, services } from "../data";
import "../styles/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    details: "",
  });

  function update(e) {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function submit(e) {
    e.preventDefault();

    const body = encodeURIComponent(`
PURESPACE CLEANING - QUOTATION REQUEST

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "Not provided"}
Service: ${form.service}
Details: ${form.details || "None provided"}

Please contact me regarding this quotation request.
    `);

    const whatsappNumber = company.whatsapp.replace(/\D/g, "");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${body}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    company.address
  )}&output=embed`;

  const mapDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    company.address
  )}`;

  return (
    <>
      <Helmet>
        <title>
          Contact PureSpace Cleaning | Cleaning Services in Cape Town
        </title>

        <meta
          name="description"
          content="Contact PureSpace Cleaning in Milnerton, Cape Town for home cleaning, office cleaning, deep cleaning and move-in or move-out cleaning quotations. Call, email or WhatsApp us."
        />

        <meta name="robots" content="index, follow" />

        <meta
          name="keywords"
          content="contact cleaning company Cape Town, cleaning services Milnerton, cleaning quotation Cape Town, house cleaning contact, office cleaning Cape Town, deep cleaning quotation, PureSpace Cleaning contact"
        />

        <meta
          property="og:title"
          content="Contact PureSpace Cleaning | Cape Town"
        />

        <meta
          property="og:description"
          content="Need home or office cleaning in Cape Town? Contact PureSpace Cleaning in Milnerton for a cleaning quotation."
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PureSpace Cleaning" />
        <meta property="og:locale" content="en_ZA" />

        <meta
          name="twitter:card"
          content="summary"
        />

        <meta
          name="twitter:title"
          content="Contact PureSpace Cleaning | Cape Town"
        />

        <meta
          name="twitter:description"
          content="Get in touch with PureSpace Cleaning for home, office and deep cleaning enquiries in Cape Town."
        />
      </Helmet>

      <div className="contact-page">
        {/* HERO */}
        <section className="contact-hero">
          <div className="contact-hero-pattern" />

          <div className="wrap contact-hero-content">
            <div className="contact-hero-text">
              <span className="eyebrow">
                <Sparkles size={14} />
                CLEANING SERVICES IN CAPE TOWN
              </span>

              <h1>
                Contact PureSpace Cleaning.
                <br />
                <em>Let's make your space shine.</em>
              </h1>

              <p>
                Looking for home cleaning, office cleaning or a deep
                cleaning service in Milnerton or Cape Town? Get in touch
                with PureSpace Cleaning and tell us how we can help.
              </p>

              <div className="contact-hero-actions">
                <a href="#quote-form" className="button button-primary">
                  Request a cleaning quotation <ArrowUpRight size={17} />
                </a>

                <a
                  href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-hero-link"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="contact-hero-card">
              <div className="hero-card-icon">
                <Sparkles size={24} />
              </div>

              <span>YOUR SPACE, OUR PRIORITY</span>

              <h2>
                Let's create a space
                <em> you'll love coming home to.</em>
              </h2>

              <div className="hero-card-divider" />

              <div className="hero-card-bottom">
                <div className="hero-card-check">
                  <ShieldCheck size={19} />
                </div>
                <p>Get in touch and tell us about your cleaning needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT AND QUOTATION */}
        <section className="section contact-main" id="contact-details">
          <div className="wrap">
            <div className="contact-section-heading">
              <span className="eyebrow">WE'RE HERE TO HELP</span>
              <h2>
                Get in touch with <em>our team.</em>
              </h2>
              <p>
                Have a question or need a cleaning quotation in Cape Town?
                Contact us by phone, email or WhatsApp.
              </p>
            </div>

            <div className="contact-layout">
              {/* CONTACT INFORMATION */}
              <div className="contact-info">
                <div className="contact-info-heading">
                  <span className="eyebrow">CONTACT INFORMATION</span>
                  <h3>We'd love to hear from you.</h3>
                  <p>
                    Choose your preferred way to contact PureSpace Cleaning.
                    We'll be happy to assist with your enquiry.
                  </p>
                </div>

                <div className="contact-methods">
                  <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
                    <span className="contact-method-icon">
                      <Phone size={20} />
                    </span>

                    <div>
                      <small>Call us</small>
                      <strong>{company.phone}</strong>
                    </div>

                    <ArrowUpRight
                      className="contact-method-arrow"
                      size={18}
                    />
                  </a>

                  <a href={`mailto:${company.email}`}>
                    <span className="contact-method-icon">
                      <Mail size={20} />
                    </span>

                    <div>
                      <small>Email us</small>
                      <strong>{company.email}</strong>
                    </div>

                    <ArrowUpRight
                      className="contact-method-arrow"
                      size={18}
                    />
                  </a>

                  <div className="contact-method-static">
                    <span className="contact-method-icon">
                      <MapPin size={20} />
                    </span>

                    <div>
                      <small>Business address</small>
                      <strong>{company.address}</strong>
                    </div>
                  </div>

                  <div className="contact-method-static">
                    <span className="contact-method-icon">
                      <Clock size={20} />
                    </span>

                    <div>
                      <small>Business hours</small>
                      <strong>{company.workingHours}</strong>
                      <span>{company.openingTime}</span>
                    </div>
                  </div>

                  <div className="contact-method-static">
                    <span className="contact-method-icon">
                      <CalendarDays size={20} />
                    </span>

                    <div>
                      <small>Sunday</small>
                      <strong>{company.closedDays} – Closed</strong>
                    </div>
                  </div>
                </div>

                <a
                  className="contact-whatsapp"
                  href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={21} />
                  <span>Chat with us on WhatsApp</span>
                  <ArrowUpRight size={19} />
                </a>

                <div className="contact-response-note">
                  <ShieldCheck size={18} />
                  <p>We're ready to help with your cleaning enquiry.</p>
                </div>
              </div>

              {/* QUOTATION FORM */}
              <form
                className="contact-form"
                id="quote-form"
                onSubmit={submit}
              >
                <div className="form-heading">
                  <span className="eyebrow">GET A CLEANING QUOTATION</span>
                  <h3>Tell us about your space.</h3>
                  <p>
                    Complete the form below to prepare your cleaning
                    quotation request in WhatsApp.
                  </p>
                </div>

                <div className="form-two">
                  <label htmlFor="contact-name">
                    Full name <span>*</span>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={update}
                      required
                      placeholder="Your full name"
                      autoComplete="name"
                    />
                  </label>

                  <label htmlFor="contact-phone">
                    Phone number <span>*</span>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={update}
                      required
                      placeholder="+27..."
                      autoComplete="tel"
                    />
                  </label>
                </div>

                <label htmlFor="contact-email">
                  Email address
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={update}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </label>

                <label htmlFor="contact-service">
                  Cleaning service required <span>*</span>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={update}
                    required
                  >
                    <option value="">Select a cleaning service</option>

                    {services.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </label>

                <label htmlFor="contact-details">
                  Tell us about your cleaning needs
                  <textarea
                    id="contact-details"
                    name="details"
                    value={form.details}
                    onChange={update}
                    rows={5}
                    placeholder="Tell us about your property, approximate size, preferred date or any specific cleaning requirements..."
                  />
                </label>

                <button
                  className="button button-primary contact-submit"
                  type="submit"
                >
                  Send quotation request
                  <Send size={17} />
                </button>

                <div className="form-footnote">
                  <MessageCircle size={15} />
                  <span>
                    Your request will open in WhatsApp, ready for you to send.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="contact-map-section">
          <div className="wrap">
            <div className="contact-map-heading">
              <div>
                <span className="eyebrow">OUR LOCATION</span>
                <h2>
                  Find <em>PureSpace Cleaning.</em>
                </h2>
                <p>{company.address}</p>
              </div>

              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-directions-link"
              >
                Get directions <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="contact-map">
              <iframe
                title="Map showing PureSpace Cleaning at 25 Venus Avenue, Milnerton, Cape Town"
                src={mapUrl}
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="map-address">
              <span className="map-address-icon">
                <MapPin size={21} />
              </span>

              <div>
                <strong>PureSpace Cleaning</strong>
                <p>{company.address}</p>
              </div>

              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
