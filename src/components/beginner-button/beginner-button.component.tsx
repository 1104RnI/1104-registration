import { MouseEvent } from 'react'

type BeginnerButtonProps = {
	text: string
	onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function BeginnerButton(props: BeginnerButtonProps) {
	const { text, onClick } = props

	return <button onClick={onClick}>{text}</button>
}
