
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Upload,
  Image as ImageIcon,
  Video,
  X,
  Sparkles,
  Camera,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { galleryImages } from "../data.js";
import "../styles/Gallery.css";

const filters = ["All", "Images", "Videos"];

export default function Gallery() {
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState(galleryImages);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const input = useRef(null);

  const cloud = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const preset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

  useEffect(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("cleaning-gallery-demo") || "[]"
      );

      setMedia([...saved, ...galleryImages]);
    } catch {
      setMedia(galleryImages);
    }
  }, []);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    }

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  async function upload() {
    if (!file) return;

    if (!cloud || !preset) {
      setStatus("Please configure your Cloudinary environment variables.");
      return;
    }

    const kind = file.type.startsWith("video/") ? "video" : "image";

    if (!file.type.startsWith("image/") && !file.type.startsWith("video/")) {
      setStatus("Please select an image or video file.");
      return;
    }

    const maxSize = kind === "video" ? 50 : 10;

    if (file.size > maxSize * 1024 * 1024) {
      setStatus(`Please choose a ${kind} smaller than ${maxSize}MB.`);
      return;
    }

    setBusy(true);
    setStatus("");

    try {
      const body = new FormData();

      body.append("file", file);
      body.append("upload_preset", preset);
      body.append("folder", "cleaning-website/gallery");

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloud}/${kind}/upload`,
        {
          method: "POST",
          body,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Upload failed.");
      }

      const item = {
        url: data.secure_url,
        type: kind,
        caption: file.name,
      };

      const next = [item, ...media];

      setMedia(next);

      const uploaded = next.filter(
        (entry) =>
          !galleryImages.some((seed) => seed.url === entry.url)
      );

      try {
        localStorage.setItem(
          "cleaning-gallery-demo",
          JSON.stringify(uploaded)
        );
      } catch {
        setStatus(
          "Upload succeeded, but browser storage is full. The item may disappear after refreshing."
        );
        setFile(null);
        if (input.current) input.current.value = "";
        return;
      }

      setFile(null);
      if (input.current) input.current.value = "";
      setStatus("Your media has been uploaded successfully.");
    } catch (error) {
      setStatus(error.message || "Something went wrong during upload.");
    } finally {
      setBusy(false);
    }
  }

  const visibleMedia = media.filter((item) => {
    if (activeFilter === "Images") return item.type !== "video";
    if (activeFilter === "Videos") return item.type === "video";
    return true;
  });

  return (
    <div className="gallery-page">
      <Helmet>
        <title>
          Cleaning Gallery in Cape Town | PureSpace Cleaning
        </title>

        <meta
          name="description"
          content="Explore the PureSpace Cleaning gallery in Milnerton, Cape Town. View cleaning photos and videos showcasing fresh, welcoming homes and workspaces."
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Cleaning Gallery | PureSpace Cleaning Cape Town"
        />
        <meta
          property="og:description"
          content="Explore the PureSpace Cleaning collection and see examples of fresh, cared-for spaces in Cape Town."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PureSpace Cleaning" />
        <meta property="og:locale" content="en_ZA" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cleaning Gallery | PureSpace Cleaning Cape Town"
        />
        <meta
          name="twitter:description"
          content="Explore cleaning photos and videos from PureSpace Cleaning in Milnerton, Cape Town."
        />
      </Helmet>

      <section className="gallery-hero">
        <div className="gallery-hero-image"></div>
        <div className="gallery-hero-overlay"></div>

        <div className="wrap gallery-hero-content">
          <span className="eyebrow">THE PURESPACE COLLECTION</span>

          <h1>
            Spaces worth
            <br />
            <em>coming home to.</em>
          </h1>

          <p>
            Explore our cleaning gallery and discover the beauty
            of fresh, cared-for homes and workspaces. See how
            thoughtful cleaning can make a difference.
          </p>

          <a href="#gallery-work" className="gallery-hero-link">
            Explore our gallery <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="gallery-hero-caption">
          <Sparkles size={18} />
          <span>Care in every detail</span>
        </div>
      </section>

      <section className="gallery-intro-section">
        <div className="wrap gallery-intro">
          <div>
            <span className="eyebrow">A LITTLE INSPIRATION</span>

            <h2>
              Clean spaces.
              <br />
              <em>Beautiful feelings.</em>
            </h2>
          </div>

          <p>
            Every space has its own character. Our gallery brings
            together examples of the fresh, welcoming environments
            that professional home and office cleaning can help create.
            From everyday care to detailed cleaning, every detail matters.
          </p>
        </div>
      </section>

      <section className="gallery-work-section" id="gallery-work">
        <div className="wrap">
          <div className="gallery-toolbar">
            <div>
              <span className="eyebrow">EXPLORE THE COLLECTION</span>
              <h2>Our cleaning gallery</h2>
              <p>
                Browse cleaning photos and videos from our collection.
              </p>
            </div>

            <div
              className="gallery-filter-group"
              role="group"
              aria-label="Filter gallery media"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={
                    activeFilter === filter
                      ? "gallery-filter active"
                      : "gallery-filter"
                  }
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {visibleMedia.length > 0 ? (
            <div className="gallery-grid">
              {visibleMedia.map((item, index) => (
                <article
                  className={`gallery-card gallery-card-${index % 6}`}
                  key={item.url}
                >
                  <div className="gallery-media">
                    {item.type === "video" ? (
                      <video
                        src={item.url}
                        controls
                        preload="metadata"
                        playsInline
                        aria-label={item.caption || "Cleaning gallery video"}
                      />
                    ) : (
                      <button
                        type="button"
                        className="gallery-image-button"
                        onClick={() => setSelectedImage(item)}
                        aria-label={`View ${item.caption || "gallery image"}`}
                      >
                        <img
                          src={item.url}
                          alt={
                            item.caption
                              ? `${item.caption} – PureSpace Cleaning gallery`
                              : "Cleaning work by PureSpace Cleaning in Cape Town"
                          }
                          loading="lazy"
                          decoding="async"
                        />

                        <span className="gallery-view-icon">
                          <ArrowUpRight size={21} />
                        </span>
                      </button>
                    )}
                  </div>

                  <div className="gallery-caption">
                    <span className="gallery-caption-icon">
                      {item.type === "video" ? (
                        <Video size={16} />
                      ) : (
                        <ImageIcon size={16} />
                      )}
                    </span>

                    <span className="gallery-caption-text">
                      {item.caption || "PureSpace cleaning collection"}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="gallery-empty">
              <ImageIcon size={35} />
              <h3>No {activeFilter.toLowerCase()} found</h3>
              <p>Try selecting another category.</p>
            </div>
          )}

          <p className="gallery-count" aria-live="polite">
            Showing {visibleMedia.length}{" "}
            {visibleMedia.length === 1 ? "item" : "items"}
          </p>
        </div>
      </section>

      <section className="gallery-upload-section">
        <div className="wrap">
          <div className="gallery-upload-box">
            <div className="gallery-upload-heading">
              <span className="gallery-upload-icon">
                <Camera size={27} />
              </span>

              <div>
                <span className="eyebrow">KEEP YOUR GALLERY FRESH</span>
                <h2>Add your completed work.</h2>
                <p>
                  Upload photographs or videos to showcase
                  completed cleaning work.
                </p>
              </div>
            </div>

            <div
              className="gallery-drop-area"
              onClick={() => input.current?.click()}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => {
                event.preventDefault();
                const dropped = event.dataTransfer.files?.[0];
                if (dropped) setFile(dropped);
              }}
              role="button"
              tabIndex={0}
              aria-label="Choose or drop an image or video file"
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  input.current?.click();
                }
              }}
            >
              <input
                ref={input}
                type="file"
                accept="image/*,video/*"
                hidden
                onChange={(event) =>
                  setFile(event.target.files?.[0] || null)
                }
              />

              <span className="drop-icon">
                <Upload size={24} />
              </span>

              {file ? (
                <>
                  <strong>{file.name}</strong>
                  <span>
                    {(file.size / (1024 * 1024)).toFixed(2)} MB selected
                  </span>
                </>
              ) : (
                <>
                  <strong>Choose a file or drag it here</strong>
                  <span>Images up to 10MB · Videos up to 50MB</span>
                </>
              )}

              <span className="drop-browse">Browse files</span>
            </div>

            {file && (
              <div className="gallery-selected-file">
                <span>
                  {file.type.startsWith("video/") ? (
                    <Video size={17} />
                  ) : (
                    <ImageIcon size={17} />
                  )}
                  {file.name}
                </span>

                <button
                  type="button"
                  onClick={() => {
                    setFile(null);
                    if (input.current) input.current.value = "";
                  }}
                  aria-label="Remove selected file"
                >
                  <X size={17} />
                </button>
              </div>
            )}

            <div className="gallery-upload-bottom">
              <p>
                <CheckCircle2 size={16} />
                Files are uploaded through your Cloudinary preset.
              </p>

              <button
                type="button"
                className="button button-primary"
                disabled={!file || busy}
                onClick={upload}
              >
                {busy ? "Uploading..." : "Upload media"}
                <Upload size={17} />
              </button>
            </div>

            {status && (
              <p
                className={`gallery-status ${
                  status.includes("successfully") ? "success" : "error"
                }`}
                role="status"
              >
                {status.includes("successfully") && (
                  <CheckCircle2 size={17} />
                )}
                {status}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="gallery-bottom">
        <div className="wrap gallery-bottom-content">
          <span className="eyebrow">A FRESH SPACE STARTS HERE</span>

          <h2>
            Ready to make your
            <br />
            space feel <em>different?</em>
          </h2>

          <p>
            Contact PureSpace Cleaning in Milnerton, Cape Town.
            Let's talk about your cleaning needs and find a service
            that works for your space.
          </p>

          <a href="/booking" className="button button-primary">
            Book a cleaning <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
          >
            <X size={25} />
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={
                selectedImage.caption
                  ? `${selectedImage.caption} – PureSpace Cleaning`
                  : "PureSpace Cleaning gallery preview"
              }
            />
            <p>{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
