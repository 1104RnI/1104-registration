import { useState, ChangeEvent, FocusEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import { SelectContainer, SelectorDivContainer } from './selector.styles'

type SelectProps = {
	name?: string
	value?: string
	placeholder?: string
	// isValid: boolean
	options?: number[]
	unit?: string
	handleChange?: (e: ChangeEvent<HTMLSelectElement>) => void
}

export default function Selector(props: SelectProps) {
	const { name, value, placeholder, options, handleChange, unit } = props

	const [isFocused, setIsFocused] = useState<boolean>(false)

	const handleFocus = (e: FocusEvent<HTMLDivElement>) => setIsFocused(true)
	const handleBlur = (e: FocusEvent<HTMLDivElement>) => setIsFocused(false)

	return (
		<SelectorDivContainer
			onFocus={handleFocus}
			onBlur={handleBlur}
			$isFocused={isFocused}
		>
			<SelectContainer name={name} value={value} onChange={handleChange}>
				<option value="" id="placeholder-option" disabled>
					{placeholder}
				</option>
				{options &&
					options.map((item) => (
						<option key={item} value={item}>
							{item}
							{unit}
						</option>
					))}
			</SelectContainer>
			<FontAwesomeIcon icon={faCaretDown} />
		</SelectorDivContainer>
	)
}

Selector.defaultProps = {
	handleChange: () => {},
}
