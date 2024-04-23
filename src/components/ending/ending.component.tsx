import { useState } from 'react'

import Lottie from 'lottie-react'
import confettiAnim from '../../assets/lottie/confettiAnim.json'
import congratsAnim from '../../assets/lottie/congratsAnim.json'

import TextArea from '../text-area/text-area.component'
import DiscordButton from '../discord-button/discord-button.component'

import { EndingContainer } from './ending.styles'

export default function Ending() {
	const [isAnimationVisible, setIsAnimationVisible] = useState(true)

	const handleAnimationComplete = () => {
		setIsAnimationVisible(false)
	}

	return (
		<EndingContainer>
			{isAnimationVisible && (
				<Lottie
					animationData={confettiAnim}
					onComplete={handleAnimationComplete}
					loop={false}
					id="lottie-confetti-anim"
				/>
			)}
			<div id="text-anim-container">
				<Lottie
					animationData={congratsAnim}
					// loop={false}
					id="lottie-congrats-anim"
				/>
				<TextArea
					title="축하합니다!"
					text={[
						'1104 R&I 정보 등록 및 인디케이터 셋팅이 모두 완료되었습니다.',
						'아래 버튼을 클릭하여 공식 커뮤니티에 참여하시면 더 많은 정보와 다양한 혜택, 그리고 기술적 지원을 받아보실 수 있습니다.',
					]}
				/>
			</div>
			<DiscordButton id="discord-button" />
		</EndingContainer>
	)
}
