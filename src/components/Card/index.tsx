import React from 'react'
import { CardWrapper } from './style'
import TypeTag from '../TypeTag'
import { IPokemon } from '../../utils/interfaces'
import { GET_ATTRACT_BY_NAME } from '../../utils/queries'
import { useQuery } from '@apollo/client'
import LoadingSpinner from '../LoadingSpinner'

interface IProps {
  pokemon: IPokemon
}
const Card: React.FC<IProps> = ({ pokemon }) => {
  const attractsData = useQuery(GET_ATTRACT_BY_NAME(pokemon.name))
  const _renderType = (types) => (
    <div className='tag__wrapper'>
      {types.map((type) => (
        <TypeTag key={type} type={type} />
      ))}
    </div>
  )
  const _renderAttract = (data) => {
    return (
      <div className='attract__wrapper'>
        {data.name}
        <TypeTag type={data.type} />
        {data.damage}
      </div>
    )
  }
  const _handleAttractsData = () => {
    const { loading, data, error } = attractsData
    let result: JSX.Element = <></>
    if (loading) {
      result = <>Loading...</>
    } else if (error) {
      result = <>Error</>
    } else if (data) {
      console.log(`data`, data.pokemon.attacks)

      result = (
        <div>
          <div>Attract:</div>
          <div>
            Fast:
            {data.pokemon.attacks.fast.map((fast) => _renderAttract(fast))}
          </div>
          <div>
            Special:
            {data.pokemon.attacks.special.map((special) =>
              _renderAttract(special)
            )}
          </div>
        </div>
      )
    }
    return result
  }
  return (
    <CardWrapper image={pokemon.image}>
      <div className='name'>{pokemon.name}</div>
      <div className='img' />
      <div className='number'>#{pokemon.number}</div>
      <div className='data__wrapper'>
        <div className='row'>Classification: {_renderType(pokemon.types)}</div>
        <div className='row'>Resistant: {_renderType(pokemon.resistant)}</div>
        <div className='row'>Weaknesses: {_renderType(pokemon.weaknesses)}</div>
      </div>
      <div className='data__wrapper '>{_handleAttractsData()}</div>
    </CardWrapper>
  )
}
export default Card
