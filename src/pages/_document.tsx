import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import withTwindDocument from "@twind/next/document";
import twindConfig from "../../twind.config";

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default withTwindDocument(twindConfig, Document);
