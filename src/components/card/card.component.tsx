import { ReactNode } from 'react'

import { CardContainer } from './card.styles'

type CardProps = {
	children?: ReactNode
	id?: string
	className?: string
}

export default function Card(props: CardProps) {
	const { children, id, className } = props

	return (
		<CardContainer id={id} className={className}>
			{children}
		</CardContainer>
	)
}
