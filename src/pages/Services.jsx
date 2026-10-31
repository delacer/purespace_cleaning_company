
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Home,
  Building2,
  KeyRound,
  Sparkles,
  Sofa,
  CalendarDays,
  ArrowUpRight,
  Check,
  MoveRight,
} from "lucide-react";
import { services } from "../data";
import "../styles/Services.css";

const serviceVisuals = [
  {
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=85",
    alt: "Professional home cleaning and household care",
    icon: Home,
    label: "For your home",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    alt: "Clean and organised office workspace",
    icon: Building2,
    label: "For your workplace",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    alt: "Bright interior prepared for a fresh start",
    icon: KeyRound,
    label: "A fresh start",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85",
    alt: "Kitchen interior and detailed cleaning inspiration",
    icon: Sparkles,
    label: "Extra attention",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85",
    alt: "Comfortable sofa and living room furnishings",
    icon: Sofa,
    label: "Care for furnishings",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    alt: "Beautiful and welcoming living space",
    icon: CalendarDays,
    label: "Made around you",
  },
];

export default function Services() {
  return (
    <div className="services-page">
      <Helmet>
        <title>
          Cleaning Services in Cape Town | PureSpace Cleaning
        </title>

        <meta
          name="description"
          content="Explore PureSpace Cleaning services in Milnerton and Cape Town. From home and office cleaning to deep cleaning, move-in and move-out cleaning, upholstery care and customised cleaning plans."
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Cleaning Services in Cape Town | PureSpace Cleaning"
        />
        <meta
          property="og:description"
          content="Discover home, office, deep cleaning and more with PureSpace Cleaning in Milnerton and Cape Town. Find a cleaning service for your space."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PureSpace Cleaning" />
        <meta property="og:locale" content="en_ZA" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cleaning Services in Cape Town | PureSpace Cleaning"
        />
        <meta
          name="twitter:description"
          content="Explore home, office, deep cleaning and other cleaning services from PureSpace Cleaning in Cape Town."
        />
      </Helmet>

      <section className="services-hero">
        <div className="services-hero-image"></div>
        <div className="services-hero-overlay"></div>

        <div className="wrap services-hero-content">
          <span className="eyebrow">PURESPACE CLEANING</span>

          <h1>
            Cleaning services
            <br />
            <em>for a fresher space.</em>
          </h1>

          <p>
            Discover thoughtful home and office cleaning services
            in Milnerton and Cape Town. From everyday upkeep to
            detailed cleaning, find the right service for your space.
          </p>

          <div className="services-hero-actions">
            <Link to="/booking" className="button button-primary">
              Book a cleaning <ArrowUpRight size={18} />
            </Link>

            <Link to="/contact" className="services-text-link">
              Request a quote <MoveRight size={18} />
            </Link>
          </div>
        </div>

        <div className="services-hero-note">
          <Sparkles size={19} />
          <span>Care in every detail</span>
        </div>
      </section>

      <section className="services-intro-section">
        <div className="wrap services-intro">
          <div>
            <span className="eyebrow">WHAT WE DO</span>

            <h2>
              The right clean
              <br />
              <em>for every space.</em>
            </h2>
          </div>

          <div className="services-intro-copy">
            <p>
              Whether you need home cleaning, office cleaning,
              a detailed deep clean or help preparing a property
              for a move, we make it easier to enjoy a fresh,
              welcoming environment. Explore our cleaning services
              in Cape Town and find the right fit for your needs.
            </p>

            <span className="intro-decoration">
              CLEAN SPACES. BETTER FEELINGS.
            </span>
          </div>
        </div>
      </section>

      <section className="services-list-section">
        <div className="wrap">
          <div className="services-grid">
            {services.map((service, index) => {
              const visual = serviceVisuals[index % serviceVisuals.length];
              const Icon = visual.icon;

              return (
                <article className="service-card" key={service.title}>
                  <div className="service-card-image">
                    <img
                      src={visual.image}
                      alt={visual.alt}
                      loading="lazy"
                      decoding="async"
                    />

                    <span className="service-image-label">
                      {visual.label}
                    </span>

                    <span className="service-card-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="service-card-content">
                    <div className="service-card-heading">
                      <span className="service-card-icon">
                        <Icon size={21} />
                      </span>

                      <h3>{service.title}</h3>
                    </div>

                    <p className="service-card-description">
                      {service.description}
                    </p>

                    <ul className="service-feature-list">
                      {service.items.map((item) => (
                        <li key={item}>
                          <Check size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/booking" className="service-card-link">
                      Book this service
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="services-promise">
        <div className="wrap services-promise-inner">
          <div className="promise-icon">
            <Sparkles size={30} />
          </div>

          <div className="promise-content">
            <span className="eyebrow">A LITTLE MORE ABOUT US</span>

            <h2>Every space deserves a little extra care.</h2>

            <p>
              Not sure which cleaning service is right for you?
              Tell us about your property, your priorities and
              your preferred schedule. We'll help you find a
              practical cleaning solution in Cape Town.
            </p>
          </div>

          <Link to="/contact" className="button button-primary">
            Let's talk <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      <section className="services-bottom">
        <div className="wrap services-bottom-content">
          <span className="eyebrow">READY FOR A FRESH START?</span>

          <h2>
            Your space called.
            <br />
            <em>It wants a refresh.</em>
          </h2>

          <p>
            Contact PureSpace Cleaning in Milnerton, Cape Town,
            and let's find the right cleaning service for your space.
          </p>

          <Link to="/booking" className="button button-light">
            Request a booking <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
