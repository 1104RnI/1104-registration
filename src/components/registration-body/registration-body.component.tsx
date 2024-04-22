import { useProgressStore, ProgressState } from '../../store/progressStore'

import EmailCheck from '../email-check/email-check.component'
import PersonalInfoInputs from '../personal-info-inputs/personal-info-inputs.component'
import TradingViewIdCheck from '../tradingView-id-check/tradingView-id-check.component'

export default function RegistrationBody() {
	const progress = useProgressStore((state: ProgressState) => state.progress)

	switch (progress) {
		case 1:
			return <EmailCheck />
		case 2:
			return <PersonalInfoInputs />
		case 3:
			return <TradingViewIdCheck />
		default:
			return null
	}
}
