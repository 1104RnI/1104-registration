import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

import Button from '../button/button.component'

type DiscordButtonProps = {
	id?: string
}

export default function DiscordButton(props: DiscordButtonProps) {
	const { id } = props

	const handleClick = (): void => {
		window.open('https://1104.kr', '_blank')
	}

	return (
		<Button
			appearance="neutral"
			hierarchy="primary"
			text="1104 R&I 공식 커뮤니티 참여하기"
			icon={<FontAwesomeIcon icon={faDiscord} color="white" size="lg" />}
			handleClick={handleClick}
			id={id}
		/>
	)
}
