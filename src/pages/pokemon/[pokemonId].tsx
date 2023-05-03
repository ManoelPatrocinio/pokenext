import { PokeTypes } from "@/types/pokemon.types";
import { GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

interface IPokemonProps {
  pokemon: PokeTypes;
}
interface Params extends ParsedUrlQuery {
  pokemonId: string;
}

export async function getStaticPaths<GetStaticPaths>() {
  const maxPokemons = 252;
  const api = "https://pokeapi.co/api/v2/pokemon/";
  const response = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await response.json();

  const paths = data.results.map((item: PokeTypes, index: number) => {
    return { params: { pokemonId: (index + 1).toString() } };
  });

  return {
    paths,
    fallback: true,
  };
}
export const getStaticProps: GetStaticProps<IPokemonProps, Params> = async (
  context
) => {
  const id = context.params?.pokemonId!;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = (await res.json()) as PokeTypes;
  return {
    props: { pokemon },
  };
};
export default function Pokemon({ pokemon }: IPokemonProps) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <h1 className="text-[#333] text-2xl font-bold"> Loading...</h1>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl text-[#333] font-display font-semibold capitalize  p-2 my-4  rounded w-max">
        {pokemon.name}
      </h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={200}
        height={200}
        alt={pokemon.name}
      />
      <div>
        <h3 className="text-[#333] font-bold text-sm">Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div className="flex flex-col justify-center items-center my-4">
        <h3 className="text-[#333] font-bold text-sm mb-3">Tipo:</h3>
        <div className="w-[14rem]  flex justify-between items-center gap-8">
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`flex-[1] py-2 px-3 text-white bg-[#333]   rounded uppercase text-xs   ${[
                "type_" + item.type.name,
              ]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center  px-3 border-r border-gray-400">
          <h4 className="text-[#333] font-bold text-sm">Altura:</h4>
          <p>{pokemon.height * 10}</p>
        </div>
        <div className="flex flex-col justify-center items-center px-3">
          <h4 className="text-[#333] font-bold text-sm">Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}
