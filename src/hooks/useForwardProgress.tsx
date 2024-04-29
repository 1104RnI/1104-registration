import { useEffect } from 'react'
import { useProgressStore } from '../store/progressStore'

const useForwardProgress = (delay: number = 1500) => {
	const requestStatus = useProgressStore((state) => state.requestStatus)
	const forwardProgress = useProgressStore((state) => state.forwardProgress)
	const updateRequestState = useProgressStore(
		(state) => state.updateRequestStatus,
	)

	useEffect(() => {
		let timeoutId: number | null = null

		if (requestStatus === 'success') {
			timeoutId = window.setTimeout(() => {
				forwardProgress()
				updateRequestState('idle')
			}, delay)
		}

		return () => {
			if (timeoutId !== null) {
				window.clearTimeout(timeoutId)
			}
		}
	}, [requestStatus, forwardProgress, delay, updateRequestState])
}

export default useForwardProgress
