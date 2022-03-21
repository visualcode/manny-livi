import Link from "next/link";
import Head from "next/head";

export default function IndexPage() {
  return (
    <div>
      {/* <Navbar /> */}
      <Head>
        <title>Hey you</title>
      </Head>
      Hello World.{" "}
      <Link href="/about">
        <p className="text-normal font-regular leading-4">Site under construction</p>
      </Link>
      {/* <Footer /> */}
    </div>
  );
}
