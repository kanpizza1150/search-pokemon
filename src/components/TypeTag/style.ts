import styled from 'styled-components'
import { setColor } from '../../utils/globalStyles'

export enum ColorTags {
  Grass = '	#59981a',
  Poison = '#a57eb7',
  Fire = '#fb6d25',
  Water = '	#9bccd1',
  Normal = '#cccccc',
  Bug = '	#81b622',
  Ground = '#603030',
  Fairy = '#edc7cf',
  Fighting = '#ff8d00',
  Rock = '#977b71',
  Electric = '#053b3d',
  Dragon = '#666740',
  Psychic = '#fd9b89',
  Flying = '#61a9d2',
  Ice = '#4faab3',
  Ghost = '#282c44',
  Dark = '#0b1720',
  Steel = '#b0c4de',
}

interface IProps {
  colorType: string
}

export const getColors = (color: string): string =>
  `background-color:${ColorTags[color]};
  color:${setColor.white};`

export const TagWrapper = styled.div`
  padding: 0.5rem;
  text-align: center;
  ${(props: IProps) => getColors(props.colorType)};
  border-radius: 5px;
  margin: 0.5rem;
  font-size: 1rem;
`
