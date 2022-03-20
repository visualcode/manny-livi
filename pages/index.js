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
        <p className="text-paragraphLarge font-regular tracking-normal">Site under construction</p>
      </Link>
    </div>
  );
}
