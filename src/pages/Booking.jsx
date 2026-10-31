
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  CalendarDays,
  Clock3,
  MapPin,
  UserRound,
  Phone,
  Mail,
  Sparkles,
  MessageCircle,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { company, services } from "../data";
import "../styles/Booking.css";

const frequencies = [
  {
    value: "Once-off",
    description: "A single cleaning appointment",
  },
  {
    value: "Daily",
    description: "Cleaning every day",
  },
  {
    value: "Weekly",
    description: "A regular weekly clean",
  },
  {
    value: "Monthly",
    description: "A monthly cleaning visit",
  },
];

const initialForm = {
  frequency: "Once-off",
  fullName: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  address: "",
  information: "",
};

export default function Booking() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  }

  function validateForm() {
    const requiredFields = [
      "fullName",
      "phone",
      "email",
      "service",
      "date",
      "time",
      "address",
    ];

    for (const field of requiredFields) {
      if (!form[field].trim()) {
        setError("Please complete all required fields before submitting.");
        return false;
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    if (!/^[+()\d\s-]{7,20}$/.test(form.phone)) {
      setError("Please enter a valid phone number.");
      return false;
    }

    if (form.date < new Date().toLocaleDateString("en-CA")) {
      setError("Please choose a future date for your cleaning request.");
      return false;
    }

    return true;
  }

  function getBookingMessage() {
    const selectedService = services.find(
      (service) => service.title === form.service
    );

    return `PURESPACE CLEANING - BOOKING REQUEST

Booking Frequency: ${form.frequency}

CUSTOMER DETAILS
Full Name: ${form.fullName}
Phone Number: ${form.phone}
Email Address: ${form.email}

CLEANING DETAILS
Cleaning Service: ${selectedService?.title || form.service}
Preferred Date: ${form.date}
Preferred Time: ${form.time}
Property Address: ${form.address}

Additional Information:
${form.information.trim() || "None"}

Please contact me regarding this booking request.`;
  }

  function handleWhatsAppSubmit(event) {
    event.preventDefault();

    if (!validateForm()) return;

    const message = getBookingMessage();
    const whatsappNumber = company.whatsapp.replace(/\D/g, "");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  function handleEmailSubmit(event) {
    event.preventDefault();

    if (!validateForm()) return;

    const subject = encodeURIComponent("New Cleaning Booking Request");
    const body = encodeURIComponent(getBookingMessage());

    const emailUrl = `mailto:${company.email}?subject=${subject}&body=${body}`;

    window.location.href = emailUrl;
  }

  return (
    <>
      <Helmet>
        <title>
          Book Cleaning Services in Cape Town | PureSpace Cleaning
        </title>

        <meta
          name="description"
          content="Request a home, office, deep or move-in cleaning service in Milnerton and Cape Town. Choose your preferred date and time and contact PureSpace Cleaning for a quotation."
        />

        <meta name="robots" content="index, follow" />

        <meta
          name="keywords"
          content="book cleaning services Cape Town, cleaning booking Milnerton, house cleaning Cape Town, office cleaning booking, deep cleaning Cape Town, residential cleaning, commercial cleaning, move in cleaning Cape Town"
        />

        <meta
          property="og:title"
          content="Book a Cleaning Service | PureSpace Cleaning Cape Town"
        />

        <meta
          property="og:description"
          content="Request professional home and office cleaning in Milnerton and surrounding Cape Town areas. Send your preferred cleaning date and requirements."
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PureSpace Cleaning" />
        <meta property="og:locale" content="en_ZA" />
      </Helmet>

      <main className="booking-page">
        <section className="booking-hero">
          <div className="booking-hero-overlay" />

          <div className="wrap booking-hero-content">
            <span className="eyebrow booking-eyebrow">
              <span /> CLEANING SERVICES IN CAPE TOWN
            </span>

            <h1>
              Book your cleaning service
              <br />
              <em>and enjoy a fresher space.</em>
            </h1>

            <p>
              Looking for reliable home or office cleaning in Milnerton
              or Cape Town? Tell us about your property, choose your
              preferred date and time, and request a personalised quotation
              from PureSpace Cleaning.
            </p>
          </div>
        </section>

        <section className="booking-section">
          <div className="wrap booking-layout">
            <div className="booking-main">
              <div className="booking-heading">
                <span className="eyebrow">REQUEST A CLEANING QUOTATION</span>
                <h2>Tell us about your cleaning needs</h2>
                <p>
                  Complete the form below to request residential or
                  commercial cleaning services in Cape Town.
                </p>
              </div>

              <form className="booking-form" onSubmit={(event) => event.preventDefault()}>
                <div className="form-section">
                  <div className="form-section-title">
                    <span className="form-step">01</span>
                    <div>
                      <h3>Cleaning frequency</h3>
                      <p>How often would you like your property cleaned?</p>
                    </div>
                  </div>

                  <div className="frequency-grid">
                    {frequencies.map((frequency) => (
                      <label
                        className={`frequency-option ${
                          form.frequency === frequency.value ? "selected" : ""
                        }`}
                        key={frequency.value}
                      >
                        <input
                          type="radio"
                          name="frequency"
                          value={frequency.value}
                          checked={form.frequency === frequency.value}
                          onChange={handleChange}
                        />

                        <span className="frequency-check">
                          <CheckCircle2 size={18} />
                        </span>

                        <strong>{frequency.value}</strong>
                        <small>{frequency.description}</small>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-section">
                  <div className="form-section-title">
                    <span className="form-step">02</span>
                    <div>
                      <h3>Your contact details</h3>
                      <p>How can our Cape Town cleaning team reach you?</p>
                    </div>
                  </div>

                  <div className="booking-fields">
                    <div className="booking-field full-field">
                      <label htmlFor="fullName">Full name *</label>
                      <div className="input-with-icon">
                        <UserRound size={18} />
                        <input
                          id="fullName"
                          type="text"
                          name="fullName"
                          placeholder="Enter your full name"
                          value={form.fullName}
                          onChange={handleChange}
                          autoComplete="name"
                          required
                        />
                      </div>
                    </div>

                    <div className="booking-field">
                      <label htmlFor="phone">Phone number *</label>
                      <div className="input-with-icon">
                        <Phone size={18} />
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          placeholder="e.g. 082 123 4567"
                          value={form.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                          required
                        />
                      </div>
                    </div>

                    <div className="booking-field">
                      <label htmlFor="email">Email address *</label>
                      <div className="input-with-icon">
                        <Mail size={18} />
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={handleChange}
                          autoComplete="email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <div className="form-section-title">
                    <span className="form-step">03</span>
                    <div>
                      <h3>Cleaning appointment details</h3>
                      <p>Select your cleaning service and preferred schedule.</p>
                    </div>
                  </div>

                  <div className="booking-fields">
                    <div className="booking-field full-field">
                      <label htmlFor="service">Cleaning service *</label>
                      <div className="input-with-icon">
                        <Sparkles size={18} />
                        <select
                          id="service"
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a cleaning service</option>
                          {services.map((service) => (
                            <option key={service.title} value={service.title}>
                              {service.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="booking-field">
                      <label htmlFor="date">Preferred date *</label>
                      <div className="input-with-icon">
                        <CalendarDays size={18} />
                        <input
                          id="date"
                          type="date"
                          name="date"
                          min={new Date().toLocaleDateString("en-CA")}
                          value={form.date}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="booking-field">
                      <label htmlFor="time">Preferred time *</label>
                      <div className="input-with-icon">
                        <Clock3 size={18} />
                        <input
                          id="time"
                          type="time"
                          name="time"
                          value={form.time}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="booking-field full-field">
                      <label htmlFor="address">Property address *</label>
                      <div className="input-with-icon">
                        <MapPin size={18} />
                        <input
                          id="address"
                          type="text"
                          name="address"
                          placeholder="Enter your property address"
                          value={form.address}
                          onChange={handleChange}
                          autoComplete="street-address"
                          required
                        />
                      </div>
                    </div>

                    <div className="booking-field full-field">
                      <label htmlFor="information">
                        Additional information
                        <span className="optional-label">Optional</span>
                      </label>
                      <textarea
                        id="information"
                        name="information"
                        rows="5"
                        placeholder="Tell us about your property size, cleaning requirements or anything else we should know..."
                        value={form.information}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="booking-error" role="alert">
                    {error}
                  </div>
                )}

                <div className="booking-submit-section">
                  <h3>Send your cleaning booking request</h3>
                  <p>
                    Choose your preferred contact method. Your booking
                    details will be prepared for you to send.
                  </p>

                  <div className="booking-submit-buttons">
                    <button
                      type="button"
                      className="booking-whatsapp-button"
                      onClick={handleWhatsAppSubmit}
                    >
                      <MessageCircle size={19} />
                      Send via WhatsApp
                      <ArrowRight size={17} />
                    </button>

                    <button
                      type="button"
                      className="booking-email-button"
                      onClick={handleEmailSubmit}
                    >
                      <Send size={18} />
                      Send via Email
                    </button>
                  </div>

                  <small className="booking-disclaimer">
                    This is a cleaning booking request, not a confirmed
                    appointment. PureSpace Cleaning will contact you to
                    confirm availability and discuss your quotation.
                  </small>
                </div>
              </form>
            </div>

            <aside className="booking-sidebar">
              <div className="booking-sidebar-card">
                <span className="sidebar-icon">
                  <Sparkles size={24} />
                </span>

                <span className="eyebrow">THE PURESPACE PROMISE</span>
                <h3>A little care goes a long way.</h3>
                <p>
                  Whether you need home cleaning, office cleaning or a
                  deep clean, tell us what you need and let's work towards
                  a fresher environment.
                </p>

                <ul>
                  <li><CheckCircle2 /> Flexible cleaning schedules</li>
                  <li><CheckCircle2 /> Services tailored to your needs</li>
                  <li><CheckCircle2 /> Clear communication</li>
                  <li><CheckCircle2 /> Attention to the details</li>
                </ul>
              </div>

              <div className="booking-contact-card">
                <span className="eyebrow">NEED HELP BOOKING?</span>
                <h3>Let's talk.</h3>
                <p>
                  Contact PureSpace Cleaning if you have questions
                  about cleaning services in Milnerton or Cape Town.
                </p>

                <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
                  <Phone size={17} />
                  {company.phone}
                </a>

                <a href={`mailto:${company.email}`}>
                  <Mail size={17} />
                  {company.email}
                </a>

                <span className="booking-location">
                  <MapPin size={17} />
                  {company.location}
                </span>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
