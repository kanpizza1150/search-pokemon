import React from 'react'
import { CardWrapper } from './style'
import TypeTag from '../TypeTag'
export interface Pokemon {
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

interface Props {
  pokemon: Pokemon
}
const Card: React.FC<Props> = ({ pokemon }) => {
  const _renderType = (types) => {
    return (
      <div className='tag__wrapper'>
        {types.map((type) => (
          <TypeTag key={type} type={type} />
        ))}
      </div>
    )
  }

  return (
    <CardWrapper>
      <div className='number'>#{pokemon.number}</div>
      <img src={pokemon.image} alt={pokemon.name} />
      <div className='name'>{pokemon.name}</div>
      <div className='row'>Classification: {_renderType(pokemon.types)}</div>
      <div className='row'>Resistant: {_renderType(pokemon.resistant)}</div>
      <div className='row'>Weaknesses: {_renderType(pokemon.weaknesses)}</div>
    </CardWrapper>
  )
}
export default Card
