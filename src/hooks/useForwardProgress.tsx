import { useEffect } from 'react'
import { useProgressStore, ExchangeSelectStep } from '../store/progressStore'

type UpdateAction = 'forwardProgress' | 'updateExchangeSelectStep'

type UseForwardProgressProps = {
	action: UpdateAction
	step?: ExchangeSelectStep
}

const useForwardProgress = (
	props: UseForwardProgressProps,
	delay: number = 1500,
) => {
	const { action, step } = props

	const requestStatus = useProgressStore((state) => state.requestStatus)
	const forwardProgress = useProgressStore((state) => state.forwardProgress)
	const updateExchangeSelectStep = useProgressStore(
		(state) => state.updateExchangeSelectStep,
	)
	const updateRequestState = useProgressStore(
		(state) => state.updateRequestStatus,
	)

	useEffect(() => {
		let timeoutId: number | null = null

		if (requestStatus === 'success') {
			timeoutId = window.setTimeout(() => {
				if (action === 'forwardProgress') {
					forwardProgress()
				} else if (action === 'updateExchangeSelectStep' && step) {
					updateExchangeSelectStep(step)
				}
				updateRequestState('idle')
			}, delay)
		}

		return () => {
			if (timeoutId !== null) {
				window.clearTimeout(timeoutId)
			}
		}
	}, [
		requestStatus,
		action,
		step,
		delay,
		forwardProgress,
		updateExchangeSelectStep,
		updateRequestState,
	])
}

export default useForwardProgress
