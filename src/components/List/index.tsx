import React, { useCallback } from 'react'
import { ListWrapper, ModalWrapper } from './styles'
import Card from '../Card'
import { IPokemon } from '../../utils/interfaces'
import LazyLoad from 'react-lazyload'
interface IProps {
  pokemons: []
  searchKey: string
  setSearchKey: React.Dispatch<React.SetStateAction<any>>
}

const List: React.FC<IProps> = ({ pokemons, searchKey, setSearchKey }) => {
  const _renderCard = useCallback(() => {
    if (pokemons.length > 0) {
      return pokemons.map((pokemon: IPokemon) => (
        <LazyLoad key={pokemon.id} placeholder={<div>load</div>}>
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            setSearchKey={setSearchKey}
          />
        </LazyLoad>
      ))
    } else {
      return (
        <ModalWrapper>
          <div className='word-not-found'>
            <span>{searchKey}</span> is not found ❌
          </div>
        </ModalWrapper>
      )
    }
  }, [pokemons, searchKey, setSearchKey])

  return <ListWrapper>{_renderCard()}</ListWrapper>
}
export default List
