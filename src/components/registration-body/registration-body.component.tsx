import { useProgressStore, ProgressState } from '../../store/progressStore'

import EmailCheck from '../email-check/email-check.component'
import PersonalInfoInputs from '../personal-info-inputs/personal-info-inputs.component'
import ExchangeSelector from '../exchange-selector/exchage-selector.component'
import TradingViewIdCheck from '../tradingView-id-check/tradingView-id-check.component'
import AssetManagementSelector from '../asset-management-selector/asset-management-selector.component'

export default function RegistrationBody() {
	const progress = useProgressStore((state: ProgressState) => state.progress)

	switch (progress) {
		case 1:
			return <EmailCheck />
		case 2:
			return <PersonalInfoInputs />
		case 3:
			return <ExchangeSelector />
		case 4:
			return <TradingViewIdCheck />
		case 5:
			return <AssetManagementSelector />
		default:
			return null
	}
}
