import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <link rel="fav icon" href="/images/denali-favicon.png" />
        </Head>
        <body className="denali-new-age">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
