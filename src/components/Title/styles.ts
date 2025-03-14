import styled from 'styled-components'
import { Props } from '.'

export const Title = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '32')}px;
`
