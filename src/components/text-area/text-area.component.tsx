import { MouseEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { TextAreaContainer } from './text-area.styles'

type TextAreaProps = {
	title?: string
	text?: string[]
	link?: string
	handleClick?: (e: MouseEvent<HTMLSpanElement>) => void
}

export default function TextArea(props: TextAreaProps) {
	const { title, text, link, handleClick } = props

	return (
		<TextAreaContainer>
			{title ? <h1>{title}</h1> : null}
			{text ? text.map((item, index) => <p key={index}>{item}</p>) : null}
			{link ? (
				<span onClick={handleClick}>
					<FontAwesomeIcon icon={faArrowRight} id="icon" />
					{link}
				</span>
			) : null}
		</TextAreaContainer>
	)
}
