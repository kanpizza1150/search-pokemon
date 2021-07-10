export interface IPokemon {
  id: string
  number: string
  name: string
  classification: string
  types: []
  resistant: []
  weaknesses: []
  image: string
  weight: {
    minimum: number
    maximum: number
  }
  height: {
    minimum: number
    maximum: number
  }
  fleeRate: number
  maxCP: number
  maxHP: number
}
