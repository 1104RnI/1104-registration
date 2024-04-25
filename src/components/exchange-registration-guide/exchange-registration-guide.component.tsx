import React, { useEffect, useState } from 'react'

import { NotionRenderer } from 'react-notion'
import 'react-notion/src/styles.css'

import { ExchangeRegistrationGuideContainer } from './exchange-registration-guide.styles'

export default function ExchangeRegistrationGuide() {
	const [response, setResponse] = useState<any>({})

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
			<div id="notion-page">
				<NotionRenderer blockMap={response} fullPage={true} />
			</div>
			<button id="button">테스트</button>
		</ExchangeRegistrationGuideContainer>
	)
}
