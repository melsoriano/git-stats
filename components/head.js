import React from 'react';
import NextHead from 'next/head';
import PropTypes from 'prop-types';

const defaultTitle = 'Git Stats';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || defaultTitle}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://fonts.googleapis.com/css?family=DM+Sans:400,500,700|Fira+Mono:400,500&display=swap"
      rel="stylesheet"
    />
  </NextHead>
);

Head.propTypes = {
  title: PropTypes.string
};

export default Head;
