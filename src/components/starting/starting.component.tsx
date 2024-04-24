import { useProgressStore } from '../../store/progressStore'

import Lottie from 'lottie-react'
import welcomeAnim from '../../assets/lottie/welcomeAnim.json'

import TextArea from '../text-area/text-area.component'
import Button from '../button/button.component'

import { StartingContainer } from './starting.styles'

export default function Starting() {
	const forwardProgress = useProgressStore((state) => state.forwardProgress)

	const handleClick = (): void => forwardProgress()

	return (
		<StartingContainer>
			<div id="text-anim-container">
				<Lottie animationData={welcomeAnim} id="lottie-welcome-anim" />
				<TextArea
					title="환영합니다!"
					text={[
						'인디케이터를 셋팅하기 위해서는 추가 정보 등록이 필요합니다. 총 다섯 단계로 진행되지만 오래 걸리지 않아요!',
						' 수집된 모든 정보는 본인 확인 및 각종 혜택 적용 여부 확인 용도로만 사용되며, 제 3자에게 제공되지 않습니다.',
					]}
				/>
			</div>
			<Button
				appearance="neutral"
				hierarchy="primary"
				text="개인정보 제공 동의하고 시작하기"
				handleClick={handleClick}
				id="start-button"
			/>
		</StartingContainer>
	)
}
