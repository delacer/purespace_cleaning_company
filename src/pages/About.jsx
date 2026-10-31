
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  HeartHandshake,
  ShieldCheck,
  ClipboardCheck,
  Leaf,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import "../styles/About.css";

const values = [
  {
    icon: HeartHandshake,
    number: "01",
    title: "Respect for your space",
    text: "We treat every home and workplace with consideration, care and professionalism.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Clear, thoughtful service",
    text: "We listen to your priorities and work to an agreed scope, with no guesswork.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Reliable by design",
    text: "We value punctuality, communication and doing the small things properly.",
  },
  {
    icon: Leaf,
    number: "04",
    title: "A fresher everyday",
    text: "Our aim is a comfortable, welcoming space that feels good to return to.",
  },
];

const process = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Tell us what you need",
    text: "Share a little about your property, cleaning requirements and preferred schedule.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Get a tailored plan",
    text: "We'll discuss the work required and help you understand the service and quotation.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Enjoy a fresher space",
    text: "Once the details are agreed, we can arrange your cleaning service.",
  },
];

export default function About() {
  return (
    <div className="about-page">
      <Helmet>
        <title>
          About PureSpace Cleaning | Cleaning Company in Milnerton, Cape Town
        </title>

        <meta
          name="description"
          content="Get to know PureSpace Cleaning, based in Milnerton, Cape Town. Discover our approach to home cleaning, office cleaning and creating fresh, welcoming spaces."
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="About PureSpace Cleaning | Cape Town"
        />

        <meta
          property="og:description"
          content="Learn about PureSpace Cleaning and our thoughtful approach to residential and commercial cleaning in Milnerton, Cape Town."
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PureSpace Cleaning" />
        <meta property="og:locale" content="en_ZA" />
      </Helmet>

      <section className="about-hero">
        <div className="about-hero-image"></div>
        <div className="about-hero-overlay"></div>

        <div className="wrap about-hero-content">
          <span className="eyebrow">GET TO KNOW PURESPACE</span>

          <h1>
            A cleaning company
            <br />
            <em>built around care.</em>
          </h1>

          <p>
            Based in Milnerton, Cape Town, PureSpace Cleaning believes
            a cared-for space makes everyday life feel a little lighter.
            That's the feeling we aim to bring to every clean.
          </p>

          <Link to="/contact" className="button button-primary">
            Get to know us <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="about-hero-caption">
          <Leaf size={18} />
          <span>Thoughtful care. Fresh spaces.</span>
        </div>
      </section>

      <section className="about-story-section">
        <div className="wrap about-story-layout">
          <div className="about-story-visual">
            <div className="about-main-image">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=85"
                alt="Professional cleaner working in a bright, tidy home"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="about-secondary-image">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=700&q=85"
                alt="Clean and organised kitchen interior"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="about-image-note">
              <Sparkles size={20} />
              <span>Care in every detail</span>
            </div>
          </div>

          <div className="about-story-copy">
            <span className="eyebrow">WHO WE ARE</span>

            <h2>
              Good cleaning is
              <br />
              <em>felt, not just seen.</em>
            </h2>

            <p>
              PureSpace Cleaning is a cleaning service based in
              Milnerton, Cape Town, built around a simple idea:
              people deserve dependable service and spaces that
              feel cared for.
            </p>

            <p>
              Whether it's refreshing a family home, preparing
              a property for its next chapter or keeping a
              workplace welcoming, we bring the same thoughtful
              approach to every cleaning request.
            </p>

            <p>
              We take time to understand what matters to you,
              communicate clearly and focus on the details
              that make a difference.
            </p>

            <Link to="/services" className="about-inline-link">
              Explore our cleaning services <ArrowUpRight size={17} />
            </Link>

            <div className="about-story-divider"></div>

            <div className="about-story-signature">
              <span className="signature-mark">
                <Leaf size={23} />
              </span>
              <div>
                <strong>PureSpace Cleaning</strong>
                <small>CARE IN EVERY DETAIL</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-mission-section">
        <div className="wrap about-mission-inner">
          <div className="mission-decoration">
            <Leaf size={42} />
          </div>

          <span className="eyebrow">OUR APPROACH</span>

          <h2>
            We don't just think about
            <br />
            how a space <em>looks.</em>
          </h2>

          <p>
            We think about how it feels to walk into a fresh,
            comfortable and welcoming environment. That's the
            experience we want every client to enjoy.
          </p>
        </div>
      </section>

      <section className="about-values-section">
        <div className="wrap">
          <div className="about-section-heading">
            <div>
              <span className="eyebrow">WHAT MATTERS TO US</span>
              <h2>
                Our standards are simple.
                <br />
                <em>Our care is intentional.</em>
              </h2>
            </div>

            <p>
              The little things matter. These are the principles
              behind the way we approach every cleaning service.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="about-value-card" key={value.title}>
                  <div className="about-value-top">
                    <span className="about-value-icon">
                      <Icon size={24} />
                    </span>
                    <span className="about-value-number">
                      {value.number}
                    </span>
                  </div>

                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                  <span className="about-value-line"></span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-process-section">
        <div className="wrap">
          <div className="about-process-heading">
            <span className="eyebrow">A SIMPLE EXPERIENCE</span>

            <h2>
              From first hello
              <br />
              <em>to fresh and welcoming.</em>
            </h2>

            <p>
              We aim to make arranging your cleaning service
              straightforward from the beginning.
            </p>
          </div>

          <div className="about-process-grid">
            {process.map((step) => {
              const Icon = step.icon;

              return (
                <article className="about-process-card" key={step.number}>
                  <div className="process-card-top">
                    <span className="process-icon">
                      <Icon size={23} />
                    </span>
                    <span>{step.number}</span>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <CheckCircle2 className="process-check" size={20} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-image"></div>
        <div className="about-cta-overlay"></div>

        <div className="wrap about-cta-content">
          <span className="eyebrow">LET'S MAKE IT FEEL FRESH</span>

          <h2>
            Your space deserves
            <br />
            <em>a little extra care.</em>
          </h2>

          <p>
            Tell us what you need. We'd love to help you create
            a cleaner, more welcoming space.
          </p>

          <div className="about-cta-actions">
            <Link to="/booking" className="button button-primary">
              Book a cleaning <ArrowUpRight size={18} />
            </Link>

            <Link to="/contact" className="about-cta-link">
              Contact us <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
