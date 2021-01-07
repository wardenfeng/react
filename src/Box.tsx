import styled from 'styled-components'
import {COMMON, CommonProps, FLEX, FlexProps, LAYOUT, LayoutProps} from './constants'
import sx, {SxProp} from './sx'
import theme from './theme'

export interface BoxProps extends CommonProps, FlexProps, LayoutProps, SxProp {}

const Box = styled.div<BoxProps>`
  ${COMMON}
  ${FLEX}
  ${LAYOUT}
  ${sx};
`

Box.defaultProps = {theme}

export default Box
