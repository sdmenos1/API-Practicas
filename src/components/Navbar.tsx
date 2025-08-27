import User from "./svgs/User";

export default function Navbar() {
  return (
    <div className="flex text-black bg-gray-50 p-6 justify-center w-full">
      <h1 className="text-3xl font-bold">Rick and Morty API</h1>
      <div className="relative left-180">
        <button className=" text-white p-2 rounded-lg border border-black">
          <User />
        </button>
      </div>
    </div>
  );
}
