import { useProgressStore, RegistrationProgress } from '../../store/dataStore'

import EmailCheck from '../email-check/email-check.component'

export default function RegistrationBody() {
	const progress = useProgressStore(
		(state: RegistrationProgress) => state.progress,
	)

	switch (progress) {
		case 1:
			return <EmailCheck />
		default:
			return null
	}
}
