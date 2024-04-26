import { MouseEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { ExchangeButtonContainer } from './exchange-button.styles'

type ExchangeButtonProps = {
	id?: string
	text: string
	handleClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function ExchangeButton(props: ExchangeButtonProps) {
	const { id, text, handleClick } = props

	return (
		<ExchangeButtonContainer id={id} onClick={handleClick}>
			<span>{text}</span>
			<FontAwesomeIcon icon={faAngleRight} id="icon" />
		</ExchangeButtonContainer>
	)
}
