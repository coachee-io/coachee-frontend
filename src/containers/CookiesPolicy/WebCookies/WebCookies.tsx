import React, { PureComponent } from 'react'

import {Anchor} from '../../../components/Routing'

import {Para} from '../../../ui/labels'
import {H3} from '../../../ui/headings'

class WebCookies extends PureComponent {
  render() {
    return (
      <>
        <H3 id="web-cookies">
          1. What are web cookies?
        </H3>
        <Para>
          Web cookies are small files that are placed on your computer or mobile device by a website when you visit it.
          They contain details of your browsing history on that website and distinguish you from other users.
          Cookies send data back to the originating website on each subsequent visit or allow another website to recognise the cookie.
          Cookies are useful because they allow a website to recognise a user’s device and, for instance, remember your
          preferences and generally improve your online user experience.
          Like most websites, we use cookies.
        </Para>
        <Para>
          Although this Cookies Policy refers to the general term “cookie”,
          which is the main method used by this website to store information,
          the browser’s local storage space is also used for the same purpose and
          we may use other tracking technologies through this website such as web beacons.
          As a result, the information included in this Cookie Policy is likewise applicable
          to all such tracking technologies that we use.
        </Para>
        <Para>
          You can find out more about cookies at
          {' '}
          <Anchor href="www.allaboutcookies.org" primary>www.allaboutcookies.org</Anchor>
.
        </Para>
      </>
    )
  }
}

export default WebCookies
