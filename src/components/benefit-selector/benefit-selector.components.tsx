import { useUserDataStore, useExchangeDataStore } from '../../store/dataStore'
import { useProgressStore } from '../../store/progressStore'

import TextArea from '../text-area/text-area.component'
import ExchangeButton from '../exchange-button/exchange-button.component'
import Button from '../button/button.component'

import { BenefitSelectorContainer } from './benefit-selector.styles'

export default function BenefitSelector() {
	const setUserData = useUserDataStore((state) => state.setUserData)
	const defaultExchange = useExchangeDataStore((state) => state.defaultExchange)
	const exchangeList = useExchangeDataStore((state) => state.exchangeList)
	const forwardProgress = useProgressStore((state) => state.forwardProgress)
	const updateExchangeSelectStep = useProgressStore(
		(state) => state.updateExchangeSelectStep,
	)

	const handleClick = (url: string) => {
		window.open(url, '_blank')
	}

	return (
		<BenefitSelectorContainer>
			<TextArea
				title="혜택받을 거래소 선택 및 신규가입"
				text={[
					'1104 R&I가 제공해 드리는 혜택을 받으실 거래소를 선택해 주세요.',
					'다만 혜택을 받기 위해선 선택한 거래소에 대한 신규가입이 필요해요. 이메일을 통해 신규가입 하시면 빠르게 진행하실 수 있어요.',
				]}
			/>
			<div id="buttons-container">
				<div className="buttons-rows">
					{exchangeList.map(
						(item, index) =>
							item.referralCode.length !== 0 && (
								<ExchangeButton
									key={index}
									text={`${item.koName} 신규가입`}
									handleClick={() => handleClick(item.url)}
								/>
							),
					)}
				</div>
				<div className="buttons-rows">
					<Button
						appearance="neutral"
						hierarchy="primary"
						text="해당 거래소로 신규가입 완료했어요"
						handleClick={() => {
							updateExchangeSelectStep('uidInput')
							setUserData({
								referral: true,
								exchange: defaultExchange,
							})
						}}
					/>
					<Button
						appearance="accent"
						hierarchy="secondary"
						text="괜찮아요, 혜택없이 진행할래요"
						handleClick={forwardProgress}
					/>
				</div>
			</div>
		</BenefitSelectorContainer>
	)
}
