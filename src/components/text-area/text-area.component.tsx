import { TextAreaContainer } from './text-area.styles'

type TextAreaProps = {
	title?: string
	text?: string[]
}

export default function TextArea(props: TextAreaProps) {
	const { title, text } = props

	return (
		<TextAreaContainer>
			{title ? <h1>{title}</h1> : null}{' '}
			{text ? text.map((item, index) => <p>{item}</p>) : null}
		</TextAreaContainer>
	)
}
