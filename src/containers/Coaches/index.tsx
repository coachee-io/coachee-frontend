import React, {PureComponent} from 'react'
import {
  Row, Col,
} from 'react-bootstrap'

import Flex from '../../components/Layout/Flexbox'

import {H1} from '../../ui/headings'
import {Para} from '../../ui/labels'
import Dropdown from './Dropdown'
import Categories from './Categories'

interface CategoryMapI {
  [key: string]: {
    title: string,
    description: string
  }
}

const categoryMap: CategoryMapI = {
  career: {
    title: 'Career',
    description: 'Identify and achieve your career ambitions with confidence through the guidance and advice of your coach.',
  },
  health: {
    title: 'Health',
    description: `Achieve a happier, healthier life through understanding how to 
    make better choices and changing your habits around food, fitness, stress levels and your wellbeing.`,
  },
  life: {
    title: 'Life',
    description: `Improve any area of your life with the guidance 
    and support of your coach so you can reach your goals.`,
  },
  femininity: {
    title: 'Femininity',
    description: `Find the right path and balance in your life as a woman and 
    learn how to better navigate difficult situations and relationships.`,
  },
  finance: {
    title: 'Finance',
    description: 'Learn how to make better financial decisions and deal with the emotions and beliefs you have around money.',
  },
  relationship: {
    title: 'Relationship',
    description: 'Move forward with your life by understanding the practical steps you can take to improve your relationships.',
  },
}


interface State {
  category: string
}

class Coaches extends PureComponent<any, State> {
  handleCategoryChange = (event: any) => {
    const {value} = event.target
    const {history} = this.props
    history.push(`/coaches/${value}`)
  }


  render() {
    const {match} = this.props
    const {category} = match.params
    return (
      <>
        <Row>
          <Col xs={12}>
            {categoryMap[category] && (
              <>
                <H1 textAlign="center">
                  {`${categoryMap[category].title} Coaches`}
                </H1>
                <Para bold textAlign="center">
                  {categoryMap[category].description}
                </Para>
              </>
            )}
            {!categoryMap[category] && (
            <H1 textAlign="center">
              Our Coaches
            </H1>
            )}
          </Col>
        </Row>
        <Flex justifyContent="flex-end" width="100%">
          <Dropdown
            onChange={this.handleCategoryChange}
            category={category}
          />
        </Flex>
        <Categories category={category} />
      </>
    )
  }
}

export default Coaches
