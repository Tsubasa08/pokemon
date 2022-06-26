import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import React from 'react';
import { FC } from 'react'
 
 const queryClient = new QueryClient()

 import { Image, HStack, Center, CloseButton, Box } from '@chakra-ui/react'

 export default function App() {
   return (
    <QueryClientProvider client={queryClient}>
      <Query />
    </QueryClientProvider>
   )
 }
 
 function Query() {
   const { isLoading, error, data } = useQuery('repoData', () =>
     fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
       res.json()
     )
   )
   if (isLoading) return <div>Loading...</div>
 
   return (
     <div>
       <h1>{data.name}</h1>
       <p>{data.description}</p>
       <strong>👀 {data.subscribers_count}</strong>{' '}
       <strong>✨ {data.stargazers_count}</strong>{' '}
       <strong>🍴 {data.forks_count}</strong>
     </div>
   )
 }
