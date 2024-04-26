import { useState, ChangeEvent, FocusEvent } from 'react'

import { InputContainer } from './input.styles'

type InputProps = {
	name?: string
	type?: string
	value?: string | number
	placeholder?: string
	isValid: boolean
	handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
	handleFocus?: (e: FocusEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {
	const { name, type, value, placeholder, isValid, handleChange, handleFocus } =
		props

	const [isFocused, setIsFocused] = useState<boolean>(false)

	const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
		setIsFocused(true)
		handleFocus && handleFocus(e)
	}
	const handleBlur = (e: FocusEvent<HTMLInputElement>) => setIsFocused(false)

	return (
		<InputContainer
			type={type}
			name={name}
			value={value}
			onFocus={handleInputFocus}
			onBlur={handleBlur}
			onChange={handleChange}
			placeholder={placeholder}
			$isFocused={isFocused}
			$isValid={isValid}
		/>
	)
}

Input.defaultProps = {
	isValid: true,
}
