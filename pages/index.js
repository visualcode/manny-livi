import Link from "next/link";
import Head from "next/head";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Hey you</title>
      </Head>
      Hello World.{" "}
      <Link href="/about">
        <p>Website in construction my friend</p>
      </Link>
    </div>
  );
}
