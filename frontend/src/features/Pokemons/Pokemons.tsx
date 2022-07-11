import { Avatar, Box, Container, Wrap, Text, HStack } from "@chakra-ui/react";
import React from "react";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetPokemon, useGetPokemons } from "./api";

export const Pokemons: FC = () => {
  const { isLoading, isSuccess, error, data: data } = useGetPokemons();
  if (isLoading) return <div>Loading...</div>;
  // if (isSuccess) {
  //   const { isLoading: getPokemonLoading, data: getPokemonData } =
  //     useGetPokemon(getPokemonsData.);
  // }
  return (
    <>
      <Box>Hello Pokemon!!!</Box>
      {data.results.map((result: { url: string, name: string }) => {
        const params = useParams(result.url); 
        return (
          <Container>
            <Wrap>
              <HStack>
                <Avatar
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/450.svg`}
                ></Avatar>
                <Text>{result.name}</Text>
              </HStack>
            </Wrap>
          </Container>
        );
      })}
    </>
  );
};
