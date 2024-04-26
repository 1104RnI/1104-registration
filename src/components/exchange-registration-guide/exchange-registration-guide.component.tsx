import React, { useEffect, useState, MouseEvent } from 'react'

import { NotionRenderer } from 'react-notion'
import 'react-notion/src/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { useProgressStore } from '../../store/progressStore'

import Button from '../button/button.component'

import { ExchangeRegistrationGuideContainer } from './exchange-registration-guide.styles'

type ExchangeRegistrationGuideProps = {
	handleClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function ExchangeRegistrationGuide(
	props: ExchangeRegistrationGuideProps,
) {
	const { handleClick } = props
	const [response, setResponse] = useState<any>({})

	const updateExchangeSelectStep = useProgressStore(
		(state) => state.updateExchangeSelectStep,
	)

	useEffect(() => {
		const NOTION_PAGE_ID = 'a4c12b8eca0b40ab9aebde2a398d31c2'
		fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
			.then((res) => res.json())
			.then((resJson) => {
				setResponse(resJson)
			})
	}, [])

	return (
		<ExchangeRegistrationGuideContainer>
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
				<h4>
					선물 거래를 시작하려면 먼저 해외 거래소부터 가입해야 합니다. 아래의
					가이드를 따라 해외 거래소 가입을 진행해 주세요.
				</h4>
				<div id="notion-page">
					<NotionRenderer blockMap={response} fullPage={true} />
				</div>
				<div id="bottom-bar">
					<Button
						type="button"
						appearance="neutral"
						hierarchy="primary"
						text="가이드에 따라 가입을 마쳤어요."
						id="button"
						handleClick={() => updateExchangeSelectStep('uidInput')}
					/>
				</div>
			</div>
		</ExchangeRegistrationGuideContainer>
	)
}
