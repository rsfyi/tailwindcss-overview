import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang='en'>
        <Head>
          <meta name='description' content='tailwind css overview' />
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <body className='bg-gray-100'>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
