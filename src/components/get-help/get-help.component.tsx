import { MouseEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

import { GetHelpContainer } from './get-help.styles'

export default function GetHelp() {
	const handleClick = (e: MouseEvent<HTMLSpanElement>): void => {
		console.log('Get Help Clicked')
	}

	return (
		<GetHelpContainer>
			<FontAwesomeIcon icon={faCircleInfo} id="icon" />
			<span onClick={handleClick}>
				도움이 필요하시다면, 여기를 클릭해 주세요.
			</span>
		</GetHelpContainer>
	)
}
