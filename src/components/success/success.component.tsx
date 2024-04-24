import Lottie from 'lottie-react'
import successAnim from '../../assets/lottie/successAnim.json'

export default function Success() {
	return (
		<div>
			<Lottie animationData={successAnim} />
			<h3>완료되었습니다.</h3>
		</div>
	)
}
