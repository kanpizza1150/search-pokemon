import { render } from '@testing-library/react'
import TypeTag from './index'

describe('LoadingSpinner Component', () => {
  it('Should match snapshot', () => {
    const { asFragment } = render(<TypeTag type='' />)
    expect(asFragment).toMatchSnapshot()
  })
  it('Should render text correctly', () => {
    const { getByTestId } = render(<TypeTag type='test' />)
    expect(getByTestId('tag-test').textContent).toBe('test')
  })
})
