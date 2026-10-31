
# PureSpace Cleaning Website

A modern, responsive cleaning services website built for **PureSpace Cleaning**, a cleaning business based in Milnerton, Cape Town, South Africa.

The website provides visitors with information about available cleaning services, a gallery of cleaning work, company details, booking enquiries and contact options. It is designed to deliver a professional online presence while making it easy for potential customers to discover services and request quotations.

## Overview

PureSpace Cleaning is a React-based business website designed with a clean visual identity, responsive layouts and straightforward navigation.

The project focuses on three main objectives:

- **Business presentation:** Showcase the company's services, brand and work professionally.
- **Customer enquiries:** Make it easy for visitors to request bookings and contact the business.
- **Online visibility:** Implement page-specific SEO metadata and search-friendly content to support discoverability.

## Features

### Website Experience
- Responsive layouts for desktop, tablet and mobile devices.
- Modern user interface with a consistent green-and-white brand identity.
- Reusable React components and organised page structure.
- Navigation between dedicated website pages.
- Consistent typography, spacing and visual styling.

### Business Pages
- **Home:** Introduction to PureSpace Cleaning, featured services and customer feedback.
- **Services:** Overview of available cleaning services and service features.
- **About:** Company information, values and approach to cleaning.
- **Gallery:** Image and video collection showcasing cleaning-related content.
- **Booking:** Booking enquiry form for prospective customers.
- **Contact:** Business contact information, location and enquiry options.

### Customer Interaction
- Booking enquiry functionality.
- WhatsApp contact integration.
- Contact form.
- Gallery image preview.
- Gallery filtering for images and videos.
- Cloudinary media uploads.
- Customer review submission interface.

### Search Engine Optimisation
- Page-specific SEO titles and meta descriptions.
- Open Graph metadata for social sharing.
- Twitter/X card metadata.
- Semantic HTML structure.
- Descriptive image alternative text.
- Search-friendly content targeting relevant cleaning services and locations.
- Responsive and mobile-friendly page layouts.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Frontend user interface |
| JavaScript (ES6+) | Application logic |
| Vite | Development server and build tooling |
| React Router | Client-side navigation |
| CSS3 | Styling and responsive layouts |
| Lucide React | Interface icons |
| React Helmet Async | Page-level SEO metadata |
| Cloudinary | Image and video uploads |

## Project Structure

```text
purespace-cleaning/
│
├── public/
│   ├── favicon.svg
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Gallery.jsx
│   │   ├── Booking.jsx
│   │   ├── Contact.jsx
│   │   └── ...
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── Navbar.css
│   │   ├── Home.css
│   │   ├── Services.css
│   │   ├── About.css
│   │   ├── Gallery.css
│   │   ├── Booking.css
│   │   ├── Contact.css
│   │   └── ...
│   │
│   ├── data.js
│   ├── App.jsx
│   └── main.jsx
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

*The structure above represents the intended organisation. Adjust filenames to match the actual repository.*

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (included with Node.js)
- Git

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Navigate to the Project

```bash
cd purespace-cleaning
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root.

```env
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_unsigned_upload_preset
```


**Important:** Vite exposes variables prefixed with `VITE_` to browser-side code. Never store Cloudinary API secrets, private API keys or other sensitive credentials in these variables.

### 5. Start the Development Server

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

### 6. Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Environment Configuration

The application uses the following environment variables:

| Variable | Description |
|---|---|
| `VITE_CLOUDINARY_CLOUD_NAME` | Cloudinary cloud account name |
| `VITE_CLOUDINARY_UPLOAD_PRESET` | Cloudinary upload preset |



## Deployment

- [Netlify](https://www.netlify.com/)


### Recommended Build Settings

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |

Configure the hosting platform to serve `index.html` for application routes so React Router pages work correctly after direct navigation or refresh.

After deployment, verify:
- All routes load correctly.
- Images and videos display properly.
- Booking and contact links work.
- Cloudinary uploads are configured correctly.
- Mobile layouts render correctly.
- SEO metadata is present on each page.
- The deployed domain is configured in Google Search Console.

## SEO and Performance

The website includes foundational SEO practices intended to improve how search engines and social platforms understand and present its pages.

Recommended production improvements include:

- Configure canonical URLs using the actual deployed domain.
- Create and submit an XML sitemap.
- Configure `robots.txt`.
- Verify the website through Google Search Console.
- Add a suitable Open Graph sharing image.
- Optimise images and use modern formats such as WebP or AVIF.
- Monitor performance using Google PageSpeed Insights.
- Ensure all important pages are crawlable and indexable.

SEO implementation does not guarantee search rankings or indexing. Performance, useful content, business relevance, competition and external signals also influence search visibility.

## Business Information

**PureSpace Cleaning**

| Detail | Information |
|---|---|
| Location | Milnerton, Cape Town, South Africa |
| Address | 25 Venus Ave, Milnerton, Cape Town, 7441 |
| Phone / WhatsApp | +27 63 653 4255 |
| Operating Days | Monday – Saturday |
| Operating Hours | 8:00 AM – 5:00 PM |
| Sunday | Closed |

## Security and Production Considerations

Before using the website in a live business environment:

- Protect media upload functionality with appropriate authentication and upload restrictions.
- Do not expose private API credentials in frontend environment variables.
- Implement secure storage and moderation for customer reviews.
- Connect booking enquiries to a reliable business workflow.
- Verify all contact details, email addresses and business information.
- Use HTTPS on the deployed domain.
- Configure appropriate hosting redirects and security headers.

## Future Improvements

Potential enhancements include:

- An authenticated administration dashboard.
- Persistent booking and enquiry management.
- Customer review moderation.
- Persistent gallery management.
- Automated booking notifications.
- Improved image optimisation and caching.
- Analytics and conversion tracking.

## License

This project was developed for PureSpace Cleaning.

Usage, redistribution and commercial licensing should be agreed with the project owner.

---

**Developed with React, JavaScript and CSS.**
