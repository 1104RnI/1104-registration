import styled from 'styled-components'

type SelectorContainerProps = {
	$isFocused: boolean
	// $isValid: boolean
}

export const SelectorDivContainer = styled.div<SelectorContainerProps>`
	width: 100%;

	display: flex;
	align-items: center;

	cursor: pointer;
	box-sizing: border-box;

	background-color: #fff;

	border: ${(props) =>
		props.$isFocused ? '0.125rem solid #000000' : '0.125rem solid #e9e9e9'};
	border-radius: 1rem;
	padding: 1rem 0.75rem;

	text-align: left;
`

export const SelectContainer = styled.select`
	&::-ms-clear,
	&::-ms-reveal {
		display: none;
		width: 0;
		height: 0;
	}

	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;

	/* -webkit-user-select: text;
	-moz-user-select: text;
	-ms-user-select: text;
	user-select: text; */

	all: unset;
	width: 100%;
	height: 100%;
`
