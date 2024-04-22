import { useState, ChangeEvent, FocusEvent } from 'react'

type SelectProps = {
	value?: string
	placeholder?: string
	isValid: boolean
	options?: number[]
	unit?: string
	handleChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}

export default function Select(props: SelectProps) {
	const { value, placeholder, isValid, options, handleChange, unit } = props

	const [isFocused, setIsFocused] = useState<boolean>(false)

	const handleFocus = (e: FocusEvent<HTMLSelectElement>) => setIsFocused(true)
	const handleBlur = (e: FocusEvent<HTMLSelectElement>) => setIsFocused(false)

	return (
		<select
			value={value}
			onFocus={handleFocus}
			onBlur={handleBlur}
			onChange={handleChange}
		>
			<option value="">{placeholder}</option>
			{options &&
				options.map((item) => (
					<option key={item} value={item}>
						{item}
						{unit}
					</option>
				))}
		</select>
	)
}
