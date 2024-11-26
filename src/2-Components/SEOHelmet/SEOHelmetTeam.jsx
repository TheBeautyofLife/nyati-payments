import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHelmet = () => (
  <Helmet>
    {/* Primary SEO meta tags */}
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="language" content="en" />
    <title>Meet Our Team - Nyati Motion Pictures</title>
    <meta name="description" content="Meet the talented team behind Nyati Motion Pictures. Our Ugandan filmmakers, producers, and creative experts are dedicated to bringing East African stories to life." />
    <meta name="keywords" content="Nyati Motion Pictures team, Ugandan filmmakers, film production team Uganda, East African film industry, Kampala film production, creative experts Uganda, film producers Uganda, African storytelling team, Ugandan directors, Ugandan production team, East African filmmakers" />
    <meta name="robots" content="index, follow" />

    {/* Open Graph (OG) for social media sharing */}
    <meta property="og:title" content="Meet Our Team - Nyati Motion Pictures" />
    <meta property="og:description" content="Get to know the creative team at Nyati Motion Pictures, a Ugandan-based film production company bringing stories to life in East Africa." />
    <meta property="og:url" content="https://www.nyatimotionpictures.com/team" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.nyatimotionpictures.com/og-image.jpg" alt="Nyati Motion Pictures Team" />
    <meta property="og:site_name" content="Nyati Motion Pictures" />
    <meta property="og:locale" content="en_UG" /> {/* Uganda locale */}

    {/* Twitter Card metadata */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Meet Our Team - Nyati Motion Pictures" />
    <meta name="twitter:description" content="Learn about the talented filmmakers, producers, and creative experts at Nyati Motion Pictures, a Ugandan film production company." />
    <meta name="twitter:image" content="https://www.nyatimotionpictures.com/og-image.jpg" alt="Nyati Motion Pictures Team Banner" />

    {/* Canonical link to avoid duplicate content issues */}
    <link rel="canonical" href="https://www.nyatimotionpictures.com/team" />

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
    "url": "https://www.nyatimotionpictures.com/team",
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
