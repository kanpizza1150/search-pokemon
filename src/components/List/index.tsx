import React from 'react'
import { ListWrapper } from './styles'
import Card from '../Card'
import Modal from '../Modal'
import { IPokemon } from '../../utils/interfaces'

interface IProps {
  pokemons: []
  searchKey: string
}

const List: React.FC<IProps> = ({ pokemons = [], searchKey }) => {
  const _renderCard = () => {
    let result: JSX.Element[] | JSX.Element
    if (pokemons.length > 0) {
      result = pokemons.map((pokemon: IPokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))
    } else {
      result = (
        <Modal>
          <div className='word-not-found'>
            <span>{searchKey}</span> is not found ❌
          </div>
        </Modal>
      )
    }
    return result
  }

  return <ListWrapper>{_renderCard()}</ListWrapper>
}
export default List
