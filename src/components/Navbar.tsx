import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center bg-gray-800 text-white-900 text-md px-10 md:px-20 py-5">
      <Link href="/" className="flex  items-center">
        <Image
          src="/images/pokeball.png"
          width={30}
          height={30}
          alt="PokeNext"
        />
        <h1 className="font-display text-lg hover:text-cyan-500 ml-2 transition-all">
          PokeNext
        </h1>
      </Link>
      <ul className="flex  items-center ">
        <li>
          {" "}
          <Link
            href="/"
            className=" hover:text-cyan-500 py-1 px-2 transition-all"
          >
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link
            href="/about"
            className=" hover:text-cyan-500 py-1 px-2 transition-all"
          >
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
}
