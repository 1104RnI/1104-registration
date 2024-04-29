import { useState, ChangeEvent } from 'react'

import { useProgressStore } from '../../store/progressStore'
import { useUserDataStore } from '../../store/dataStore'
import useForwardProgress from '../../hooks/useForwardProgress'
import useSubmitForm from '../../hooks/useSubmitForm'

import Input from '../input/input.component'
import Button from '../button/button.component'
import TextArea from '../text-area/text-area.component'
import WarningMessage from '../warning-message/warning-message.component'
import BeginnerButton from '../beginner-button/beginner-button.component'
import NotionPage from '../notion-page/notion-page.component'
import Toast from '../toast/toast.component'

import { TradingViewIdCheckContainer } from './tradingView-id-check.styles'

type NotionPageContents = {
	pageId: string
	description: string
	bottomButtonText: string
}

export default function TradingViewIdCheck() {
	const [isValid, setIsValid] = useState<boolean>(false)
	const [notionPageContents, setNotionPageContents] =
		useState<NotionPageContents>({
			pageId: '',
			description: '',
			bottomButtonText: '',
		})
	const [isGuideClicked, setIsGuideClicked] = useState<boolean>(false)

	const email = useUserDataStore((state) => state.email)
	const tradingViewId = useUserDataStore((state) => state.tradingViewId)
	const updateUserData = useUserDataStore((state) => state.updateUserData)

	const requestStatus = useProgressStore((state) => state.requestStatus)
	const updateRequestStatus = useProgressStore(
		(state) => state.updateRequestStatus,
	)

	useForwardProgress({ action: 'forwardProgress' })

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name

		updateUserData(inputName, inputValue)
		setIsValid(validateInput(inputValue))
	}

	const validateInput = (value: string): boolean => {
		const idRegex = /^[a-zA-Z0-9_-]+$/
		return idRegex.test(value)
	}

	const toggleGuide = () => {
		setIsGuideClicked((state) => !state)
		window.scrollTo({ top: 0, behavior: 'auto' })
	}

	const handleSubmit = useSubmitForm({
		url: `${process.env.REACT_APP_MODIFY_URL}${email}`,
		params: { tvusername: tradingViewId },
		headers: { 'X-Requested-With': 'XMLHttpRequest' },
		isValid: isValid,
	})

	return (
		<TradingViewIdCheckContainer onSubmit={handleSubmit}>
			{isGuideClicked ? (
				<NotionPage
					pageId={notionPageContents.pageId}
					handleCloseButtonClick={toggleGuide}
					description={notionPageContents.description}
					bottomButtonText={notionPageContents.bottomButtonText}
					handleBottomButtonClick={toggleGuide}
				/>
			) : null}

			<TextArea
				title="트레이딩뷰 ID 입력"
				text={[
					'5010 인디케이터 권한 설정을 위해 트레이딩뷰 ID를 입력해 주세요.',
				]}
				link="트레이딩뷰 ID 확인하는 방법은 여기를 클릭해서 확인하세요."
				handleClick={() => {
					setNotionPageContents({
						pageId: 'cba97c976e714a01a618fd19f69da947',
						description: '',
						bottomButtonText: '가이드대로 확인했어요',
					})
					toggleGuide()
				}}
			/>
			<div id="button-label-container">
				<BeginnerButton
					text="트레이딩뷰 사용이 처음이세요? 저희가 도와드릴게요!"
					onClick={() => {
						setNotionPageContents({
							pageId: '8599c75fae1740f1a5161fbbfcacd831',
							description:
								'아래의 가이드를 따라 트레이딩뷰 가입을 진행해 주세요. 모두 완료되면 아래의 버튼을 눌러 트레이딩뷰 ID 입력을 마무리 하세요.',
							bottomButtonText: '가이드에 따라 가입을 마쳤어요.',
						})
						toggleGuide()
					}}
				/>
				<label>
					<div id="input-container">
						{!isValid && tradingViewId.length !== 0 ? (
							<WarningMessage
								text="ID 형식이 올바르지 않습니다. ID 양식(영문 및 숫자, -, _만 가능)을
							확인해 주세요."
							/>
						) : null}
						<Input
							name="tradingViewId"
							type="text"
							value={tradingViewId}
							placeholder="트레이딩뷰 ID를 입력해 주세요."
							isValid={tradingViewId.length === 0 || isValid}
							handleChange={handleInputChange}
						/>
					</div>
					<Button
						id="submit-button"
						text="입력 완료"
						appearance="neutral"
						hierarchy="primary"
						disabled={!isValid}
					/>
				</label>
			</div>
			{requestStatus === 'error' ? (
				<Toast
					text="오류가 발생했습니다. 입력하신 트레이딩뷰 ID를 다시 확인해 주세요."
					duration={3000}
					onClose={() => updateRequestStatus('idle')}
				/>
			) : null}
		</TradingViewIdCheckContainer>
	)
}
