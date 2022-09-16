import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <div className="sm:container sm:mx-auto sm:pl-4 sm:pr-4">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
