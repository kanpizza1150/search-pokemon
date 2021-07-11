import { fireEvent, render, waitForElement } from '@testing-library/react'
import List from './index'

let mockedUseQuery = {
  loading: false,
  data: {},
  error: {},
}
jest.mock('@apollo/client', () => ({
  useQuery: () => mockedUseQuery,
  gql: jest.fn(),
  ApolloProvider: jest.fn((props) => (
    <apolloprovider>{props.children}</apolloprovider>
  )),
}))

jest.mock('../Card', () => ({ children }) => (
  <card data-testid='card'>{children}</card>
))

let mockedPokemons = []

describe('List Component', () => {
  it('Should match snapshot', () => {
    const { asFragment } = render(<List pokemons={mockedPokemons} />)
    expect(asFragment).toMatchSnapshot()
  })
  it('Should render not found element', async () => {
    const { getByTestId } = render(<List pokemons={mockedPokemons} />)
    expect(getByTestId('notfound').textContent).toMatch(/is not found/)
  })
  it('Should render cards section', () => {
    mockedPokemons = [{}]
    const { getByTestId } = render(<List pokemons={mockedPokemons} />)
    expect(getByTestId('cards')).toBeInTheDocument()
  })
  it('Should render 10 cards', async () => {
    mockedPokemons = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    const { getAllByTestId } = render(
      <List pokemons={mockedPokemons} limit={10} />
    )
    expect(getAllByTestId('card').length).toBe(10)
  })
})
