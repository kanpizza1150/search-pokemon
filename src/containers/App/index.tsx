import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { POKEMONS_ALL } from '../../utils/queries'
import { Container } from './styles'
import Table from '../../components/Table'
import { Pokemon } from '../../components/Card'
const App: React.FC = () => {
  const { error, data } = useQuery(POKEMONS_ALL)
  const [searchKey, setSearchKey] = useState<string>('')
  const [pokemons, setPokemons] = useState<[]>([])

  useEffect(() => {
    if (data) {
      setPokemons(data.pokemons)
    }
  }, [data])

  const filterPokemon = (key): void => {
    const result = pokemons.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().startsWith(key)
    )
    console.log(`result`, result)
  }

  const onSearch = (e: any): void => {
    const { value } = e.target
    setSearchKey(value)
    filterPokemon(value)
  }

  const _renderLoadingState = () => <>Loading...</>
  const _renderErrorState = () => <>Fetching data error</>

  const _handleState = (): JSX.Element => {
    let items: JSX.Element = _renderLoadingState()
    if (error) {
      items = _renderErrorState()
    } else if (data) {
      items = <Table pokemons={pokemons} />
    }
    return items
  }

  return (
    <Container>
      Pokemon
      <input
        onChange={onSearch}
        value={searchKey}
        placeholder='Search by name'
      />
      {_handleState()}
    </Container>
  )
}
export default App
