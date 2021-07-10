export interface IPokemon {
  id: string
  number: string
  name: string
  weight: { minimum: string; maximum: string }
  height: { minimum: string; maximum: string }
  classification: string
  types: []
  resistant: []
  weaknesses: []
  fleeRate: number
  maxCP: number
  maxHP: number
  image: string
}
