import { useEffect, useRef } from 'react'
import { useProgressStore } from '../store/progressStore'

const useForwardProgress = (delay: number = 1500) => {
	const requestStatus = useProgressStore((state) => state.requestStatus)
	const forwardProgress = useProgressStore((state) => state.forwardProgress)
	const timeoutIdRef = useRef<number | null>(null)

	useEffect(() => {
		console.log(1)
		if (requestStatus === 'success') {
			console.log(2)
			timeoutIdRef.current = window.setTimeout(() => {
				console.log(3)
				forwardProgress()
			}, delay)
		}

		return () => {
			if (timeoutIdRef.current) {
				window.clearTimeout(timeoutIdRef.current)
			}
		}
	}, [requestStatus, forwardProgress, delay])
}

export default useForwardProgress
