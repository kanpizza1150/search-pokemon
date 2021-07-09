import { useState, useCallback } from 'react'
import { useQuery } from '@apollo/client'
import { POKEMONS_ALL } from '../../utils/queries'
import { Wrapper } from './styles'
import Pokemon from '../../components/Pokemon'

const App: React.FC = () => {
  const { loading, error, data } = useQuery(POKEMONS_ALL)
  const [searchKey, setSearchKey] = useState('')

  const onSearch = (e: any) => {
    setSearchKey(e.target.value)
  }

  const _renderList = useCallback(() => {
    if (loading) {
      return <>loading</>
    } else if (error) {
      return <>fetching data error</>
    } else {
      return data.pokemons.map((pokemon) => (
        <Pokemon key={pokemon.id} pokemon={pokemon} />
      ))
    }
  }, [data, loading, error])

  return (
    <Wrapper>
      Pokemon
      <input
        onChange={onSearch}
        value={searchKey}
        placeholder='Search by name'
      />
      {_renderList()}
    </Wrapper>
  )
}
export default App
