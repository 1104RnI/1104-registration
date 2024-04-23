import { ChangeEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import { RadioButtonContainer } from './radio-button.styles'

type RadioButtonProps = {
	name?: string
	text: string
	value?: string
	isChecked?: boolean
	handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function RadioButton(props: RadioButtonProps) {
	const { name, value, text, isChecked, handleChange } = props

	return (
		<RadioButtonContainer $isChecked={isChecked ? isChecked : false}>
			<input name={name} type="radio" value={value} onChange={handleChange} />
			<span>{text}</span>
			{isChecked ? <FontAwesomeIcon icon={faCircleCheck} id="icon" /> : null}
		</RadioButtonContainer>
	)
}
