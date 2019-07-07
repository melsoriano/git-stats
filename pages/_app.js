import App, { Container } from "next/app";
import React from "react";
import GlobalStyle from "../styles/GlobalStyle";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </Container>
    );
  }
}

export default MyApp;
