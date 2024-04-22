import { ReactNode } from 'react'

import { IndicatorQueueContainer } from './indicator-queue.styles'

export type IndicatorState = 'complete' | 'current' | 'notStarted'

type IndicatorQueueProps = {
	state: IndicatorState
	children?: ReactNode | null
}

export default function IndicatorQueue(props: IndicatorQueueProps) {
	return (
		<IndicatorQueueContainer $state={props.state}>
			{props.children}
		</IndicatorQueueContainer>
	)
}
