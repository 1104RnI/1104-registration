import { useEffect, useState, MouseEvent } from 'react'

import { NotionRenderer } from 'react-notion'
import 'react-notion/src/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import Button from '../button/button.component'
import Card from '../card/card.component'

import { NotionPageContainer } from './notion-page.style'

type NotionPageProps = {
	pageId: string
	handleCloseButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void
	description?: string
	bottomButtonText?: string
	handleBottomButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function NotionPage(props: NotionPageProps) {
	const {
		pageId,
		handleCloseButtonClick,
		description,
		handleBottomButtonClick,
		bottomButtonText,
	} = props
	const [response, setResponse] = useState<any>({})

	useEffect(() => {
		fetch(`https://notion-api.splitbee.io/v1/page/${pageId}`)
			.then((res) => res.json())
			.then((resJson) => {
				setResponse(resJson)
			})
	}, [pageId])

	return (
		<NotionPageContainer>
			<div id="body-container">
				<div id="top-bar">
					<div id="close-button-container">
						<Button
							type="button"
							appearance="accent"
							hierarchy="secondary"
							handleClick={handleCloseButtonClick}
							icon={<FontAwesomeIcon icon={faXmark} />}
							id="close-button"
						/>
					</div>
				</div>

				{description && description.length !== 0 ? (
					<Card id="description-card">
						<h4>{description}</h4>
					</Card>
				) : null}

				<div id="notion-page">
					<NotionRenderer blockMap={response} fullPage={true} />
				</div>
				{bottomButtonText && bottomButtonText.length !== 0 ? (
					<div id="bottom-bar">
						<Button
							type="button"
							appearance="neutral"
							hierarchy="primary"
							text={bottomButtonText}
							id="button"
							handleClick={handleBottomButtonClick}
						/>
					</div>
				) : null}
			</div>
		</NotionPageContainer>
	)
}
