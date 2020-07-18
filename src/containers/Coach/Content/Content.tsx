import React, {PureComponent, Fragment} from 'react'
import moment from 'moment'
import {Row, Col} from 'react-bootstrap'

import MediaQuery from '../../../components/Layout/MediaQuery'
import Flex from '../../../components/Layout/Flexbox'
import {RouterButtonLink} from '../../../components/Routing'

import {Pulse} from '../../../components/Skeleton'
import Hr from '../../../components/Hr'

import Auth from '../../../utils/tokens'
import {formatNumber} from '../../../utils/formatNumber'

import {
  GetCoachRequest,
  GetCoachAvailabilityRequest,
  GetCoachCertificateRequest,
  GetCoachProgramRequest,
} from '../../../services/public/coaches/types'


import {H2, H3} from '../../../ui/headings'
import {Para} from '../../../ui/labels'
import Rating from '../../../ui/images/star-rating.svg'

import Parser from '../Parser'

interface Props {
  coach: GetCoachRequest,
  certifications?: GetCoachCertificateRequest[],
  programs?: GetCoachProgramRequest[],
  availability?: GetCoachAvailabilityRequest[],
}

class Content extends PureComponent<Props> {
  handleRedirect = (program: GetCoachProgramRequest) => {
    const {availability, coach} = this.props
    const state = {
      coach,
      program,
      coachAvailability: availability,
      firstCallDuration: coach?.firstCallDuration,
    }
    if (Auth.isLoggedIn()) {
      return {
        pathname: `/booking/${program.id}`,
        state,
      }
    }

    return {
      pathname: '/login',
      state: {
        from: `/booking/${program.id}`,
        ...state,
      },
    }
  }

  render() {
    const {
      certifications,
      programs,
    } = this.props
    return (
      <>
        <Row>
          <Col xs={12}>
            <Flex flexDirection="column" marginTop="30px">
              <H2>
                {programs ? 'Programmes' : <Pulse height={24} />}
              </H2>
              {programs && programs.map((program, index) => (
                <Fragment key={`$${program.id}-${index}`}>
                  <Row>
                    <Col xs={12} sm={8}>
                      <H3>{program.name}</H3>
                      <Para>
                        {`${program.sessions} sessions of ${program.duration} minutes`}
                      </Para>
                    </Col>
                    <MediaQuery>
                      {({isDesktop}) => isDesktop() && (
                      <Col xs={12} sm={4}>
                        <Flex flexDirection="column" justifyContent="space-between" alignItems="flex-end">
                          <Para bold primaryColor>
                            {`£${formatNumber(program.totalPrice)}`}
                          </Para>
                          <RouterButtonLink
                            to={() => this.handleRedirect(program)}
                            primary
                          >
                            Book a Call
                          </RouterButtonLink>
                        </Flex>
                      </Col>
                      )}
                    </MediaQuery>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Para>
                        {Parser(program.description) || program.description}
                      </Para>
                    </Col>
                  </Row>
                  <MediaQuery>
                    {({isDesktop}) => !isDesktop() && (
                      <Flex marginTop="15px" justifyContent="center">
                        <Para bold primaryColor>
                          {`£${formatNumber(program.totalPrice)}`}
                        </Para>
                        <RouterButtonLink
                          margin="0px 0px 8px 0px"
                          to={() => this.handleRedirect(program)}
                          primary
                        >
                          Book a Call
                        </RouterButtonLink>
                      </Flex>
                    )}
                  </MediaQuery>
                  <Hr />
                </Fragment>
              ))}
              {!programs && (
                <>
                  <H3><Pulse height={18} /></H3>
                  <Para><Pulse height={16} width={300} /></Para>
                  <Para><Pulse height={16} width={300} /></Para>
                </>
              )}
            </Flex>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Flex flexDirection="column" marginTop="45px">
              <H2>
                {certifications ? 'Certifications' : <Pulse height={24} />}
              </H2>
              {certifications && certifications.map((el, id) => (
                <Fragment key={`${el}-${id}`}>
                  <H3>{el.title}</H3>
                  <Para>
                    {`${moment().month(el.month - 1).format('MMMM')} ${el.year}`}
                  </Para>
                  <Para>{el.institution}</Para>
                  <Hr />
                </Fragment>
              ))}
              {!certifications && (
                <>
                  <H3><Pulse height={18} /></H3>
                  <Para><Pulse height={16} width={300} /></Para>
                  <Para><Pulse height={16} width={300} /></Para>
                </>
              )}
            </Flex>
          </Col>
        </Row>
      </>
    )
  }
}

export default Content
