import styled from 'styled-components'
import {
  minWidthSize,
} from '../../ui/global/mediaQuery'

/**
 * https://alistapart.com/article/creating-intrinsic-ratios-for-video/
 */
export const IframeContainer = styled.div`
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  ${minWidthSize.tablet`
    height: 360px;
    width: 560px;
  `}
`
/**
 * <iframe id="ytplayer" type="text/html" width="640" height="360"
 * src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
 * frameborder="0"></iframe>
 */

export const Iframe = styled.iframe`
  border: 0;
  height: 100%;
  width: 100%;
  left: 0;
  position: absolute;
  top: 0;
  ${minWidthSize.tablet`
    width: 560px;
    height: 340px;
  `}
`
