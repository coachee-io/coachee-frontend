import React, {PureComponent} from 'react'

import {RouterButtonLink} from '../../../components/Routing'
import {
  Cards, CardTitle, CardText, CoachCard, CoachCardImage,
} from '../../../components/Cards'
import {Pulse} from '../../../components/Skeleton'

import {Para} from '../../../ui/labels'

import mockDb from '../../../db'

import CoachSearchImage from './Image'

interface State {
  coaches: any,
  placeholder: any,
  isLoading: boolean,
  error: boolean
}

interface Props {
  category: string
}

class Categories extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      coaches: [],
      placeholder: [1, 2, 3],
      isLoading: true,
      error: false,
    }
  }

  componentDidMount = async () => {
    await this.setState({isLoading: true})
    this.getCoaches()
  }

  componentDidUpdate = async (prevProps: any) => {
    const {category} = this.props
    /* eslint-disable react/no-did-update-set-state */
    if (category !== prevProps.category) {
      await this.setState({isLoading: true, coaches: []})
      this.getNewCoaches()
    }
    /* eslint-enable react/no-did-update-set-state */
  }

  getCoaches = () => {
    const {category} = this.props
    return mockDb(category).then((res) => {
      this.setState(({coaches: res, isLoading: false}))
    })
  }

  getNewCoaches = () => {
    this.getCoaches()
  }


  render() {
    const {
      coaches, placeholder, isLoading, error,
    } = this.state

    if (error) {
      return (
        <div> Something went wrong </div>
      )
    }

    if (isLoading) {
      return (
        <Cards>
          {placeholder.map((item: any) => (
            <CoachCard key={item} isLoading>
              <Pulse circle width={76} height={76} />
              <CardTitle textAlign="center">
                <Pulse height={24} />
              </CardTitle>
              <CardText textAlign="center">
                <Pulse height={16} />
              </CardText>
              <CardText textAlign="center">
                <Pulse height={16} />
              </CardText>
              <Pulse height={44} width={156} />
            </CoachCard>
          ))}
        </Cards>
      )
    }

    if (coaches.length === 0) {
      return (
        <>
          <Para textAlign="center">
              We are currently busy finding the best coaches for this category.
          </Para>
          <CoachSearchImage />
        </>
      )
    }

    return (
      <Cards>
        {coaches.map((coach: any) => (
          <CoachCard key={Math.random().toString(36)}>
            <CoachCardImage imgSrc={coach.photo} />
            <CardTitle textAlign="center">
              {coach.name}
            </CardTitle>
            <CardText textAlign="center">
              {coach.expertise}
            </CardText>
            <CardText textAlign="center">
              {coach.price}
            </CardText>
            <RouterButtonLink to="/coach/1" primary>
                    See profile
            </RouterButtonLink>
          </CoachCard>
        ))}
      </Cards>
    )
  }
}

export default Categories
