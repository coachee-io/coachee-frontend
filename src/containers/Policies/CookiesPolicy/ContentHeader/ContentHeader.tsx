import React, { PureComponent } from 'react'

import {Anchor} from 'components/Routing'

import {Para} from 'ui/labels'

class ContentHeader extends PureComponent {
  render() {
    return (
      <>
        <Para>
          (Last updated on the 1st of January 2020)
        </Para>
        <Para>
          This Cookies Policy explains how
          {' '}
          <strong>
            COACHEE.IO Ltd
          </strong>
          {' '}
          uses cookies and other tracking technologies through ourwebsite
          {' '}
          <Anchor href="https//www.coachee.io" primary>www.coachee.io</Anchor>
          {' '}
          (our “Website”).
          This Cookies Policy is to be read alongside our Privacy Policy which explains how we use personal information.
          If you do not accept our use of cookies please disable them following our guidance below.
        </Para>
      </>
    )
  }
}

export default ContentHeader
