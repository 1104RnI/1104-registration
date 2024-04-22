import styled, { css } from 'styled-components'

type InputContainerProps = {
	$isFocused: boolean
	$isValid: boolean
}

export const InputContainer = styled.input<InputContainerProps>`
	&::-ms-clear,
	&::-ms-reveal {
		display: none;
		width: 0;
		height: 0;
	}
	&::-webkit-search-decoration,
	&::-webkit-search-cancel-button,
	&::-webkit-search-results-button,
	&::-webkit-search-results-decoration {
		display: none;
	}
	-webkit-user-select: text;
	-moz-user-select: text;
	-ms-user-select: text;
	user-select: text;

	all: unset;
	width: 100%;

	cursor: text;
	box-sizing: border-box;

	background-color: #fff;

	${(props) =>
		props.$isFocused &&
		(props.$isValid
			? css`
					border: 0.125rem solid #000000;
			  `
			: css`
					border: 0.125rem solid red;
			  `)}
	${(props) =>
		!props.$isFocused &&
		(props.$isValid
			? css`
					border: 0.125rem solid #e9e9e9;
			  `
			: css`
					border: 0.125rem solid rgba(255, 0, 0, 0.25);
			  `)}

	border-radius: 1rem;

	padding: 1rem 0.75rem;

	text-align: left;

	&::placeholder {
		color: #c6c6c6;
	}
`
