import styled, { css } from 'styled-components'

type RadioButtonContainerProps = {
	$isChecked: boolean
}

export const RadioButtonContainer = styled.label<RadioButtonContainerProps>`
	display: flex;
	align-items: center;

	cursor: pointer;
	box-sizing: border-box;

	border: 0.125rem solid #e9e9e9;

	${(props) =>
		props.$isChecked
			? css`
					background-color: #e9e9e9;
					color: #000000;
					font-weight: 700;
			  `
			: css`
					background-color: #ffffff;
					color: #666666;
			  `}

	border-radius: 1rem;

	padding: 1rem 0.75rem;

	text-align: left;

	span {
		width: 100%;
	}

	input {
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

		all: unset;
		width: 0;
	}

	#icon {
		font-size: 1.5rem;
		color: #000000;
	}
`
