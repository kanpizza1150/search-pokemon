import styled from 'styled-components'
import { setFlex } from '../../utils/globalStyles'

export const TableWrapper = styled.div`
  border-radius: 5px;
  overflow: hidden;
  padding: 2rem;
  ${setFlex('space-around', 'flex-start')};
  flex-wrap: wrap;
  width: 100%;
`
