import React from 'react'
import { CardWrapper, AttractWrapper, AttractDamage } from './style'
import TypeTag from '../TypeTag'
import { IPokemon } from '../../utils/interfaces'
import {
  GET_ATTRACT_BY_NAME,
  GET_EVOLUTIONS_BY_NAME,
} from '../../utils/queries'
import { useQuery } from '@apollo/client'
import LoadingSpinner from '../LoadingSpinner'

interface IProps {
  pokemon: IPokemon
  setSearchKey: React.Dispatch<React.SetStateAction<any>>
}

const Card: React.FC<IProps> = ({ pokemon, setSearchKey }) => {
  const attractsData = useQuery(GET_ATTRACT_BY_NAME, {
    variables: { name: pokemon.name },
  })
  const evolutionData = useQuery(GET_EVOLUTIONS_BY_NAME, {
    variables: { name: pokemon.name },
  })

  const _renderError = (): JSX.Element => <>❌Fetching Data Error...❌</>

  const _renderType = (types): JSX.Element => (
    <div className='tag__wrapper'>
      {types.map((type) => (
        <TypeTag key={type} type={type} />
      ))}
    </div>
  )

  const _renderAttract = (data): JSX.Element => (
    <div className='wrapper' key={data.id}>
      {data.name} |
      <TypeTag type={data.type} /> |{' '}
      <AttractDamage type={data.type}>Damage: {data.damage}</AttractDamage>
    </div>
  )

  const onEvoNameClicked = (name: string): void => {
    setSearchKey(name)
  }

  const _renderEvo = (data, index): JSX.Element => (
    <>
      {index > 0 ? <div className='evo__arrow'>➜</div> : ''}
      <button
        className='evo__name'
        key={data.id}
        onClick={() => onEvoNameClicked(data.name)}
      >
        {data.name}
      </button>
    </>
  )

  const _handleAttractsData = (): JSX.Element => {
    const { loading, data, error } = attractsData
    let result: JSX.Element = <></>
    if (loading) {
      result = <LoadingSpinner height='20rem' />
    } else if (error) {
      result = _renderError()
    } else if (data) {
      result = (
        <AttractWrapper>
          Fast:
          <div className='section__sub'>
            {data.pokemon.attacks.fast.map((fast) => _renderAttract(fast))}
          </div>
          <div className='section__sub'>
            Special:
            {data.pokemon.attacks.special.map((special) =>
              _renderAttract(special)
            )}
          </div>
        </AttractWrapper>
      )
    }
    return result
  }

  const _handleEvolutionsData = (): JSX.Element => {
    const { loading, data, error } = evolutionData
    let result: JSX.Element = <></>
    if (loading) {
      result = <LoadingSpinner height='20rem' />
    } else if (error) {
      result = _renderError()
    } else if (data) {
      const { evolutions } = data.pokemon
      result = evolutions ? (
        <div className='evo__wrapper'>
          {data.pokemon.evolutions.map((evo, index) => _renderEvo(evo, index))}
        </div>
      ) : (
        <>-</>
      )
    }
    return result
  }

  const _renderDataRow = (): JSX.Element[] => {
    const sections = [
      {
        title: 'Classification',
        key: 'classification',
        value: pokemon.types,
      },
      {
        title: 'Resistant',
        key: 'resistant',
        value: pokemon.resistant,
      },
      {
        title: 'Weaknesses',
        key: 'weaknesses',
        value: pokemon.weaknesses,
      },
    ]
    return sections.map((section) => (
      <div className='row' key={section.key}>
        <div className='title'>{section.title}: </div>
        {_renderType(section.value)}
      </div>
    ))
  }

  const _renderDataWrapper = (): JSX.Element[] => {
    const sections = [
      {
        title: 'Attract',
        key: 'attract',
        value: _handleAttractsData(),
      },
      {
        title: 'Evolutions',
        key: 'evolutions',
        value: _handleEvolutionsData(),
      },
    ]
    return sections.map((section) => (
      <div className='data__wrapper att' key={section.key}>
        <div className='title'>{section.title}: </div>
        {section.value}
      </div>
    ))
  }

  return (
    <CardWrapper image={pokemon.image}>
      <div className='name'>{pokemon.name}</div>
      <div className='img' />
      <div className='number'>#{pokemon.number}</div>
      <div className='data__wrapper'>{_renderDataRow()}</div>
      {_renderDataWrapper()}
    </CardWrapper>
  )
}
export default Card
