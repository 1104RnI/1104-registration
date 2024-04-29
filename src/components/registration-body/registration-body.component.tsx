import { useProgressStore, ProgressState } from '../../store/progressStore'

import AnimatedWrapper from '../animated-wrapper/animated-wrapper.component'
import EmailCheck from '../email-check/email-check.component'
import PersonalInfoInputs from '../personal-info-inputs/personal-info-inputs.component'
import ExchangeSelector from '../exchange-selector/exchage-selector.component'
import ExchangePromotion from '../exchange-promotion/exchange-promotion.component'
import BenefitSelector from '../benefit-selector/benefit-selector.components'
import UidInput from '../uid-input/uid-input.component'
import TradingViewIdCheck from '../tradingView-id-check/tradingView-id-check.component'
import AssetManagementSelector from '../asset-management-selector/asset-management-selector.component'

export default function RegistrationBody() {
	const progress = useProgressStore((state: ProgressState) => state.progress)
	const exchangeSelectionStep = useProgressStore(
		(state) => state.exchangeSelectStep,
	)

	switch (progress) {
		case 1:
			return <AnimatedWrapper key="emailCheck" component={EmailCheck} />
		case 2:
			return (
				<AnimatedWrapper
					key="personalInfoInputs"
					component={PersonalInfoInputs}
				/>
			)
		case 3:
			switch (exchangeSelectionStep) {
				case 'beforeSelection':
					return (
						<AnimatedWrapper
							key="exchangeSelector"
							component={ExchangeSelector}
						/>
					)
				case 'afterSelection':
					return (
						<AnimatedWrapper
							key="exchangePromotion"
							component={ExchangePromotion}
						/>
					)
				case 'benefitSelection':
					return (
						<AnimatedWrapper
							key="benefitSelector"
							component={BenefitSelector}
						/>
					)
				case 'uidInput':
					return <AnimatedWrapper key="uidInput" component={UidInput} />
				default:
					return null
			}
		case 4:
			return (
				<AnimatedWrapper
					key="tradingViewIdCheck"
					component={TradingViewIdCheck}
				/>
			)
		case 5:
			return (
				<AnimatedWrapper
					key="assetManagementSelector"
					component={AssetManagementSelector}
				/>
			)
		default:
			return null
	}
}
