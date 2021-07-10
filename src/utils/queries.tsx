import { gql } from '@apollo/client'

export const GET_ALL_POKEMONS = gql`
  query {
    pokemons(first: 151) {
      id
      number
      name
      classification
      types
      resistant
      weaknesses
      image
    }
  }
`

export const GET_ATTRACT_BY_NAME = gql`
  query pokemon($name: String) {
    pokemon(name: $name) {
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
export const GET_EVOLUTIONS_BY_NAME = gql`
  query pokemon($name: String) {
    pokemon(name: $name) {
      id
      name
      evolutions {
        id
        number
        name
      }
    }
  }
`
