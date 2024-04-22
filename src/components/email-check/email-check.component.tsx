import { useState, ChangeEvent, FormEvent } from 'react'

import { useProgressStore, RegistrationProgress } from '../../store/dataStore'

import Input from '../input/input.component'
import Button from '../button/button.component'
import TextArea from '../text-area/text-area.component'
import WarningMessage from '../warning-message/warning-message.component'

import { EmailCheckContainer } from './email-check.styles'

export default function EmailCheck() {
	const [email, setEmail] = useState<string>('')
	const [isValid, setIsValid] = useState<boolean>(false)
	const forwardProgress = useProgressStore(
		(state: RegistrationProgress) => state.forwardProgress,
	)

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputEmail = e.target.value
		setEmail(inputEmail)
		setIsValid(validateEmail(inputEmail))
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (isValid) {
			// Server Communication comes here later
			forwardProgress()
			console.log('valid email: ', email)
		} else {
			alert('Invalid Email Text')
		}
	}

	const validateEmail = (email: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

	return (
		<EmailCheckContainer onSubmit={handleSubmit}>
			<TextArea
				title="가입 이메일 확인"
				text={[
					'1104.kr 웹사이트에서 회원가입에 사용한 이메일을 입력해 주세요.',
				]}
			/>

			<label>
				<div id="input-container">
					{!isValid && email.length !== 0 ? (
						<WarningMessage
							text="이메일 형식이 올바르지 않습니다. 이메일 양식(abc@email.com)을
							확인해 주세요."
						/>
					) : null}
					<Input
						type="email"
						value={email}
						placeholder="abc@gmail.com"
						isValid={email.length === 0 || isValid}
						handleChange={handleEmailChange}
					/>
				</div>
				<Button
					text="입력 완료"
					appearance="neutral"
					hierarchy="primary"
					disabled={!isValid}
				/>
			</label>
		</EmailCheckContainer>
	)
}
