import { useProgressStore, ProgressState } from '../../store/progressStore'

import { ProgressIndicatorContainer } from './progress-indicator.styles'

import IndicatorQueue from '../indicator-queue/indicator-queue.component'

export default function ProgressIndicator() {
	const progress = useProgressStore((state: ProgressState) => state.progress)

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
