import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHelmet = () => (
  <Helmet>
    {/* Primary SEO meta tags */}
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="language" content="en" />
    <title>Support Us - Nyati Motion Pictures</title>
    <meta name="description" content="Support Nyati Motion Pictures' mission to bring Ugandan and East African stories to life. Your donation helps us continue creating impactful films, documentaries, and TV shows." />
    <meta name="keywords" content="donate to Nyati Motion Pictures, support Ugandan filmmakers, Ugandan film production, East African film funding, film production donations Uganda, support African storytelling, filmmaking donations East Africa, donate to filmmakers Uganda, support Nyati Motion Pictures, film industry donations Uganda" />
    <meta name="robots" content="index, follow" />

    {/* Open Graph (OG) for social media sharing */}
    <meta property="og:title" content="Support Us - Nyati Motion Pictures" />
    <meta property="og:description" content="Contribute to Nyati Motion Pictures and support Ugandan and East African storytelling. Your donations enable us to keep bringing stories to life." />
    <meta property="og:url" content="https://www.nyatimotionpictures.com/donate" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.nyatimotionpictures.com/og-image.jpg" alt="Nyati Motion Pictures Donation" />
    <meta property="og:site_name" content="Nyati Motion Pictures" />
    <meta property="og:locale" content="en_UG" /> {/* Uganda locale */}

    {/* Twitter Card metadata */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Support Us - Nyati Motion Pictures" />
    <meta name="twitter:description" content="Support Ugandan filmmaking by donating to Nyati Motion Pictures. Your contribution helps us create impactful films in Uganda and East Africa." />
    <meta name="twitter:image" content="https://www.nyatimotionpictures.com/og-image.jpg" alt="Nyati Motion Pictures Donation Twitter Banner" />

    {/* Canonical link to avoid duplicate content issues */}
    <link rel="canonical" href="https://www.nyatimotionpictures.com/donate" />

    {/* Favicon and icons for various platforms */}
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
    <link rel="manifest" href="/site.webmanifest" />

    {/* Structured data for SEO */}
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Nyati Motion Pictures",
          "url": "https://www.nyatimotionpictures.com/donate",
          "logo": "https://www.nyatimotionpictures.com/logo.png",
          "sameAs": [
            "https://x.com/NyatiMPictures",
            "https://www.facebook.com/profile.php?id=61561352262025&locale=be_BY"
          ],
          "potentialAction": {
            "@type": "DonateAction",
            "target": "https://www.nyatimotionpictures.com/donate",
            "recipient": {
              "@type": "LocalBusiness",
              "name": "Nyati Motion Pictures"
            }
          }
        }
      `}
    </script>
  </Helmet>
);

export default SEOHelmet;
