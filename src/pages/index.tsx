import { PokeTypes } from "@/types/pokemon.types";
import Image from "next/image";
import Card from "../components/Card";
interface HomeProp {
  pokemons: PokeTypes[];
}
export async function getStaticProps() {
  const maxPokemons = 252;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const response = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await response.json();
  // add pokemin index
  data.results.forEach((item: PokeTypes, index: number) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}
export default function Home({ pokemons }: HomeProp) {
  return (
    <>
      <div className="w-full flex justify-center items-center my-8">
        <h1 className="text-5xl  text-[#e33d33] font-display">
          Poke<span className="text-[#333] m-0 p-0">Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="Pokenext"
          className="ml-3"
        />
      </div>
      <div className="w-full flex flex-wrap justify-between items-center max-w-[1100px] mx-auto px-10 text-center">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
