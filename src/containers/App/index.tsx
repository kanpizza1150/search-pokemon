import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_POKEMONS } from '../../utils/queries'
import { IPokemon } from '../../utils/interfaces'
import { Container } from './styles'
import List from '../../components/List'
import Modal from '../../components/Modal'
import LoadingSpinner from '../../components/LoadingSpinner'
import { useLocation, useHistory } from 'react-router-dom'
const App: React.FC = () => {
  const { error, data } = useQuery(GET_ALL_POKEMONS)
  const history = useHistory()
  const useSearchQuery = () => new URLSearchParams(useLocation().search)
  const query = useSearchQuery()

  const [pokemons, setPokemons] = useState<any>([])
  const [searchKey, setSearchKey] = useState<string>(query.get('name') || '')

  useEffect(() => {
    if (data) {
      setPokemons(data.pokemons)
      filterPokemon(searchKey)
    }
  }, [data, searchKey])

  const filterPokemon = (key: string): void => {
    let result: [] = data.pokemons
    if (key !== '') {
      result = data.pokemons.filter((pokemon: IPokemon) =>
        pokemon.name.toLowerCase().startsWith(key)
      )
    }
    setPokemons(result)
  }

  const onSearch = (e: any): void => {
    const { value } = e.target
    setSearchKey(value)
    filterPokemon(value)

    if (value === '') {
      history.push({ search: `` })
    } else {
      history.push({ search: `?name=${value}` })
    }
  }

  const _renderLoadingState = (): JSX.Element => (
    <LoadingSpinner height='25rem' />
  )

  const _renderErrorState = (): JSX.Element => (
    <Modal>Fetching data error</Modal>
  )

  const _renderSearchSection = (): JSX.Element => (
    <input
      onChange={onSearch}
      value={searchKey}
      placeholder="SEARCH BY POKEMON'S NAME"
      disabled={!data}
    />
  )

  const _handleState = (): JSX.Element => {
    let items: JSX.Element = _renderLoadingState()
    if (error) {
      items = _renderErrorState()
    } else if (data) {
      items = <List pokemons={pokemons} searchKey={searchKey} />
    }
    return items
  }

  return (
    <Container>
      <div className='search-wrapper'>{_renderSearchSection()}</div>
      <div className='body'>{_handleState()}</div>
    </Container>
  )
}
export default App
