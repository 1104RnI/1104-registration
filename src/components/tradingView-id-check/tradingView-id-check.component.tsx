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
import TradingViewRegistrationGuide from '../tradingView-registration-guide/tradingView-registration-guide.component'
import Toast from '../toast/toast.component'

import { TradingViewIdCheckContainer } from './tradingView-id-check.styles'

export default function TradingViewIdCheck() {
	const [isValid, setIsValid] = useState<boolean>(false)
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

	const handleSubmit = useSubmitForm({
		url: `${process.env.REACT_APP_MODIFY_URL}${email}`,
		params: { tvusername: tradingViewId },
		headers: { 'X-Requested-With': 'XMLHttpRequest' },
		isValid: isValid,
	})

	return (
		<TradingViewIdCheckContainer onSubmit={handleSubmit}>
			{isGuideClicked ? (
				<TradingViewRegistrationGuide
					handleClick={() => {
						setIsGuideClicked(false)
						window.scrollTo({ top: 0, behavior: 'auto' })
					}}
				/>
			) : null}

			<TextArea
				title="트레이딩뷰 ID 입력"
				text={[
					'5010 인디케이터 권한 설정을 위해 트레이딩뷰 ID를 입력해 주세요.',
				]}
			/>
			<label>
				<BeginnerButton
					text="트레이딩뷰 사용이 처음이세요? 저희가 도와드릴게요!"
					onClick={() => {
						setIsGuideClicked(true)
						window.scrollTo({ top: 0, behavior: 'auto' })
					}}
				/>
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
					text="입력 완료"
					appearance="neutral"
					hierarchy="primary"
					disabled={!isValid}
				/>
			</label>
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
