import Link from "next/link";
import Navigation from "./navigation";

export default function Menu() {
  return (
    <header>
      <Link href="/home">
        <h2 className="logo">Don Blog</h2>
      </Link>
      <Navigation />
    </header>
  );
}
