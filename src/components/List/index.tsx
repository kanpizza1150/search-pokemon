import React, { useCallback } from 'react'
import { ListWrapper, ModalWrapper } from './styles'
import Card from '../Card'
import { IPokemon } from '../../utils/interfaces'

interface IProps {
  pokemons: []
  searchKey: string
  setSearchKey: React.Dispatch<React.SetStateAction<any>>
  limit: number
}

const List: React.FC<IProps> = ({
  pokemons,
  searchKey,
  setSearchKey,
  limit,
}) => {
  const _renderTenCards = () =>
    pokemons.map((pokemon: IPokemon, index) =>
      index < limit ? (
        <Card key={pokemon.id} pokemon={pokemon} setSearchKey={setSearchKey} />
      ) : (
        <></>
      )
    )

  const _renderCard = useCallback(() => {
    if (pokemons.length > 0) {
      return <ListWrapper>{_renderTenCards()}</ListWrapper>
    } else if (searchKey !== '') {
      return (
        <ModalWrapper>
          <div className='word-not-found'>
            <span>{searchKey}</span> is not found ❌
          </div>
        </ModalWrapper>
      )
    }
    // eslint-disable-next-line
  }, [pokemons, searchKey, setSearchKey, limit])

  return <>{_renderCard()}</>
}
export default List
