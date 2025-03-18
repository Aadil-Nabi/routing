import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div>
        <h1 className="font-extrabold text-zinc-600">
          Welcome to Photo gallery
        </h1>
        <Link
          href={"/photos"}
          className="font-mono bg-black text-white rounded mt-2 p-1"
        >
          Get Photos
        </Link>
      </div>
    </>
  );
}
