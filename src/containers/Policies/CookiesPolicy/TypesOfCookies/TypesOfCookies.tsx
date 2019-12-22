import React, { PureComponent } from 'react'

import {Anchor} from '../../../../components/Routing'

import {Para} from '../../../../ui/labels'
import {H3} from '../../../../ui/headings'
import {OL, LI} from '../../../../ui/list'

class TypesOfCookies extends PureComponent {
  render() {
    return (
      <>
        <H3 id="types-of-cookies">
            3. What type of cookies do we use?
        </H3>
        <Para>
          <OL>
            <LI>
              <Para>
                Strictly necessary cookies. These are cookies that are required for the operation of our Website.
                They include, for example, cookies that enable you to log into secure areas of our Website.
              </Para>
            </LI>
            <LI>
              <Para>
                  Analytical/performance cookies. They allow us to recognise and count the number of visitors
                  and to see how visitors move around our Website when they are using it.
                  This helps us to improve the way our Website works, for example, by
                  ensuring that users are finding what they are looking for easily.
              </Para>
            </LI>
            <LI>
              <Para>
                  Functionality cookies. These are used to recognise you when you return to our Website.
                  This enables us to personalise our content for you, greet you by name and remember your preferences.
              </Para>
            </LI>
            <LI>
              <Para>
                Targeting cookies. These cookies record your visit to our Website,
                the pages you have visited and the links you have followed.
                We will use this information to make our Website and the advertising (our own and that of our partners)
                displayed on it more relevant to your interests.
                We may also share this information (in an anonymised form) with third parties for this purpose.
              </Para>
            </LI>
          </OL>
        </Para>
        <Para>
          Some of the advertising that is displayed on our Website is provided by third party advertisers and
          advertising networks.
          They may use cookies to ensure that particular advertisements are not shown to you too many times
          or to collect information about the types of websites that you visit so that they can show you advertising that
          is relevant to your particular interests.
        </Para>
        <Para>
          Similarly, some of the advertising that is displayed on our own Websites may have
          been chosen for you based on your browsing of third party Websites.
          We do not set these cookies ourselves and so cannot control when and
          how they are set on your computer or other device.
          You may be able to express certain preferences about online behavioural advertising on this website:
          <Anchor href="www.youronlinechoices.eu" primary>www.youronlinechoices.eu</Anchor>
.
        </Para>
        <Para>
          Please note that third parties (including, for example, providers of external services like web traffic analysis services)
          may also use cookies, over which we have no control.
          These cookies are likely to be analytical/performance cookies or targeting cookies.
        </Para>
      </>
    )
  }
}

export default TypesOfCookies
