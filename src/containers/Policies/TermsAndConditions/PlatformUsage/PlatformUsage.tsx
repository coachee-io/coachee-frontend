import React, {PureComponent} from 'react'

import {RouterLink} from 'components/Routing'

import {Para} from 'ui/labels'
import {H3} from 'ui/headings'
import {UL, LI} from 'ui/list'

interface Props {
  ref: any
}

class PlatformUsage extends PureComponent<Props> {
  render() {
    const {ref} = this.props
    return (
      <>
        <H3 id="platform-use" ref={ref}>
          2. By using our platform you accept these terms
        </H3>
        <Para>
          2.1. By using the Platform, you confirm that you accept these Terms and you agree to follow the rules set out in these Terms,
          including the following additional documents:
        </Para>
        <UL>
          <LI>
            <Para>
              Our
              {' '}
              <RouterLink to="/privacy-policy" primary>Privacy Policy</RouterLink>
              {' '}
              and
              {' '}
              <RouterLink to="/cookie-policy" primary>Cookie Policy</RouterLink>
              , which provides you with information about
              how your personal data will be used by us and what are your rights in relation to your personal data.
            </Para>
          </LI>
        </UL>
        <Para>
          2.2. If you do not agree to any of the above, you should not use our Platform.
        </Para>
        <Para>
          2.3. If you are under 18 years of age, you must have a parent or guardian’s permission to use our Platform.
        </Para>
      </>
    )
  }
}

export default PlatformUsage
