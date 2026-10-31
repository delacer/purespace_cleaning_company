
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock3,
  Sparkles,
  Send,
} from "lucide-react";
import {
  services,
  galleryImages,
  initialTestimonials,
} from "../data";
import "../styles/Home.css";

const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const REVIEWS_ENDPOINT = "/.netlify/functions/reviews";

export default function Home() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    rating: "5",
    message: "",
  });
  const [reviewMessage, setReviewMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadApprovedReviews() {
      try {
        const response = await fetch(REVIEWS_ENDPOINT);

        if (!response.ok) {
          throw new Error("Could not load customer reviews.");
        }

        const approvedReviews = await response.json();

        if (!Array.isArray(approvedReviews)) {
          throw new Error("Invalid reviews response.");
        }

        if (isMounted) {
          setTestimonials([
            ...approvedReviews,
            ...initialTestimonials,
          ]);
        }
      } catch (error) {
        console.error("Review loading error:", error);
      } finally {
        if (isMounted) {
          setIsLoadingReviews(false);
        }
      }
    }

    loadApprovedReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  function handleReviewChange(event) {
    const { name, value } = event.target;

    setReviewForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleReviewSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    const name = reviewForm.name.trim();
    const message = reviewForm.message.trim();
    const rating = Number(reviewForm.rating);

    if (!name || !message) {
      setReviewMessage("Please complete all review fields.");
      return;
    }

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      setReviewMessage("Please select a valid rating.");
      return;
    }

    if (!CLOUDINARY_CLOUD_NAME) {
      setReviewMessage(
        "Review submissions are temporarily unavailable. Please contact us directly."
      );
      return;
    }

    const review = {
      id: crypto.randomUUID(),
      name,
      rating,
      message,
      createdAt: new Date().toISOString(),
    };

    setIsSubmitting(true);
    setReviewMessage("");

    try {
      const reviewFile = new Blob(
        [JSON.stringify(review)],
        { type: "application/json" }
      );

      const formData = new FormData();

      formData.append("file", reviewFile, `${review.id}.json`);
      formData.append("upload_preset", "purespace_reviews");

      const uploadUrl = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/raw/upload`;

      const response = await fetch(uploadUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        throw new Error(
          errorData?.error?.message ||
          "Your review could not be submitted. Please try again."
        );
      }

      setReviewForm({
        name: "",
        rating: "5",
        message: "",
      });

      setReviewMessage(
        "Thank you for sharing your experience! Your review has been submitted and is awaiting approval."
      );
    } catch (error) {
      console.error("Review submission error:", error);

      setReviewMessage(
        error.message ||
        "Something went wrong. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>
          PureSpace Cleaning | Home & Office Cleaning in Cape Town
        </title>

        <meta
          name="description"
          content="Looking for cleaning services in Cape Town? PureSpace Cleaning offers home, office, deep and move-in cleaning services in Milnerton and surrounding areas. Contact us for a quotation."
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="PureSpace Cleaning | Cleaning Services in Cape Town"
        />
        <meta
          property="og:description"
          content="Enjoy a fresher home or workplace with PureSpace Cleaning. Explore our cleaning services in Milnerton and Cape Town."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PureSpace Cleaning" />
        <meta property="og:locale" content="en_ZA" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PureSpace Cleaning | Cleaning Services in Cape Town"
        />
        <meta
          name="twitter:description"
          content="Home and office cleaning services in Milnerton and Cape Town. Discover PureSpace Cleaning."
        />
      </Helmet>

      <main>
        <section className="hero">
          <div className="hero-image" />

          <div className="wrap hero-content">
            <span className="eyebrow hero-eyebrow">
              <span /> CLEAN SPACES. CLEARER DAYS.
            </span>

            <h1>
              Cleaning services
              <br />
              <em>that feel different.</em>
            </h1>

            <p>
              Discover thoughtful home and office cleaning in
              Milnerton and Cape Town. We take care of the details,
              so you can enjoy a fresher, more comfortable space.
            </p>

            <div className="hero-actions">
              <Link className="button button-primary" to="/booking">
                Book a cleaning <ArrowUpRight size={18} />
              </Link>

              <Link className="text-link light-link" to="/services">
                Explore our services <ArrowRight size={17} />
              </Link>
            </div>

            <div className="hero-proof">
              <div className="avatar-stack">
                <span>✓</span>
                <span>✦</span>
                <span>✧</span>
              </div>

              <div>
                <strong>Care you can feel</strong>
                <small>Professional. Considerate. Thorough.</small>
              </div>
            </div>
          </div>

          <div className="hero-note">
            <Sparkles size={17} />
            <span>Fresh spaces start here</span>
          </div>
        </section>

        <section className="trust-strip">
          <div className="wrap trust-items">
            <span><CheckCircle2 /> Detail-focused service</span>
            <span><ShieldCheck /> Respect for your space</span>
            <span><Clock3 /> Flexible scheduling</span>
            <span><Sparkles /> Thoughtful finishing</span>
          </div>
        </section>

        <section className="section wrap">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE DO</span>
            <h2>Cleaning services for your space</h2>
            <p>
              From everyday home cleaning to a detailed refresh,
              explore cleaning solutions for homes and workplaces
              in Milnerton and Cape Town.
            </p>
          </div>

          <div className="service-grid">
            {services.slice(0, 3).map((service, index) => (
              <article className="service-card" key={service.title}>
                <span className="service-number">0{index + 1}</span>
                <div className="service-icon"><Sparkles /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="card-link">
                  Explore service <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>

          <div className="center-action">
            <Link className="button button-outline" to="/services">
              View all services <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>

        <section className="split-section">
          <div className="split-photo">
            {galleryImages[0] && (
              <img
                src={galleryImages[0].url}
                alt="Fresh and welcoming living space featured in the PureSpace Cleaning gallery"
                loading="lazy"
                decoding="async"
              />
            )}

            <div className="photo-stamp">
              <Sparkles />
              <strong>Care in<br />every detail</strong>
            </div>
          </div>

          <div className="split-copy">
            <span className="eyebrow">A LITTLE MORE THAN CLEAN</span>

            <h2>
              Come home to
              <br />
              <em>the feeling of fresh.</em>
            </h2>

            <p>
              Cleaning is personal. That's why we approach every
              space with care, respect, and a clear plan. Whether
              you need home cleaning, office cleaning or a deeper
              refresh, our goal is to leave your space feeling
              comfortable and ready for what matters next.
            </p>

            <ul className="check-list">
              <li><CheckCircle2 /> Clear communication from the first enquiry</li>
              <li><CheckCircle2 /> A service shaped around your priorities</li>
              <li><CheckCircle2 /> Thoughtful attention to finishing touches</li>
            </ul>

            <Link className="text-link" to="/about">
              Get to know us <ArrowRight size={17} />
            </Link>
          </div>
        </section>

        <section className="section wrap">
          <div className="section-heading">
            <span className="eyebrow">A LOOK AT OUR WORK</span>
            <h2>Little details. Big difference.</h2>
            <p>
              Explore our cleaning gallery and discover inspiration
              for a fresher, more welcoming space.
            </p>
          </div>

          <div className="home-gallery">
            {galleryImages.slice(0, 3).map((item, index) => (
              <Link
                to="/gallery"
                className={`home-gallery-item item-${index}`}
                key={item.url}
              >
                <img
                  src={item.url}
                  alt={
                    item.caption
                      ? `${item.caption} – PureSpace Cleaning gallery`
                      : "Cleaning inspiration from PureSpace Cleaning"
                  }
                  loading="lazy"
                  decoding="async"
                />
                <span>{item.caption}</span>
              </Link>
            ))}
          </div>

          <div className="center-action">
            <Link className="button button-outline" to="/gallery">
              See our gallery <ArrowUpRight size={17} />
            </Link>
          </div>
        </section>

        <section className="testimonial-band">
          <div className="wrap">
            <div className="section-heading light">
              <span className="eyebrow">KIND WORDS</span>
              <h2>A clean that speaks for itself</h2>
              <p>
                Every space has a story. We're grateful when customers
                share their experiences.
              </p>
            </div>

            <div className="quote-grid">
              {testimonials.map((review) => (
                <article className="quote-card" key={review.id}>
                  <div
                    className="stars"
                    aria-label={`${review.rating} out of 5 stars`}
                  >
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </div>

                  <p>“{review.message}”</p>
                  <strong>{review.name}</strong>
                  <small>Customer feedback</small>
                </article>
              ))}
            </div>

            {isLoadingReviews && (
              <p className="review-success" role="status">
                Loading customer reviews...
              </p>
            )}

            <div className="review-form-wrapper">
              <div className="review-form-heading">
                <span className="eyebrow">SHARE YOUR EXPERIENCE</span>
                <h3>We'd love to hear from you.</h3>
                <p>
                  Have you used our cleaning services? Tell us how we did.
                </p>
              </div>

              <form className="review-form" onSubmit={handleReviewSubmit}>
                <div className="review-form-row">
                  <div className="review-field">
                    <label htmlFor="review-name">Your name</label>
                    <input
                      id="review-name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={reviewForm.name}
                      onChange={handleReviewChange}
                      required
                      maxLength={60}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="review-field">
                    <label htmlFor="review-rating">Your rating</label>
                    <select
                      id="review-rating"
                      name="rating"
                      value={reviewForm.rating}
                      onChange={handleReviewChange}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="5">★★★★★ - Excellent</option>
                      <option value="4">★★★★ - Very good</option>
                      <option value="3">★★★ - Good</option>
                      <option value="2">★★ - Fair</option>
                      <option value="1">★ - Poor</option>
                    </select>
                  </div>
                </div>

                <div className="review-field">
                  <label htmlFor="review-message">Your review</label>
                  <textarea
                    id="review-message"
                    name="message"
                    placeholder="Tell us about your experience..."
                    rows="4"
                    value={reviewForm.message}
                    onChange={handleReviewChange}
                    required
                    maxLength={1000}
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  className="button button-primary review-submit"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit review"}
                  <Send size={17} />
                </button>

                {reviewMessage && (
                  <p className="review-success" role="status">
                    <CheckCircle2 size={17} />
                    {reviewMessage}
                  </p>
                )}
              </form>
            </div>

            <div className="center-action">
              <Link className="text-link light-link" to="/booking">
                Book your cleaning <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        <section className="closing-cta">
          <div className="wrap closing-inner">
            <div>
              <span className="eyebrow">YOUR FRESH START</span>

              <h2>
                Let's make your space
                <br />
                <em>feel like new.</em>
              </h2>

              <p>
                Tell us a little about your space and what you need.
                Contact PureSpace Cleaning in Milnerton, Cape Town
                for a tailored quotation.
              </p>
            </div>

            <Link className="button button-primary" to="/booking">
              Book a cleaning <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
