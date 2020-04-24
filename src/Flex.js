import PropTypes from 'prop-types'
import styled from 'styled-components'
import Box from './Box'
import {FLEX, get} from './constants'
import theme from './theme'

const Flex = styled(Box)`
  /* Select any element that immediately follows a direct child of the this flex container */
  > * + * {
    ${props => {
      const gap = get(`space.${props.gap}`)(props)
      return props.flexDirection === 'column' ? `margin-top: ${gap}` : `margin-left: ${gap}`
    }}
  }

  ${FLEX};
`

// Keeping this around for backwards compatibility, but it's the same as `FLEX`
Flex.Item = styled(Box)`
  ${FLEX};
`

Flex.defaultProps = {
  theme,
  display: 'flex'
}

Flex.Item.defaultProps = {
  theme
}

Flex.propTypes = {
  ...Box.propTypes,
  ...FLEX.propTypes
}

Flex.Item.propTypes = {
  ...FLEX.propTypes,
  theme: PropTypes.object
}

export default Flex
