import React, { useEffect, useState, MouseEvent } from 'react'

import { NotionRenderer } from 'react-notion'
import 'react-notion/src/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import Button from '../button/button.component'
import Card from '../card/card.component'

import { TradingViewRegistrationGuideContainer } from './tradingView-registration-guide'

type TradingViewRegistrationGuideProps = {
	handleClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export default function TradingViewRegistrationGuide(
	props: TradingViewRegistrationGuideProps,
) {
	const { handleClick } = props
	const [response, setResponse] = useState<any>({})

	useEffect(() => {
		const NOTION_PAGE_ID = '8599c75fae1740f1a5161fbbfcacd831'
		fetch(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
			.then((res) => res.json())
			.then((resJson) => {
				setResponse(resJson)
			})
	}, [])

	return (
		<TradingViewRegistrationGuideContainer>
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
				<Card>
					<h4>
						아래의 가이드를 따라 트레이딩뷰 가입을 진행해 주세요. 모두 완료되면
						아래의 버튼을 눌러 트레이딩뷰 ID 입력을 마무리 하세요.
					</h4>
				</Card>
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
						handleClick={handleClick}
					/>
				</div>
			</div>
		</TradingViewRegistrationGuideContainer>
	)
}
