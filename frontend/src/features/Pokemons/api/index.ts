import { useQuery } from "react-query";

export const useGetPokemons = () => {
  return useQuery("repoData", () =>
    fetch("https://pokeapi.co/api/v2/pokemon").then((res) => res.json())
  );
};

type useGetPokemonProps = {
  url: string;
};

export const useGetPokemon = (props: useGetPokemonProps) => {
  const { url } = props;
  return useQuery("GetPokemon", () => fetch(url).then((res) => res.json()));
};
