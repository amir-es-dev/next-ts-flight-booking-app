import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa">
        <Head>
          <title>سایت اطلاعات پرواز</title>
        </Head>
        <body dir="rtl">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
