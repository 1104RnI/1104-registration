import { MouseEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChild } from '@fortawesome/free-solid-svg-icons'

import { BeginnerButtonContainer } from './beginner-button.styles'

type BeginnerButtonProps = {
	text: string
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function BeginnerButton(props: BeginnerButtonProps) {
	const { text, onClick } = props

	return (
		<BeginnerButtonContainer type="button" onClick={onClick}>
			<FontAwesomeIcon icon={faChild} id="icon" />
			{text}
		</BeginnerButtonContainer>
	)
}
