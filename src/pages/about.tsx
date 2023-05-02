import Image from "next/image";

export default function About() {
  return (
    <div className="w-full flex flex-col items-center px-4">
      <h1 className="text-gray-600 text-xl font-display my-3">
        Sobre o Projeto
      </h1>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
      <p className="w-full text-gray-600 text-sm text-center my-4">
        O PokeNext é um App dedicado aos amantes de Pokémons, onde é possível
        buscar e visualizar as principais informações dos seus Pokémons
        favoritos.
      </p>
      <p className="w-full text-gray-600 text-sm leading-8 indent-8">
        Este projeto foi construído seguindo a playlist de vídeos do curso de
        Next.js do
        <a
          href="https://www.youtube.com/@MatheusBattisti"
          target="_blank"
          className="text-sm hover:text-cyan-500 mx-1"
        >
          Matheus Battisti
        </a>
        em seu canal no YouTube, onde foi apresentado os conceitos, boas
        práticas e vantagens desse famoso e poderoso framework que é Next.Js.
        Também foi demonstrado como funciona o consumo de API, com a utilização
        da PokeAPI para obter as informações sobre os Pokémons.
      </p>
      <p className="w-full text-gray-600 text-sm leading-8 indent-8">
        Para mim, teve como objetivo o estudo e aprendizado prático e teórico
        dessa tecnologia, o que significa que este projeto estará em contínua
        construção e aprimoramento, de acordo com a evolução do desenvolvedor.
      </p>
    </div>
  );
}
