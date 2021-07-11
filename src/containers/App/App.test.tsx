import { fireEvent, render } from '@testing-library/react'
import { useRef } from 'react'
import App from './index'
const mokedPokemons = [{ name: 'a' }, { name: 'b' }]
let mockedUseQuery = {
  loading: false,
  data: {},
  error: {},
}
let mockedUseLocation = {}

let mockedUseHistory = {
  push: jest.fn(),
}

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useRef: jest.fn(),
}))

jest.mock('@apollo/client', () => ({
  useQuery: () => mockedUseQuery,
  gql: jest.fn(),
  ApolloProvider: jest.fn((props) => (
    <apolloprovider>{props.children}</apolloprovider>
  )),
}))
jest.mock('react-router-dom', () => ({
  useLocation: () => mockedUseLocation,
  useHistory: () => mockedUseHistory,
}))
jest.mock('../../components/List', () => ({ children }) => (
  <loader data-testid='loader'>{children}</loader>
))
jest.mock('../../components/List', () => ({ children }) => (
  <list data-testid='list'>{children}</list>
))

describe('App Container', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
    jest.resetAllMocks()
    mockedUseQuery.loading = false
    mockedUseQuery.data = {}
    mockedUseQuery.error = false
    useRef.mockReturnValue({ current: 0 })
  })
  it('Should match snapshot', () => {
    const { asFragment } = render(<App />)
    expect(asFragment).toMatchSnapshot()
  })
  it('Should render loading state', () => {
    mockedUseQuery.loading = true
    const { getByTestId } = render(<App />)
    expect(getByTestId('loader')).toBeInTheDocument()
  })
  it('Should render error state', () => {
    mockedUseQuery.error = true
    const { getByTestId } = render(<App />)
    expect(getByTestId('error-message').textContent).toBe('Fetching data error')
  })
  describe('Search section', () => {
    it('Should render search input', () => {
      const { getByTestId } = render(<App />)
      expect(getByTestId('search-input').placeholder).toBe(
        "SEARCH BY POKEMON'S NAME"
      )
      expect(getByTestId('search-clear').nodeName).toBe('BUTTON')
    })
    it('Should click on clear search', () => {
      const { getByTestId } = render(<App />)
      fireEvent.click(getByTestId('search-clear'))
      expect(mockedUseHistory.push).toBeCalledWith({ search: `` })
    })
    it('Should type on Search input', () => {
      mockedUseQuery.data.pokemons = mokedPokemons
      const { getByTestId } = render(<App />)
      fireEvent.change(getByTestId('search-input'), {
        target: { value: 'test' },
      })
      expect(mockedUseHistory.push).toBeCalledWith({ search: `?name=test` })
    })
  })
  describe('Scroll', () => {
    it('Should type on Search input', () => {
      mockedUseQuery.data.pokemons = mokedPokemons
      render(<App />)
      fireEvent.scroll(window, { target: { scrollY: 2000 } })
      expect(useRef).toBeCalledWith(10)
      fireEvent.scroll(window, { target: { scrollY: 3000 } })
      expect(useRef).toBeCalledWith(20)
    })
  })
})
