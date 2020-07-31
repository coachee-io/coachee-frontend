import styled from 'styled-components'
import {
  minWidthSize,
} from '../../ui/global/mediaQuery'

/**
 * https://alistapart.com/article/creating-intrinsic-ratios-for-video/
 */
export const IframeContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 35px;
  height: 0;
  overflow: hidden;
`
/**
 * <iframe id="ytplayer" type="text/html" width="640" height="360"
 * src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
 * frameborder="0"></iframe>
 */

export const Iframe = styled.iframe`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  ${minWidthSize.tablet`
    width: 560px;
    height: 340px;
  `}
`
