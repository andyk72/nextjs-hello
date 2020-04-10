import Link from "next/link";
export default () => (
  <nav>
    <Link href="/">Home</Link> |<Link href="/about">About</Link> |
    <Link href="/day">Day</Link>
  </nav>
);
