import { motion, AnimatePresence } from 'framer-motion'

import { useAnimationStore } from '../../store/dataStore'
import { useProgressStore, ProgressState } from '../../store/progressStore'

import EmailCheck from '../email-check/email-check.component'
import PersonalInfoInputs from '../personal-info-inputs/personal-info-inputs.component'
import ExchangeSelector from '../exchange-selector/exchage-selector.component'
import ExchangePromotion from '../exchange-promotion/exchange-promotion.component'
import BenefitSelector from '../benefit-selector/benefit-selector.components'
import UidInput from '../uid-input/uid-input.component'
import TradingViewIdCheck from '../tradingView-id-check/tradingView-id-check.component'
import AssetManagementSelector from '../asset-management-selector/asset-management-selector.component'

interface ProgressComponentProps {
	component: React.ComponentType
	[key: string]: any
}

const ProgressComponent: React.FC<ProgressComponentProps> = ({
	component: Component,
	...props
}) => {
	const animationProps = useAnimationStore((state) => state.animationProps)

	return (
		<AnimatePresence>
			<motion.div {...animationProps} style={{ width: '100%' }} {...props}>
				<Component />
			</motion.div>
		</AnimatePresence>
	)
}

export default function RegistrationBody() {
	const progress = useProgressStore((state: ProgressState) => state.progress)
	const exchangeSelectionStep = useProgressStore(
		(state) => state.exchangeSelectStep,
	)

	switch (progress) {
		case 1:
			return <ProgressComponent key="emailCheck" component={EmailCheck} />
		case 2:
			return (
				<ProgressComponent
					key="personalInfoInputs"
					component={PersonalInfoInputs}
				/>
			)
		case 3:
			switch (exchangeSelectionStep) {
				case 'beforeSelection':
					return (
						<ProgressComponent
							key="exchangeSelector"
							component={ExchangeSelector}
						/>
					)
				case 'afterSelection':
					return (
						<ProgressComponent
							key="exchangePromotion"
							component={ExchangePromotion}
						/>
					)
				case 'benefitSelection':
					return (
						<ProgressComponent
							key="benefitSelector"
							component={BenefitSelector}
						/>
					)
				case 'uidInput':
					return <ProgressComponent key="uidInput" component={UidInput} />
				default:
					return null
			}
		case 4:
			return (
				<ProgressComponent
					key="tradingViewIdCheck"
					component={TradingViewIdCheck}
				/>
			)
		case 5:
			return (
				<ProgressComponent
					key="assetManagementSelector"
					component={AssetManagementSelector}
				/>
			)
		default:
			return null
	}
}
