import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHelmet = () => (
  <Helmet>
    {/* Primary SEO meta tags */}
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="language" content="en" />
    <title>About Us - Nyati Motion Pictures</title>
    <meta name="description" content="Learn more about Nyati Motion Pictures, a leading film production company based in Uganda. We bring stories to life through innovative filmmaking in Uganda and East Africa." />
    <meta name="keywords" content="About Nyati Motion Pictures, Ugandan film production, Ugandan filmmakers, Uganda storytelling, East African film industry, Kampala film production, Ugandan cinema, African storytelling, Uganda film studio, Ugandan documentary production, East African filmmaking" />
    <meta name="robots" content="index, follow" />

    {/* Open Graph (OG) for social media sharing */}
    <meta property="og:title" content="About Us - Nyati Motion Pictures" />
    <meta property="og:description" content="Learn more about Nyati Motion Pictures, our journey, and our dedication to bringing Ugandan and East African stories to life through innovative filmmaking." />
    <meta property="og:url" content="https://www.nyatimotionpictures.com/about" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.nyatimotionpictures.com/og-image.jpg" alt="Nyati Motion Pictures About Us Page" />
    <meta property="og:site_name" content="Nyati Motion Pictures" />
    <meta property="og:locale" content="en_UG" /> {/* Use "en_UG" for Uganda locale */}

    {/* Twitter Card metadata */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="About Us - Nyati Motion Pictures" />
    <meta name="twitter:description" content="Discover Nyati Motion Pictures, a Ugandan film production company crafting innovative stories in Uganda and East Africa." />
    <meta name="twitter:image" content="https://www.nyatimotionpictures.com/og-image.jpg" alt="Nyati Motion Pictures Twitter About Us Banner" />

    {/* Canonical link to avoid duplicate content issues */}
    <link rel="canonical" href="https://www.nyatimotionpictures.com/about" />

    {/* Favicon and icons for various platforms */}
    <link rel="icon" href="/favicon.svg" />
    <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />

    {/* Structured data for SEO */}
    <script type="application/ld+json">
      {`
        {
           "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "name": "Nyati Motion Pictures",
    "image": "https://ik.imagekit.io/nyatimot/Pages/Universal+Home/Logos/Logo1.svg?updatedAt=1724072184503",
    "url": "https://www.nyatimotionpictures.com/about",
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
