import React from 'react'

interface Pokemon {
  id: string
  number: string
  name: string
  weight: object
  height: object
  classification: string
  types: []
  resistant: []
  weaknesses: []
  fleeRate: number
  maxCP: number
  maxHP: number
  image: string
}

interface Props {
  pokemon: Pokemon
}

// eslint-disable-next-line
const Pokemon: React.FC<Props> = ({ pokemon }) => {
  console.log('pokemon :>> ', pokemon)
  return <div>{pokemon.name}</div>
}

export default Pokemon
