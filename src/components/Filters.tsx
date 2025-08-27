import { useState } from "react";
interface Props {
  onChange: (filters: {
    name?: string;
    status?: string;
    species?: string;
  }) => void;
}
export const Filters = ({ onChange }: Props) => {
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [species, setSpecies] = useState<string>("");
  const handleNameChange = () => onChange({ name, status, species });
  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-black rounded-md p-1 text-black"
      />
      <input
        type="text"
        placeholder="Estado"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border border-black rounded-md p-1 text-black"
      />
      <input
        type="text"
        placeholder="Especie"
        value={species}
        onChange={(e) => setSpecies(e.target.value)}
        className="border border-black rounded-md p-1 text-black"
      />
      <button
        onClick={handleNameChange}
        className="border border-black rounded-md p-1 text-black"
      >
        Buscar
      </button>
    </div>
  );
};
