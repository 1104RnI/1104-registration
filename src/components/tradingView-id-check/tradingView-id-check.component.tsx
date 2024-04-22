import Input from '../input/input.component'
import Button from '../button/button.component'
import TextArea from '../text-area/text-area.component'

import { TradingViewIdCheckContainer } from './tradingView-id-check.styles'

export default function TradingViewIdCheck() {
	return (
		<TradingViewIdCheckContainer>
			<TextArea
				title="트레이딩뷰 ID 입력"
				text={[
					'5010 인디케이터 권한 설정을 위해 트레이딩뷰 ID를 입력해 주세요.',
				]}
			/>
			<label>
				<div id="input-container">
					<Input />
				</div>
				<Button
					text="입력 완료"
					appearance="neutral"
					hierarchy="primary"
					disabled
				/>
			</label>
		</TradingViewIdCheckContainer>
	)
}
