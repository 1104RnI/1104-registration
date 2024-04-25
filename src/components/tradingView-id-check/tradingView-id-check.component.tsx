import { useState, ChangeEvent, FormEvent } from 'react'

import { useProgressStore, ProgressAtcion } from '../../store/progressStore'
import { useUserDataStore } from '../../store/dataStore'

import Input from '../input/input.component'
import Button from '../button/button.component'
import TextArea from '../text-area/text-area.component'
import WarningMessage from '../warning-message/warning-message.component'

import { TradingViewIdCheckContainer } from './tradingView-id-check.styles'

export default function TradingViewIdCheck() {
	const [isValid, setIsValid] = useState<boolean>(false)

	const tradingViewId = useUserDataStore((state) => state.tradingViewId)
	const updateUserData = useUserDataStore((state) => state.updateUserData)

	const forwardProgress = useProgressStore(
		(state: ProgressAtcion) => state.forwardProgress,
	)

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

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (isValid) {
			// Server Communication comes here later
			// ...
			// ...
			forwardProgress()
			console.log(`valid tradingView ID: ${tradingViewId}`)
		} else alert('Invalid TradingView ID')
	}

	return (
		<TradingViewIdCheckContainer onSubmit={handleSubmit}>
			<TextArea
				title="트레이딩뷰 ID 입력"
				text={[
					'5010 인디케이터 권한 설정을 위해 트레이딩뷰 ID를 입력해 주세요.',
				]}
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
					text="입력 완료"
					appearance="neutral"
					hierarchy="primary"
					disabled={!isValid}
				/>
			</label>
		</TradingViewIdCheckContainer>
	)
}
