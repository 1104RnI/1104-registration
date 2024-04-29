import { useState } from 'react'

import PrivacyNotion from '../privacy-notion/privacy-notion.component'

import { FooterContainer } from './footer.styles'

export default function Footer() {
	const [isPrivacyClicked, setIsPrivacyClicked] = useState<boolean>(false)

	return (
		<FooterContainer>
			{isPrivacyClicked ? (
				<PrivacyNotion
					handleClick={() => {
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
