import Link from "@/node_modules/next/link";

export default function Home() {
  return (
    <>
      <h1>Test</h1>
      <Link href="/posts">posting page</Link>
      <br />
      <Link href="/albums">album page</Link>
    </>
  );
}
