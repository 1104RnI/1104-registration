import { useEffect } from 'react'

import { useProgressStore, ExchangeSelectStep } from '../store/progressStore'

const useDelayedUpdate = (step: ExchangeSelectStep, delay: number = 1500) => {
	const requestStatus = useProgressStore((state) => state.requestStatus)
	const updateExchangeSelectStep = useProgressStore(
		(state) => state.updateExchangeSelectStep,
	)

	useEffect(() => {
		let timeoutId: NodeJS.Timeout

		if (requestStatus === 'success') {
			timeoutId = setTimeout(() => {
				updateExchangeSelectStep(step)
			}, delay)
		}

		return () => {
			clearTimeout(timeoutId)
		}
	}, [requestStatus, step, delay, updateExchangeSelectStep])
}

export default useDelayedUpdate
