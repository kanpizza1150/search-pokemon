import React from 'react'
import { TagWrapper } from './style'

interface IProps {
  type: string
}
const TypeTag: React.FC<IProps> = ({ type }) => {
  return <TagWrapper colorType={type}>{type}</TagWrapper>
}
export default TypeTag
