import { MouseEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faCircleInfo,
	faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons'

import { GetHelpContainer, ButtonType } from './get-help.styles'

type GetHelpProps = {
	buttonType: ButtonType
	text: string
	handleClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function GetHelp(props: GetHelpProps) {
	const { buttonType, text, handleClick } = props

	return (
		<GetHelpContainer $buttonType={buttonType} type="button">
			{buttonType === 'contactHelp' ? (
				<FontAwesomeIcon icon={faCircleInfo} id="icon" />
			) : null}
			{buttonType === 'guideHelp' ? (
				<FontAwesomeIcon icon={faCircleQuestion} id="icon" />
			) : null}
			<span onClick={handleClick}>{text}</span>
		</GetHelpContainer>
	)
}
