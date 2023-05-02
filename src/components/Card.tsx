import { PokeTypes } from "@/types/pokemon.types";
import Image from "next/image";
import Link from "next/link";
interface ICardProps {
  pokemon: PokeTypes;
}
export default function Card({ pokemon }: ICardProps) {
  return (
    <div className="flex flex-col justify-center items-center w-[23%] px-8 py-4 mb-8 border border-red-500 shadow-lg drop-shadow-lg bg-[#333] text-white rounded-md">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={120}
        height={120}
        alt={pokemon.name}
      />
      <p className="my-4 p-1 bg-red-500 rounded-lg">#{pokemon.id}</p>
      <h3 className="capitalize text-md mb-4">{pokemon.name}</h3>
      <Link
        href={`/pokemon/${pokemon.id}`}
        className="bg-white text-[#333]  font-semibold px-4 py-2 rounded transition-all hover:bg-red-500 hover:text-white"
      >
        Detalhes
      </Link>
    </div>
  );
}
