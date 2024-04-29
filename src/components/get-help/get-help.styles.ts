import styled, { css } from 'styled-components'

export type ButtonType = 'contactHelp' | 'guideHelp'

interface GetHelpContainerProps {
	$buttonType: ButtonType
}

export const GetHelpContainer = styled.button<GetHelpContainerProps>`
	all: unset;
	cursor: pointer;

	display: flex;
	gap: 0.25rem;
	width: fit-content;
	align-items: center;
	text-align: left;

	padding: 0.5rem 0.75rem;
	border-radius: 2rem;

	${(props) =>
		props.$buttonType === 'contactHelp'
			? css`
					border: none;
					margin-top: 2.5rem;
			  `
			: props.$buttonType === 'guideHelp'
			? css`
					border: 0.0625rem solid #999999;
					margin-top: 0;
			  `
			: css`
					border: none;
					margin-top: 0;
			  `}

	color: #666666;

	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	#icon {
		font-size: 0.875rem;
		line-height: 150%;
	}
	span {
		font-size: 0.875rem;
		text-decoration: ${(props) =>
			props.$buttonType === 'contactHelp'
				? 'underline'
				: props.$buttonType === 'guideHelp'
				? 'none'
				: 'none'};
	}
`
