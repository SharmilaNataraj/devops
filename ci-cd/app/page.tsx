import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Link href="/deploy">
        <button className="border border-black p-3 bg-blue-200 cursor-pointer hover:bg-amber-200 rounded-xl">CI/CD</button>
      </Link>
    </div>
  );
}
