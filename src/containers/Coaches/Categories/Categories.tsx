import React, {PureComponent} from 'react'

import {RouterButtonLink} from 'components/Routing'
import Flex from 'components/Layout/Flexbox'
import Error from 'components/ErrorMessage'

import {
  CardsGrid, CardTitle, CardText, Card, CardImage, CardBody,
} from 'components/Cards'

import {Pulse} from 'components/Skeleton'

import {Para} from 'ui/labels'

import {CoachesService} from 'services/public'
import {
  GetCoachRequest,
} from 'services/public/coaches/types'

import CoachSearchImage from './Image'

interface State {
  coaches: GetCoachRequest[],
  placeholder: any,
  isLoading: boolean,
  error?: any,
  errorStatus?: any,
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
      error: null,
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
      await this.setState({isLoading: true, coaches: [], error: null})
      this.getNewCoaches()
    }
    /* eslint-enable react/no-did-update-set-state */
  }

  getCoaches = () => {
    const {category} = this.props
    const params = {
      tag: category,
    }
    return CoachesService.getCoaches(params)
      .then((res) => {
        this.setState(({coaches: res, isLoading: false}))
      })
      .catch((err) => {
        if (err && err.response && err.response.status) {
          this.setState({error: err, errorStatus: err.response.status})
        } else {
          this.setState({error: err})
        }
      })
  }

  getNewCoaches = () => {
    this.getCoaches()
  }


  render() {
    const {
      coaches, placeholder, isLoading, error, errorStatus,
    } = this.state

    if (error) {
      return <Error status={errorStatus} />
    }

    if (isLoading) {
      return (
        <CardsGrid>
          {placeholder.map((item: any) => (
            <Card key={item} width="212px" skeleton>
              <CardBody padding="1rem">
                <Flex flexDirection="column" alignItems="center">
                  <Pulse circle width={76} height={76} />
                  <Flex flexDirection="column" alignItems="center" paddingTop="10px">
                    <CardTitle textAlign="center">
                      <Pulse height={24} width={156} />
                    </CardTitle>
                    <CardText textAlign="center">
                      <Pulse height={16} width={156} />
                    </CardText>
                    <CardText textAlign="center">
                      <Pulse height={16} width={156} />
                    </CardText>
                    <Pulse height={44} width={156} />
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          ))}
        </CardsGrid>
      )
    }

    if (coaches.length === 0) {
      return (
        <Flex flexDirection="column" alignItems="center" marginTop="15px">
          <Para textAlign="center">
            We are currently busy finding the best coaches for this category.
          </Para>
          <Flex flexDirection="column" alignItems="center" marginTop="15px">
            <CoachSearchImage />
          </Flex>
        </Flex>
      )
    }

    return (
      <CardsGrid>
        {coaches.map((coach: any) => (
          <Card key={Math.random().toString(36)} width="212px">
            <CardBody padding="1rem">
              <Flex flexDirection="column" alignItems="center">
                <CardImage src={coach.pictureURL} alt="Coach Profile" width="100px" height="100px" borderRadius="50%" />
                <Flex flexDirection="column" alignItems="center" marginTop="15px">
                  <CardTitle textAlign="center">
                    {coach.firstName}
                    <br />
                    {coach.lastName}
                  </CardTitle>
                  <CardText textAlign="center">
                    {coach.cardDescription}
                  </CardText>
                  <CardText textAlign="center">
                    {coach.price}
                  </CardText>
                  <RouterButtonLink to={`/coach/${coach.id}`} primary>
                    See profile
                  </RouterButtonLink>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
        ))}
      </CardsGrid>
    )
  }
}

export default Categories
