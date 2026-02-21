import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://jan-portfolio.vercel.app";
const DEFAULT_TITLE = "Jan Mark Pereda";
const DEFAULT_DESCRIPTION = "Portfolio website of Jan Mark Pereda featuring projects, skills, resume, and contact details.";
const DEFAULT_IMAGE = `${SITE_URL}/Logo.png`;

const SEO = ({ title, description = DEFAULT_DESCRIPTION, path = "/" }) => {
  const pageTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Jan Mark Pereda Portfolio" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={DEFAULT_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
    </Helmet>
  );
};

export default SEO;
