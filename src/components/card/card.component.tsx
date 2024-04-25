import { ReactNode } from 'react'

import { CardContainer } from './card.styles'

type CardProps = {
	children?: ReactNode
}

export default function Card(props: CardProps) {
	const { children } = props

	return <CardContainer>{children}</CardContainer>
}
