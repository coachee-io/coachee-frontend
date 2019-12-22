import React, {PureComponent} from 'react'

import {Para} from '../../../ui/labels'
import {H3} from '../../../ui/headings'

class LinkingRules extends PureComponent {
  render() {
    return (
      <>
        <H3 id="rules-about-linking">
          2. Rules about linking to our Platform
        </H3>
        <Para>
          2.1. All clients may link to our home page, but only in a way that is fair and legal and
          does not damage our reputation or take advantage of it.
          Please do not frame our Platform on any other site and do not establish a link to our Platform on
          any website that is now owned by you.
        </Para>
        <Para>
          2.2. Please do not establish a link in such a way as to suggest any form of association,
          approval or endorsement on our part where none exists.
          We are open to new ideas, so if you would like to explore any such relationship with us,
          please contact us on admin@coachee.io.
        </Para>
        <Para>
          2.3. If we feel that any link is not in line with or brand guidelines, and/or damages our reputation,
          we may withdraw linking permission without notice and require you to remove any links to our Platform,
          or to remove our name and/or logo, from your websit
          Alternatively, we may require you to make some changes in relation to the placing of our name
          and links to our Platform on your website.
        </Para>
        <Para>
          2.4. The website in which you are linking must comply in all respects with the content standards
          set out in this Acceptable Use Policy. In particular, you should not link to our Platform or refer to us or our logos
          from any website which is indecent or inappropriate or in any other way incompatible with our reputation.
        </Para>
        <Para>
          2.5. If you wish to link to our Platform other than that set out above, please contact admin@coachee.io.
        </Para>
      </>
    )
  }
}

export default LinkingRules
