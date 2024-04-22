import styled, { css } from 'styled-components'

import { IndicatorState } from './indicator-queue.component'

type IndicatorQueueContainerProps = {
	$state: IndicatorState
}

export const IndicatorQueueContainer = styled.div<IndicatorQueueContainerProps>`
	width: 2rem;

	display: flex;
	justify-content: center;
	align-items: center;

	${(props) =>
		props.$state === 'current'
			? css`
					height: 2rem;
					border-radius: 1rem;
			  `
			: css`
					height: 0.5rem;
					border-radius: 0.25rem;
			  `}

	background-color: #000000;

	${(props) =>
		props.$state === 'notStarted' &&
		css`
			opacity: 0.1;
		`};

	color: white;
	font-weight: 900;
	text-align: center;
`
