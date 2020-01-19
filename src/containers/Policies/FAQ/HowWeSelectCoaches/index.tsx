import React, { PureComponent } from 'react'

import {RouterLink, Anchor} from '../../../../components/Routing'
import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'
import {UL, LI} from '../../../../ui/list'

class HowWeSelectCoaches extends PureComponent {
  render() {
    return (
      <>
        <H3 id="how-we-select-coaches">
          How we select our coaches
        </H3>
        <Para bold>
          How can I be sure that my coach will be the right fit for me?
        </Para>
        <Para>
          Coaching can be a very personal and impactful experience.
          To ensure the best results, we always suggest that you treat your intro call with your
          coach as a two-way conversation:
          your coach will want to find out if they can help you achieve your goals,
          and you should ask anything that you are unsure of, including what coaching methods
          and tools they will apply throughout the program.
        </Para>
        <Para>
          To ensure the best results after your intro call, treat your sessions just
          like you would any other health appointment and prioritise them.
          Be curious and dive deeper!
        </Para>
        <Para bold>
          What is your criteria when selecting coaches?
        </Para>
        <Para>
          The minimum criteria for all our coaches is:
        </Para>
        <UL>
          <LI>
            <Para>
              Certified from a distinct coaching institution with
              at least 2 months’ studies completed before receiving certification.
            </Para>
          </LI>
          <LI>
            <Para>
              Offers a coaching program of at least 4 weeks/sessions to ensure impactful results.
            </Para>
          </LI>
        </UL>
        <Para>
          On top of this, we meet with all our coaches before they
          oin the platform to ensure the best match possible.
        </Para>
        <Para bold>
          I’m a certified coach, how do I join the platform?
        </Para>
        <Para>
          You can register to join
          {' '}
          <Anchor href="www.coachee.io" primary>coachee.io</Anchor>
          {' '}
by following this
          {' '}
          <RouterLink to="/signup" primary>
            link
          </RouterLink>
          .
        </Para>
      </>
    )
  }
}

export default HowWeSelectCoaches
