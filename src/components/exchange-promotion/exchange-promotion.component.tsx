import TextArea from '../text-area/text-area.component'
import Card from '../card/card.component'
import Button from '../button/button.component'

export default function ExchangePromotion() {
	return (
		<div>
			<div className="body-rows">
				<div id="text-area-container">
					<h3>잠깐만요!</h3>
					<TextArea
						title="1104 R&I에서 드리는 혜택이 있어요."
						text={[
							'1104 R&I는 여러 거래소들과 제휴 협력하여 여러분께 아래와 같이 이용 혜택을 드리고 있어요.',
						]}
					/>
				</div>
				<Card>
					<p>최대 수수료 할인률 20% 제공</p>
					<span>거래소 정책 기준</span>
				</Card>
			</div>
			<div className="body-rows">
				<p>거래소 혜택 외에 다른 다양한 혜택들도 제공하고 있어요.</p>
				<Card>
					<p>1104 R&I 커뮤니티 대회</p>
					<span>대회 수상자 상금 지급</span>
				</Card>
				<Card>
					<p>사용료 월 228,000원 → 110,000원</p>
					<span>인디케이터 가격 할인</span>
				</Card>
			</div>
			<div id="buttons-container">
				<Button
					appearance="neutral"
					hierarchy="primary"
					text="혜택 받아볼래요"
				/>
				<Button
					appearance="accent"
					hierarchy="secondary"
					text="괜찮아요, 혜택없이 진행할래요"
				/>
			</div>
		</div>
	)
}
