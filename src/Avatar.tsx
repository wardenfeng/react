import styled from 'styled-components'
import {get, COMMON, CommonProps} from './constants'
import theme from './theme'
import sx, {SxProp} from './sx'

interface AvatarProps extends CommonProps, SxProp {
  size?: number
  square?: boolean
}

function getBorderRadius(props: AvatarProps) {
  if (props.square) {
    return !props.size || props.size <= 24 ? '4px' : '6px'
  } else {
    return '50%'
  }
}

const Avatar = styled.img.attrs<AvatarProps>((props) => ({
  height: props.size,
  width: props.size,
  alt: props.alt,
}))<AvatarProps>`
  display: inline-block;
  overflow: hidden; // Ensure page layout in Firefox should images fail to load
  line-height: ${get('lineHeights.condensedUltra')};
  vertical-align: middle;
  border-radius: ${(props) => getBorderRadius(props)};
  ${COMMON};
  ${sx};
`

Avatar.defaultProps = {
  theme,
  size: 20,
  alt: '',
  square: false,
}

export default Avatar
