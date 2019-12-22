import React, {PureComponent} from 'react'

import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'

class CoachingProgrammes extends PureComponent {
  render() {
    return (
      <>
        <H3 id="coaching-programmes">
              6. Coaching programmes
        </H3>
        <Para>
              6.1. Certain programmes may be subject to additional terms and conditions,
              in which case they will be displayed on our Platform.
        </Para>
        <Para>
              6.2. You should also remember that all coaching services are provided by our Partners, and as such,
              they are subject to the relevant coach’s terms and conditions of supply.
              Since we do not supply the underlying products or services,
              our role is limited to providing you with the programme and are not responsible for the availability,
              quality or suitability of the programme purchased by you from the relevant coach.
              However, we will always do our best to ensure that all our coaches are certified, vetted and
              that the match is as close as possible to a perfect fit.
              Still, we cannot be responsible for the coach’s performance of their obligations,
              including any losses or damage suffered by you as a result of the coach’s supply of services
              to you or their failure to supply or comply with applicable laws and regulations.
              If you are not satisfied with your coach, please start by contacting them,
              and also give us your feedback, as it is important for us that we partner with reliable coaches.
        </Para>
        <Para>
              6.3. Our platform works by booking and paying whole coaching programmes,
              and we do not accept payments in installments or per session.
              We do this to ensure impactful results are achieved, as well as to protect our longevity as a Platform.
        </Para>
        <Para>
              6.4. Please note that all coaching programmes are for your personal use and you cannot sell,
              copy or reproduce any content provided from the coaches to you.
              If we learn that you have sold, copied, reproduced or otherwise used our Platform for commercial gain or fraudulently,
              we may permanently cancel your access to our Platform.
        </Para>
      </>
    )
  }
}

export default CoachingProgrammes
