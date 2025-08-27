export default function CharacterCard({ item }: { item: any }) {
  return (
    <div
      key={item.id}
      className="border-black border rounded-lg gap-3 flex flex-col transform hover:scale-105 transition duration-300 ease-in-out pb-3 w-4/5"
    >
      <img
        src={item.image}
        alt={item.name}
        className="rounded-lg w-full h-64 object-cover"
      />
      <div className="flex flex-col px-3">
        <h2 className="text-lg font-bold text-black text-start">{item.name}</h2>
        <p className="text-xs text-gray-700 pb-1">{item.species}</p>
        <div className="flex gap-2">
          <div className="flex bg-green-700 rounded-full">
            <p className="text-sm text-white p-[0.5rem] font-bold text-[10px] relative bottom-[1px]">
              {item.status}
            </p>
          </div>
          <div className="flex border border-black rounded-full w-13 h-7 items-center justify-center">
            <p className="text-sm text-black p-[0.5rem] font-bold text-[10px] ">
              {item.gender}
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-500 text-[14px]">
          origin {item.origin.name}
        </p>
        <p className="text-sm text-gray-500 text-[14px]">
          location {item.location.name}
        </p>
      </div>
    </div>
  );
}
