import { useEffect, useState, MouseEvent } from 'react'

import { NotionRenderer } from 'react-notion'
import 'react-notion/src/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import Button from '../button/button.component'

import { PrivacyNotionContainer } from './privacy-notion.styles'

type PrivacyNotionProps = {
	handleClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function PrivacyNotion(props: PrivacyNotionProps) {
	const { handleClick } = props
	const [response, setResponse] = useState<any>({})

	useEffect(() => {
		const NOTION_PAGE_ID = '7a2143659bd94d36ada33edfc594f1ef'
		fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
			.then((res) => res.json())
			.then((resJson) => {
				setResponse(resJson)
			})
	}, [])

	return (
		<PrivacyNotionContainer>
			<div id="body-container">
				<div id="top-bar">
					<div id="close-button-container">
						<Button
							type="button"
							appearance="accent"
							hierarchy="secondary"
							handleClick={handleClick}
							icon={<FontAwesomeIcon icon={faXmark} />}
							id="close-button"
						/>
					</div>
				</div>
				<div id="notion-page">
					<NotionRenderer blockMap={response} fullPage={true} />
				</div>
			</div>
		</PrivacyNotionContainer>
	)
}
