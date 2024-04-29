import Lottie from 'lottie-react'
import successAnim from '../../assets/lottie/successAnim.json'

import { SuccessContainer } from './success.styles'

export default function Success() {
	return (
		<SuccessContainer>
			<Lottie animationData={successAnim} loop={false} />
			{/* <h3>완료되었습니다.</h3> */}
		</SuccessContainer>
	)
}
