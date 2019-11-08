import {css} from 'styled-components'

export interface Sizes {
  [key: string]: number,
  mobile: number,
  tablet: number,
  desktop: number,
  large: number
}

/**
 * Bootstrap is mobile first
 */
export const sizes: Sizes = {
  mobile: 576,
  tablet: 768,
  desktop: 992,
  large: 1200,
}

export const minWidthSize = Object.keys(sizes).reduce((acc: any, label: string) => {
  acc[label] = (...args: any[]) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...(args as [any]))}
    }
  `
  return acc
}, {})


export interface MediaQueryInterface {
  isMobile: () => boolean,
  isTablet: () => boolean,
  isDesktop: () => boolean,
  isLarge: () => boolean
}

export const mediaQueryFunctions = (windowWidth: number) => ({
  isMobile: () => windowWidth <= sizes.mobile,
  isTablet: () => windowWidth >= sizes.tablet,
  isDesktop: () => windowWidth >= sizes.desktop,
  isLarge: () => windowWidth >= sizes.large,
})
