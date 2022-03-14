import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <p>Website in construction</p>
      </Link>
    </div>
  );
}
