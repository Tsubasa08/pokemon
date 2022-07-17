import React from "react";
import { QueryClient, useQuery } from "react-query";

const queryClient = new QueryClient();

import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function App() {
  return <Link to="/pokemons">pokemons</Link>;
}

function Query() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://pokeapi.co/api/v2/pokemon").then((res) => res.json())
  );
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data.results.map((poke: { url: string }) => {
        return <Box>{poke.url}</Box>;
      })}
    </div>
  );
}
