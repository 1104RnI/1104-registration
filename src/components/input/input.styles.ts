import styled, { css } from 'styled-components'

export const InputContainer = styled.input<{ isFocused: boolean }>`
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

	border: 0.125rem solid #e9e9e9;
	border-radius: 1rem;

	padding: 1rem 0.75rem;

	text-align: left;

	&::placeholder {
		color: #c6c6c6;
	}

	${(props) =>
		props.isFocused &&
		css`
			border-color: #000000;
		`}
`
