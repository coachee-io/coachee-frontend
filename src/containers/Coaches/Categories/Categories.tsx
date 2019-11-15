import React, {PureComponent} from 'react'

import {History} from 'history'

import {RouterButtonLink} from '../../../components/Routing'

import {
  Cards, CardTitle, CardText, CoachCard, CoachCardImage,
} from '../../../components/Cards'

import {FlexRowJustifyCenter, FlexColAlignCenter, FlexColAlignEnd} from '../../../components/Layout/Flexbox'
import SetMargin from '../../../components/Layout/SetMargin'

import mockDb from '../../../db'


interface State {
  coaches: any,
  isLoading: boolean
}

interface Props {
  category: string
}

class Categories extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      coaches: [],
      isLoading: true,
    }
  }

  componentDidMount = () => {
    this.getCoaches()
  }

  componentDidUpdate = (prevProps: any) => {
    const {category} = this.props
    console.log(category, prevProps)
    if (category !== prevProps.category) {
      this.getCoaches()
    }
  }

  getCoaches = () => {
    const {category} = this.props
    this.setState({isLoading: true})
    mockDb(category).then((res) => {
      this.setState(({coaches: res, isLoading: false}))
    })
  }

  render() {
    const {coaches, isLoading} = this.state

    if (isLoading) {
      return <div>Loading...</div>
    }

    return (
      <>
        <FlexRowJustifyCenter>
          <Cards>
            {coaches.map((coach: any) => (
              <CoachCard key={coach.name}>
                <FlexColAlignCenter>
                  <CoachCardImage imgSrc={coach.photo} />
                  <SetMargin mt={15}>
                    <CardTitle textAlign="center">
                      {coach.name}
                    </CardTitle>
                    <CardText textAlign="center">
                      {coach.expertise}
                    </CardText>
                    <CardText textAlign="center">
                      {coach.price}
                    </CardText>
                    <RouterButtonLink to={coach.url} primary>
                        See profile
                    </RouterButtonLink>
                  </SetMargin>
                </FlexColAlignCenter>
              </CoachCard>
            ))}
          </Cards>
        </FlexRowJustifyCenter>
      </>
    )
  }
}

export default Categories
