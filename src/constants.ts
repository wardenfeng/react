import {themeGet} from '@styled-system/theme-get'
import * as styledSystem from 'styled-system'
import theme from './theme'

const {get: getKey, compose, system} = styledSystem

export function get(key: string) {
  return themeGet(key, getKey(theme, key))
}

// Common
export const COMMON = compose(styledSystem.space, styledSystem.color, styledSystem.display)
export interface CommonProps extends styledSystem.ColorProps, styledSystem.SpaceProps, styledSystem.DisplayProps {}

// Typography
const whiteSpace = system({whiteSpace: {property: 'whiteSpace'}})
export const TYPOGRAPHY = compose(styledSystem.typography, whiteSpace)
export interface TypographyProps extends styledSystem.TypographyProps {
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line'
}

// Border
export const BORDER = compose(styledSystem.border, styledSystem.shadow)
export interface BorderProps extends styledSystem.BorderProps, styledSystem.ShadowProps {}

// Layout
export const LAYOUT = styledSystem.layout
export interface LayoutProps extends styledSystem.LayoutProps {}

// Position
export const POSITION = styledSystem.position
export interface PositionProps extends styledSystem.PositionProps {}

// Flex
export const FLEX = styledSystem.flexbox
export interface FlexProps extends styledSystem.FlexProps {}

// Grid
export const GRID = styledSystem.grid
export interface GridProps extends styledSystem.GridProps {}
