import { fireEvent, render } from '@testing-library/react'
import Card from './index'

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

// jest.mock('../LoadingSpinner', () =>
//   jest.fn((): => <loader data-testid='loader' />)
// )
// jest.mock('../TypeTag', () => jest.fn(() => <tag data-testid='tag' />))

let mockedTypes = ['Dragon']
let mockedResistant = ['Water', 'Electric']
let mockedWeaknesses = ['Fighting', 'Fairy']
const mockedSetSearchKey = jest.fn()
describe('Card Component', () => {
  const mockedPokemon = {
    id: 'id',
    number: '001',
    name: 'name',
    classification: 'classification',
    types: [],
    resistant: [],
    weaknesses: [],
    image: 'string',
    weight: {
      minimum: 1,
      maximum: 1,
    },
    height: {
      minimum: 1,
      maximum: 1,
    },
    fleeRate: 1,
    maxCP: 1,
    maxHP: 1,
  }

  beforeEach(() => {})

  it('Should match snapshot', () => {
    const { asFragment } = render(<Card pokemon={mockedPokemon} />)
    expect(asFragment).toMatchSnapshot()
  })

  describe('Attracts section', () => {
    it('Should render loading state', () => {
      mockedUseQuery.loading = true
      const { getAllByTestId } = render(<Card pokemon={mockedPokemon} />)
      expect(getAllByTestId('loader').length).toBe(2)
    })
    it('Should render error state', () => {
      mockedUseQuery.loading = false
      mockedUseQuery.error = true
      const { getAllByTestId } = render(<Card pokemon={mockedPokemon} />)
      expect(getAllByTestId('error-mesg').length).toBe(2)
    })
    it('Should render correct data', () => {
      mockedUseQuery.loading = false
      mockedUseQuery.error = false
      mockedUseQuery.data = {
        pokemon: {
          attacks: {
            fast: [{ id: '1', name: 'name', type: 'Grass', damage: 20 }],
            special: [{ id: '2', name: 'name', type: 'Bug', damage: 21 }],
          },
        },
      }
      const { getByTestId } = render(<Card pokemon={mockedPokemon} />)
      expect(getByTestId('attracts').textContent).toBe(
        'Fast:name |Grass | Damage: 20Special:name |Bug | Damage: 21'
      )
    })
  })
  describe('Evolution section', () => {
    it('Should render loading state', () => {
      mockedUseQuery.loading = true
      const { getAllByTestId } = render(<Card pokemon={mockedPokemon} />)
      expect(getAllByTestId('loader').length).toBe(2)
    })
    it('Should render error state', () => {
      mockedUseQuery.loading = false
      mockedUseQuery.error = true
      const { getAllByTestId } = render(<Card pokemon={mockedPokemon} />)
      expect(getAllByTestId('error-mesg').length).toBe(2)
    })
    it('Should render correct data', () => {
      mockedUseQuery.loading = false
      mockedUseQuery.error = false
      mockedUseQuery.data = {
        pokemon: {
          ...mockedUseQuery.data.pokemon,
          evolutions: [
            { id: '1', name: 'evo-1' },
            { id: '2', name: 'evo-2' },
          ],
        },
      }
      const { getByTestId } = render(<Card pokemon={mockedPokemon} />)
      expect(getByTestId('evolutions').textContent).toBe(
        'Evolutions: evo-1➜evo-2'
      )
    })
    it('Should click on evo name button', () => {
      const { getByTestId } = render(
        <Card pokemon={mockedPokemon} setSearchKey={mockedSetSearchKey} />
      )
      fireEvent.click(getByTestId('evo-1'))
      expect(mockedSetSearchKey).toBeCalledWith('evo-1')
    })
  })

  describe('Info section', () => {
    it('Should render card correctly', () => {
      const { getByTestId } = render(<Card pokemon={mockedPokemon} />)
      expect(getByTestId('info').textContent).toBe(
        'nameclassificationFlee Rate: 1 HP: 1 CP: 1'
      )
      expect(getByTestId('number').textContent).toBe('#001')
      expect(getByTestId('height').textContent).toBe(' Heigh: 1 ~ 1')
      expect(getByTestId('weight').textContent).toBe(' Weight: 1 ~ 1')
    })
    it('Should render Resistant correctly', () => {
      mockedPokemon.resistant = mockedResistant
      const { getByTestId } = render(<Card pokemon={mockedPokemon} />)
      expect(getByTestId('tag-Water')).toBeInTheDocument()
      expect(getByTestId('tag-Electric')).toBeInTheDocument()
    })
    it('Should render Weaknesses correctly', () => {
      mockedPokemon.weaknesses = mockedWeaknesses
      const { getByTestId } = render(<Card pokemon={mockedPokemon} />)
      expect(getByTestId('tag-Fighting')).toBeInTheDocument()
      expect(getByTestId('tag-Fairy')).toBeInTheDocument()
    })
    it('Should render Type correctly', () => {
      mockedPokemon.types = mockedTypes
      const { getByTestId } = render(<Card pokemon={mockedPokemon} />)
      expect(getByTestId('tag-Dragon')).toBeInTheDocument()
    })
  })
})
