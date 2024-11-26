import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHelmet = () => (
  <Helmet>
    {/* Primary SEO meta tags */}
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="language" content="en" />
    <title>Our Services - Nyati Motion Pictures</title>
    <meta name="description" content="Discover the range of services offered by Nyati Motion Pictures, a Ugandan film production company. We specialize in film production, TV shows, documentaries, post-production, and more across Uganda and East Africa." />
    <meta name="keywords" content="Nyati Motion Pictures services, Ugandan film production, TV show production Uganda, documentary production Uganda, East African filmmakers, post-production Uganda, video editing Uganda, film studio Kampala, production services Uganda, African storytelling, Ugandan filmmakers" />
    <meta name="robots" content="index, follow" />

    {/* Open Graph (OG) for social media sharing */}
    <meta property="og:title" content="Our Services - Nyati Motion Pictures" />
    <meta property="og:description" content="Explore Nyati Motion Pictures' comprehensive film production services in Uganda and East Africa, including TV shows, documentaries, post-production, and more." />
    <meta property="og:url" content="https://www.nyatimotionpictures.com/services" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.nyatimotionpictures.com/og-image.jpg" alt="Nyati Motion Pictures Services" />
    <meta property="og:site_name" content="Nyati Motion Pictures" />
    <meta property="og:locale" content="en_UG" /> {/* Uganda locale */}

    {/* Twitter Card metadata */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Our Services - Nyati Motion Pictures" />
    <meta name="twitter:description" content="Learn more about Nyati Motion Pictures' film production, TV, and documentary services in Uganda and East Africa." />
    <meta name="twitter:image" content="https://www.nyatimotionpictures.com/og-image.jpg" alt="Nyati Motion Pictures Twitter Services Banner" />

    {/* Canonical link to avoid duplicate content issues */}
    <link rel="canonical" href="https://www.nyatimotionpictures.com/services" />

    {/* Favicon and icons for various platforms */}
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />

    {/* Structured data for SEO */}
    <script type="application/ld+json">
      {`
        {
      "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "Nyati Motion Pictures",
    "image": "https://ik.imagekit.io/nyatimot/Pages/Universal+Home/Logos/Logo1.svg?updatedAt=1724072184503",
    "url": "https://www.nyatimotionpictures.com/services",
    "telephone": "+256 778 787 660",
    "email": "info@nyatimotionpictures.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wakiso",
      "addressCountry": "Uganda",
      "postalCode": "74733"
    },
    "sameAs": [
            "https://x.com/NyatiMPictures",
            "https://www.facebook.com/profile.php?id=61561352262025&locale=be_BY"
          ]
        }
      `}
    </script>
  </Helmet>
);

export default SEOHelmet;
