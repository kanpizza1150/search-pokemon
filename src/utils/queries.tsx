import { gql } from '@apollo/client'

export const GET_ALL_POKEMONS = gql`
  query {
    pokemons(first: 151) {
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

export const GET_ATTRACT_BY_NAME = (name: string) => gql`
    query {
      pokemon(name: "${name}") {
        id
        name
        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
        }
      }
    }
  `
