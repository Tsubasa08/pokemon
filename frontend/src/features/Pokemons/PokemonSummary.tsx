import { Avatar, Box, Container, HStack, Text, Wrap } from "@chakra-ui/react";
import React, { FC } from "react";
import { useGetPokemon } from "./api";

type PokemonSummaryProps = {
  url: string;
};

export const PokemonSummary: FC<PokemonSummaryProps> = ({ url }) => {
  const { isLoading, data } = useGetPokemon({ url: url });
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Avatar src={data.sprites.other.dream_world.front_default}></Avatar>
      {/* <Text>{data.sprites}</Text> */}
    </>
  );
};
