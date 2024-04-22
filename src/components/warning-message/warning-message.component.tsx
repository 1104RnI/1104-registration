import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

import { WarningMessageContainer } from './warning-message.styles'

type WarningMessageProps = {
	text: string
}

export default function WarningMessage(props: WarningMessageProps) {
	return (
		<WarningMessageContainer>
			<FontAwesomeIcon icon={faCircleExclamation} id="icon" />
			{props.text}
		</WarningMessageContainer>
	)
}
