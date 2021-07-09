import { gql } from '@apollo/client'

export const POKEMONS_ALL = gql`
  query {
    pokemons(first: 1) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`
