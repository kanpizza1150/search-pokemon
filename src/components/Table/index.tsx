import React, { useCallback } from 'react'
import { HeaderWrapper, Row } from './styles'

interface Props {
  loading: boolean | undefined
  data: { pokemons: [] } | undefined
  error: object | undefined
}

interface Pokemon {
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

const Table: React.FC<Props> = ({ loading, data, error }) => {
  console.log(`data`, data)
  const _renderHeader = () => {
    const headerItems = [
      { label: 'Name', key: 'name' },
      { label: 'Classification', key: 'classification' },
      { label: 'Weight (min/max)', key: 'weight' },
      { label: 'Height (min/max)', key: 'height' },
      { label: 'Flee Rate', key: 'fleeRate' },
      { label: 'Max CP', key: 'maxCP' },
      { label: 'Max HP', key: 'maxHP' },
    ]
    return headerItems.map((item) => <div key={item.key}>{item.label}</div>)
  }

  const _renderRows = () =>
    data?.pokemons.map((pokemon: Pokemon) => (
      <Row key={pokemon.id}>
        <div>
          <img src={pokemon.image} alt={pokemon.name} className='img' />
          {pokemon.name}
        </div>
        <div>{pokemon.classification}</div>
        <div>
          {pokemon.weight.minimum} / {pokemon.weight.maximum}
        </div>
        <div>
          {pokemon.height.minimum} / {pokemon.height.maximum}
        </div>
        <div>{pokemon.fleeRate}</div>
        <div>{pokemon.maxCP}</div>
        <div>{pokemon.maxHP}</div>
      </Row>
    ))

  const _handleState = useCallback(() => {
    if (loading) {
      return <>Loading...</>
    } else if (error) {
      return <>fetching data error</>
    } else {
      return _renderRows()
    }
  }, [loading, data, error])

  return (
    <div>
      <HeaderWrapper>{_renderHeader()}</HeaderWrapper>
      <div>{_handleState()}</div>
    </div>
  )
}
export default Table
