import { ProgressIndicatorContainer } from './progress-indicator.styles'

import IndicatorQueue from '../indicator-queue/indicator-queue.component'

type ProgressIndicatorProps = {
	progress: number
}

export default function ProgressIndicator(props: ProgressIndicatorProps) {
	const { progress } = props

	return (
		<ProgressIndicatorContainer>
			{Array.from({ length: progress - 1 }, (_, index) => (
				<IndicatorQueue key={index} state="complete" />
			))}
			<IndicatorQueue state="current">{progress}</IndicatorQueue>
			{Array.from({ length: 5 - progress }, (_, index) => (
				<IndicatorQueue key={index} state="notStarted" />
			))}
		</ProgressIndicatorContainer>
	)
}
