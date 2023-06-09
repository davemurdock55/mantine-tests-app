import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { createGetInitialProps } from '@mantine/next';
import { CssBaseline } from '@nextui-org/react';

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return {
  //     ...initialProps,
  //     styles: React.Children.toArray([initialProps.styles])
  //   };
  // }

  render() {
    return (
      <Html lang="en">
        {/* <Head /> */}
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}