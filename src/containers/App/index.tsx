import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { POKEMONS_ALL } from '../../utils/queries'
import { Container, Wrapper, HeaderWrapper } from './styles'
import Table from '../../components/Table'

const App: React.FC = () => {
  const { loading, error, data } = useQuery(POKEMONS_ALL)
  const [searchKey, setSearchKey] = useState('')
  const [pokemons, setPokemons] = useState(data)
  useEffect(() => {
    if (data) {
      setPokemons(data)
    }
  }, [data])
  const onSearch = (e: any) => {
    setSearchKey(e.target.value)
  }

  return (
    <Container>
      Pokemon
      <input
        onChange={onSearch}
        value={searchKey}
        placeholder='Search by name'
      />
      <Wrapper>
        <Table loading={loading} data={data} error={error} />
      </Wrapper>
    </Container>
  )
}
export default App
