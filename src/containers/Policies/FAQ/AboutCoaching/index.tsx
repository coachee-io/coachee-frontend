import React, { PureComponent } from 'react'

import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'
import {UL, LI} from '../../../../ui/list'

class AboutCoaching extends PureComponent {
  render() {
    return (
      <>
        <H3 id="about-coaching">
          About coaching
        </H3>
        <Para bold>
          How do I know if coaching is right for me?
        </Para>
        <Para>
          Coaching might seem to some as just a trend,
          but in reality coaching has been around for decades, if not centuries.
          The idea behind coaching is to have someone who has the expertise,
          either through experience or studies, to guide you to think about your life
          or a particular situation in a different way.
          Executive coaching, for example, is a particular tool that has been used by
          leaders of companies for many decades, and has helped many directors and
          CEOs achieve a better work-life balance, reach their goals and ambitions and
          create impactful results for their organisations. Sports coaching is also familiar to many.
        </Para>
        <Para>
          In short, personal coaching will follow the same basic principles as
          any other type of coaching, as the main goal will always be to get you
          from your current starting point to wherever you want to be.
        </Para>
        <Para>
          The best coaches will not dictate what that end point looks like, and
          will not judge your starting point either. It’s up to you to decide to move
          on from where you are right now and come up with what you would like to achieve at the end.
        </Para>
        <Para>
          To check whether coaching is right for you, you can think about some of the following questions:
        </Para>
        <UL>
          <LI>
            <Para>
              Have I tried other forms of professional help and have always felt that I needed someone to
              hold me more accountable and/or focus more on my goals?
            </Para>
          </LI>
          <LI>
            <Para>
              Have I tried to change negative behaviours many times, but always end up back to where I started?
            </Para>
          </LI>
          <LI>
            <Para>
              Have I tried to talk to others about these behaviours, but no one seems to understand my point of view?
            </Para>
          </LI>
          <LI>
            <Para>
              Am I willing to invest in my mental health as I would in my physical health?
            </Para>
          </LI>
        </UL>
        <Para>
          This is not an exhaustive list, and coaching should never replace psychological or
          psychiatric therapy if you ever have suicidal thoughts or have been diagnosed
          with acute depression or anxiety. When in doubt, always seek medical advice and never give up -
          we all have the right to improve our mental health and never be judged by doing so.
        </Para>
        <Para bold>
          Do you guarantee that I will see the results I want?
        </Para>
        <Para>
          In short, no. We pride ourselves on being transparent, and we will always
          say with confidence that we select our coaches with the most care.
          However, coaching is a very personal process, and it will depend just as
          much on your coach being the best, as you dedicating yourself fully to the process.
          Think about coaching as training for your mind - you can never guarantee how much you
          will improve when you are training either your mind or your body,
          but we can promise to have the best coaches around that will push you to get those results!
        </Para>
      </>
    )
  }
}

export default AboutCoaching
