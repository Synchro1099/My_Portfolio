import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://society22.club";
const BASE_NAME = "Jan Mark Pereda";
const DEFAULT_TITLE = "Jan Mark Pereda | Full Stack Web Developer | React, Node.js, Laravel";
const DEFAULT_DESCRIPTION = "Jan Mark Pereda is a Full Stack Developer building scalable web applications and digital solutions with React, Node.js, Laravel, APIs, and cloud deployment.";
const DEFAULT_IMAGE = `${SITE_URL}/Logo.png`;
const DEFAULT_KEYWORDS = "Full Stack Developer, React, Node.js, Laravel, Web Applications, Digital Solutions, APIs, Cloud Deployment, Frontend Developer, Backend Developer, Portfolio";

const SEO = ({ title, description = DEFAULT_DESCRIPTION, path = "/", keywords = DEFAULT_KEYWORDS }) => {
  const pageTitle = !title || title === "Home"
    ? DEFAULT_TITLE
    : `${title} | ${BASE_NAME} | Full Stack Web Developer`;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={BASE_NAME} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Jan Mark Pereda Portfolio" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:image:alt" content="Jan Mark Pereda Portfolio Preview" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
      <meta name="twitter:image:alt" content="Jan Mark Pereda Portfolio Preview" />
    </Helmet>
  );
};

export default SEO;
