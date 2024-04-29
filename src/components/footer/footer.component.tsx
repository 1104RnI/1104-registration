import { useState } from 'react'

import NotionPage from '../notion-page/notion-page.component'

import { FooterContainer } from './footer.styles'

export default function Footer() {
	const [isPrivacyClicked, setIsPrivacyClicked] = useState<boolean>(false)

	return (
		<FooterContainer>
			{isPrivacyClicked ? (
				<NotionPage
					pageId="7a2143659bd94d36ada33edfc594f1ef"
					handleCloseButtonClick={() => {
						setIsPrivacyClicked(false)
						window.scrollTo({ top: 0, behavior: 'auto' })
					}}
				/>
			) : null}
			<button
				id="privacy-button"
				onClick={() => {
					setIsPrivacyClicked(true)
					window.scrollTo({ top: 0, behavior: 'auto' })
					console.log('btn clicked')
				}}
			>
				개인정보 처리방침
			</button>
			<p id="copyright">
				<span>© Copyright 1104.</span> All rights Reserved
			</p>
		</FooterContainer>
	)
}
