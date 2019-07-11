import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

const Head = props => {
  const { title } = props;
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title || ""}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title || ""} />
      <link
        href="https://fonts.googleapis.com/css?family=DM+Sans:400,500,700"
        rel="stylesheet"
      />
    </NextHead>
  );
};
Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
