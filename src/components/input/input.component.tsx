import { useState, ChangeEvent, FocusEvent } from 'react'

import { InputContainer } from './input.styles'

type InputProps = {
	type?: string
	value?: string | number
	placeholder?: string
	handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {
	const { type, value, placeholder, handleChange } = props

	const [isFocused, setIsFocused] = useState<boolean>(false)

	const handleFocus = (e: FocusEvent<HTMLInputElement>) => setIsFocused(true)
	const handleBlur = (e: FocusEvent<HTMLInputElement>) => setIsFocused(false)

	return (
		<InputContainer
			type={type}
			value={value}
			onFocus={handleFocus}
			onBlur={handleBlur}
			onChange={handleChange}
			placeholder={placeholder}
			isFocused={isFocused}
		/>
	)
}
