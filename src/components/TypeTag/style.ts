import styled from 'styled-components'

enum ColorTags {
  Grass = 'green',
  Poison = 'purple',
  Fire = 'orange',
  Water = 'lightblue',
  Normal = 'grey',
  Bug = 'darkgreen',
  Ground = 'brown',
  Fairy = 'pink',
  Fighting = 'red',
  Rock = 'brown',
  Electric = 'yellow',
  Dragon = 'yellow',
  Psychic = 'yellow',
  Flying = 'yellow',
  Ice = 'yellow',
  Ghost = 'yellow',
  Dark = 'yellow',
  Steel = 'yellow',
}

interface Props {
  colorType: string
}

const getBGColor = (color: string): string =>
  `background-color:${ColorTags[color]};`

export const TagWrapper = styled.div`
  padding: 0.5rem;
  text-align: center;
  ${(props: Props) => getBGColor(props.colorType)};
  border-radius: 5px;
  margin: 0.5rem;
  font-size: 1rem;
`
