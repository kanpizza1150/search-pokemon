import { render } from '@testing-library/react'
import LoadingSpinner from './index'

describe('LoadingSpinner Component', () => {
  it('Should match snapshot', () => {
    const { asFragment } = render(<LoadingSpinner />)
    expect(asFragment).toMatchSnapshot()
  })
})
