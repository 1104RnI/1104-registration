import Lottie from 'lottie-react'
import spinnerAnim from '../../assets/lottie/spinnerAnim.json'

import { SpinnerContainer } from './spinner.style'

export default function Spinner() {
	return (
		<SpinnerContainer>
			<Lottie animationData={spinnerAnim} />
			<h3>잠시만 기다려 주세요.</h3>
			<p>데이터를 처리중입니다.</p>
		</SpinnerContainer>
	)
}
