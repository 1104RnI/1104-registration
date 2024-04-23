import styled, { css } from 'styled-components'

import { ButtonAppearance, ButtonHierarchy } from './button.component'

type ButtonContainerProps = {
	$appearance: ButtonAppearance
	$hierarchy: ButtonHierarchy
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
	all: unset;
	cursor: pointer;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;

	padding: 1rem 1.25rem;
	border-radius: 0.75rem;

	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	${(props) =>
		props.$appearance === 'neutral' &&
		css`
			background-color: #0b0b0b;
		`}

	span {
		${(props) =>
			props.$appearance === 'accent' &&
			css`
				color: #000000;
			`}
		${(props) =>
			props.$appearance === 'neutral' &&
			css`
				color: #ffffff;
			`}
      ${(props) =>
			props.$appearance === 'system' &&
			css`
				color: #ff5656;
			`}
    
    ${(props) =>
			props.$hierarchy === 'primary' &&
			css`
				font-weight: bold;
			`}
    ${(props) =>
			props.$hierarchy === 'secondary' &&
			css`
				font-weight: normal;
			`}
	}

	&:active {
		${(props) =>
			props.$appearance === 'neutral'
				? css`
						background-color: #2b2b2b;
						color: #b6b6b6;
				  `
				: css`
						background-color: #f1f1f1;
				  `}
	}

	&:disabled {
		opacity: 0.25;
		pointer-events: none;
	}
`
