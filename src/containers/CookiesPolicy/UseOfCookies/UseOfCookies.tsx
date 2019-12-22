import React, { PureComponent } from 'react'

import {Para} from '../../../ui/labels'
import {H3} from '../../../ui/headings'
import {OL, LI} from '../../../ui/list'

class UseOfCookies extends PureComponent {
  render() {
    return (
      <>
        <H3 id="use-of-cookies">
          2. Why do we use cookies?
        </H3>
        <OL>
          <LI>
            <Para>
              To let you do things on our Website – for example, cookies enable you to log in to secure areas of our website.
            </Para>
          </LI>
          <LI>
            <Para>
              To collect anonymous statistics – the information collected by cookies enables us to
              improve the website through usage figures and patterns.
              For example, it is really useful to see which pages of the website – and therefore which of
              our services – are the most popular and how users are interacting with them.
            </Para>
          </LI>
          <LI>
            <Para>
              To improve your experience of our website – for example, to prevent you having to re-enter
              details when you have already done so, or by ensuring that users can find what they are looking for easily.
            </Para>
          </LI>
          <LI>
            <Para>
              Measuring how cost-effective our advertising is – we need to watch our advertising spend carefully.
              Cookies are used to help us see how many people who click our adverts go on to do something
              further and to help make advertising content more relevant to your interests.
            </Para>
          </LI>
        </OL>
      </>
    )
  }
}

export default UseOfCookies
