import { Avatar, Box, Container, Wrap, Text, HStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetPokemon, useGetPokemons } from "./api";
import { PokemonSummary } from "./PokemonSummary";

export const Pokemons: FC = () => {
  const { isLoading, isSuccess, error, data: data } = useGetPokemons();
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {data.results.map((result: { url: string; name: string }) => {
        // const params = useParams(result.url);
        return (
          <Container>
            <Text>{result.name}</Text>
            <Text>{result.url}</Text>
            <PokemonSummary url={result.url} />
          </Container>
        );
      })}
    </>
  );
};
