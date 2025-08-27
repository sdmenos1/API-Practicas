import User from "./svgs/User";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex text-black bg-gray-50 p-6 justify-center w-full">
      <Link href="/">
        <h1 className="text-4xl font-black bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
          Rick and Morty API
        </h1>
      </Link>

      <div className="relative left-180">
        <Link href="/comments">
          <button className=" text-white p-2 rounded-lg border border-black">
            <User />
          </button>
        </Link>
      </div>
    </div>
  );
}
