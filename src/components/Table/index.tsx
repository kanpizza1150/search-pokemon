import React from 'react'
import { TableWrapper } from './styles'
import Card from '../Card'

interface Props {
  pokemons: []
}

const Table: React.FC<Props> = ({ pokemons = [] }) => {
  console.log(`pokemons`, pokemons)
  const _renderCard = () =>
    pokemons.map((pokemon) => <Card pokemon={pokemon} />)

  return <TableWrapper>{_renderCard()}</TableWrapper>
}
export default Table
