import { useState, useEffect, useCallback } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_POKEMONS } from '../../utils/queries'
import { IPokemon } from '../../utils/interfaces'
import { Container, LoadingWrapper } from './styles'
import List from '../../components/List'
import { ModalWrapper } from '../../components/List/styles'
import LoadingSpinner from '../../components/LoadingSpinner'
import { useLocation, useHistory } from 'react-router-dom'

const App: React.FC = () => {
  const { error, data, loading } = useQuery(GET_ALL_POKEMONS, {
    fetchPolicy: 'no-cache',
  })
  const history = useHistory()
  const useSearchQuery = () => new URLSearchParams(useLocation().search)
  const query = useSearchQuery()

  const [pokemons, setPokemons] = useState<any>([])
  const [searchKey, setSearchKey] = useState<string>(query.get('name') || '')

  useEffect(() => {
    if (data) {
      setPokemons(data.pokemons)
      _handelFilter(searchKey)
    }
    // eslint-disable-next-line
  }, [data, searchKey])

  const filterPokemon = (key: string): void => {
    let result: [] = data.pokemons
    if (key !== '') {
      result = data.pokemons.filter((pokemon: IPokemon) =>
        pokemon.name.toLowerCase().startsWith(key.toLocaleLowerCase())
      )
    }
    setPokemons(result)
  }

  const onSearch = (e: any): void => {
    const { value } = e.target
    _handelFilter(value)
  }

  const _handelFilter = (value) => {
    setSearchKey(value)
    filterPokemon(value)

    if (value === '') {
      history.push({ search: `` })
    } else {
      history.push({ search: `?name=${value}` })
    }
  }

  const handleClearSearch = () => {
    _handelFilter('')
  }

  const _renderSearchSection = (): JSX.Element => (
    <div className='search__wrapper'>
      <input
        onChange={onSearch}
        value={searchKey}
        placeholder="SEARCH BY POKEMON'S NAME"
        disabled={!data}
      />
      <button
        onClick={handleClearSearch}
        className='search__button'
        disabled={!data}
      >
        x
      </button>
    </div>
  )

  const _handleState = useCallback(() => {
    if (loading) {
      return (
        <LoadingWrapper>
          <LoadingSpinner height='25rem' />
          Fetching data will take sometime...
        </LoadingWrapper>
      )
    } else if (error) {
      return <ModalWrapper>Fetching data error</ModalWrapper>
    } else if (data) {
      return (
        <List
          pokemons={pokemons}
          searchKey={searchKey}
          setSearchKey={_handelFilter}
        />
      )
    }
    // eslint-disable-next-line
  }, [loading, data, error, pokemons, searchKey])

  return (
    <Container>
      <div className='search-wrapper'>{_renderSearchSection()}</div>
      <div className='body'>{_handleState()}</div>
    </Container>
  )
}
export default App
