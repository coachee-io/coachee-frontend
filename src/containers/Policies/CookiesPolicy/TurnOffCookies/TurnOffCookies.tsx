import React, { PureComponent } from 'react'

import {Anchor} from 'components/Routing'

import {Para} from 'ui/labels'
import {H3} from 'ui/headings'

class TurnOffCookies extends PureComponent {
  render() {
    return (
      <>
        <H3 id="turn-off-cookies">
          5. Turning cookies off
        </H3>
        <Para>
          Internet browsers normally accept cookies by default.
          However, most browsers let you turn off either all or third-party cookies.
          What you are able to do depends on which browser you are using.
          If you do not accept our use of cookies as set out above, please set your browser to reject cookies.
          However, please be aware that this may impair or limit your ability to use our website.
          The option to do this is usually found in the options, settings or preferences menu of your browser or mobile device.
        </Para>
        <Para>
          You may opt-out of Google’s analytics cookies by visiting Google’s opt-out page -
          <Anchor href="https://tools.google.com/dlpage/gaoptout" primary>
            https://tools.google.com/dlpage/gaoptout
          </Anchor>
          .
          {' '}
        </Para>
        <Para>
          Click on the links below to find out how to change your cookie settings in:
        </Para>
        <Para>
          <Anchor href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies" primary>
            Internet Explorer / Edge
          </Anchor>
        </Para>
        <Para>
          <Anchor href="https://support.mozilla.org/en-US/products/firefox/basic-browsing-firefox" primary>
            Firefox
          </Anchor>
        </Para>
        <Para>
          <Anchor href="https://support.google.com/chrome/answer/95647?hl=en" primary>
            Chrome
          </Anchor>
        </Para>
        <Para>
          <Anchor href="https://support.apple.com/kb/PH21411?locale=en_US" primary>
            Safari
          </Anchor>
        </Para>
        <Para>
          <Anchor href="https://www.opera.com/o/ie-simple" primary>
            Opera
          </Anchor>
        </Para>
        <Para>
          <Anchor href="https://support.apple.com/en-gb/HT201265" primary>
            iPhone and iPad
          </Anchor>
        </Para>
        <Para>
          {/* eslint-disable */}
          <Anchor href="https://www.samsung.com/uk/support/mobile-devices/what-are-cookies-and-how-do-i-enable-or-disable-them-on-my-samsung-galaxy-device/" primary>
            Samsung
          </Anchor>
          {/* eslint-enable */}
        </Para>
      </>
    )
  }
}

export default TurnOffCookies
