import { useProgressStore, RegistrationProgress } from '../../store/dataStore'

import EmailCheck from '../email-check/email-check.component'
import PersonalInfoInputs from '../personal-info-inputs/personal-info-inputs.component'

export default function RegistrationBody() {
	const progress = useProgressStore(
		(state: RegistrationProgress) => state.progress,
	)

	switch (progress) {
		case 1:
			return <EmailCheck />
		case 2:
			return <PersonalInfoInputs />
		default:
			return null
	}
}
