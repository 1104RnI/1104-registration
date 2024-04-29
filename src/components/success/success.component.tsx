// import { useEffect } from 'react'

import Lottie from 'lottie-react'
import successAnim from '../../assets/lottie/successAnim.json'

// import { useProgressStore } from '../../store/progressStore'

import { SuccessContainer } from './success.styles'

export default function Success() {
	// const updateRequestState = useProgressStore(
	// 	(state) => state.updateRequestStatus,
	// )

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		updateRequestState('idle')
	// 	}, 1500)

	// 	return () => {
	// 		clearTimeout(timer)
	// 	}
	// }, [updateRequestState])

	return (
		<SuccessContainer>
			<Lottie animationData={successAnim} loop={false} />
			{/* <h3>완료되었습니다.</h3> */}
		</SuccessContainer>
	)
}
