import React, {PureComponent} from 'react'

import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'
import {UL, LI} from '../../../../ui/list'

class AboutUs extends PureComponent {
  render() {
    return (
      <>
        <H3 id="about-us">
          1. About us and what we will do for you
        </H3>
        <Para>
          1.1. We are the owner (or the licensee) of all intellectual property rights in our Platform
          and in the material published on it.
          Those works are protected by copyright laws and treaties around the world. All such rights are reserved.
        </Para>
        <Para>
          1.2. At this stage, we have no real worries that you would, but it has to be said:
          you cannot do anything that would bring us or our name into disrepute or cause damage in any way to our reputation.
          Our reputation is important,
          so please inform us immediately if you become aware of anything that you believe may cause us any reputational damage.
        </Para>
        <Para>
          1.3. Any content available on our Platform (other than content submitted by you, if any) is
          subject to the following rules:
        </Para>
        <UL>
          <LI>
            <Para>
              you may print off one copy, and may download extracts,
              of any page(s) from our Platform for your personal use and
              you may draw the attention of others to content posted on our Platform;
            </Para>
          </LI>
          <LI>
            <Para>
              do not modify any paper or digital copies of any materials you have printed off or downloaded in any way,
              and do use any illustrations, photographs, video or audio separately from any accompanying text;
            </Para>
          </LI>
          <LI>
            <Para>
              acknowledge our status (and that of any identified contributors) as the authors of content on our Platform;
            </Para>
          </LI>
          <LI>
            <Para>
              do not use any part of the content on our Platform for commercial purposes without our consent in writing;
            </Para>
          </LI>
          <LI>
            <Para>
              do not imply any sponsorship or association with us without first obtaining our approval in writing.
            </Para>
          </LI>
        </UL>
        <Para>
          1.4. If you print off, copy or download any part of our Platform in breach of this Acceptable Use Policy,
          we may suspend or terminate your right to use
          our Platform and may require you to return or destroy any copies of the materials you have made.
        </Para>
        <Para>
          1.5. You are not permitted to use our trademarks and trade names without our approval, unless they are part of
          the material you are using as
          permitted under the other provisions of this Acceptable Use Policy.
        </Para>
        <Para>
          1.6. If you would like to use any of the content available on our Platform (including but not limited to any
          photographs, logos, videos, designs or images),
          please contact: admin@coachee.io
        </Para>
      </>
    )
  }
}

export default AboutUs
