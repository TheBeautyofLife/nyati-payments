import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHelmet = () => (
  <Helmet>
    {/* Primary SEO meta tags */}
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="language" content="en" />
    <title>Featured Films and Documentaries - Nyati Motion Pictures</title>
    <meta name="description" content="Explore the captivating films and documentaries by Nyati Motion Pictures, showcasing the rich storytelling heritage of Uganda and East Africa." />
    <meta name="keywords" content="Nyati Motion Pictures films, Ugandan films, East African documentaries, feature films Uganda, film production Uganda, storytelling films East Africa, Ugandan filmmakers, Nyati Motion Pictures documentaries, watch Ugandan films, East African cinema" />
    <meta name="robots" content="index, follow" />

    {/* Open Graph (OG) for social media sharing */}
    <meta property="og:title" content="Featured Films and Documentaries - Nyati Motion Pictures" />
    <meta property="og:description" content="Discover the artistic films and documentaries produced by Nyati Motion Pictures, highlighting the unique stories of Uganda and East Africa." />
    <meta property="og:url" content="https://www.nyatimotionpictures.com/film" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://www.nyatimotionpictures.com/og-image.jpg" alt="Nyati Motion Pictures Featured Films" />
    <meta property="og:site_name" content="Nyati Motion Pictures" />
    <meta property="og:locale" content="en_UG" /> {/* Uganda locale */}

    {/* Twitter Card metadata */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Featured Films and Documentaries - Nyati Motion Pictures" />
    <meta name="twitter:description" content="Watch the featured films and documentaries from Nyati Motion Pictures, celebrating the culture and stories of Uganda." />
    <meta name="twitter:image" content="https://www.nyatimotionpictures.com/og-image.jpg" alt="Nyati Motion Pictures Featured Films Twitter Banner" />

    {/* Canonical link to avoid duplicate content issues */}
    <link rel="canonical" href="https://www.nyatimotionpictures.com/film" />

    {/* Favicon and icons for various platforms */}
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />

  </Helmet>
);

export default SEOHelmet;
