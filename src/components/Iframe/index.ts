import styled from 'styled-components'

import {
  minWidthSize,
} from '../../ui/global/mediaQuery'

/**
 * <iframe id="ytplayer" type="text/html" width="640" height="360"
 * src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
 * frameborder="0"></iframe>
 */

export const Iframe = styled.iframe`
  display: block;
  border: 0;
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
`

/**
 * https://alistapart.com/article/creating-intrinsic-ratios-for-video/
 */
export const IframeContainer = styled.div`
  position: relative; 
  padding-bottom: 56.25%; 
  overflow: hidden;
  width: 100%;

  ${minWidthSize.tablet`
    width: 560px;
    height: 315px;
    padding-bottom: 0; 
  `}
`
