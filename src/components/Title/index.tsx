import { ReactNode } from 'react'
import { Title as TitleStyled } from './styles'

export type Props = {
  children?: ReactNode
  fontSize?: string
}

const Title = (props: Props) => (
  <TitleStyled fontSize={props.fontSize}>{props.children}</TitleStyled>
)

export default Title
