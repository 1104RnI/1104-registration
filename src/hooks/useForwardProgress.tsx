import { useEffect } from 'react'
import { useProgressStore } from '../store/progressStore'

const useForwardProgress = (delay: number = 1500) => {
	const requestStatus = useProgressStore((state) => state.requestStatus)
	const forwardProgress = useProgressStore((state) => state.forwardProgress)

	useEffect(() => {
		console.log(1)
		if (requestStatus === 'success') {
			console.log(2)
			const timeoutId = setTimeout(() => {
				console.log(3)
				forwardProgress()
			}, delay)

			return () => {
				clearTimeout(timeoutId)
			}
		}
	}, [requestStatus, forwardProgress, delay])
}

export default useForwardProgress
