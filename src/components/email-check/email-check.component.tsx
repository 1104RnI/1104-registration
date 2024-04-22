import { useState, ChangeEvent, FormEvent } from 'react'

import Input from '../input/input.component'
import Button from '../button/button.component'
import TextArea from '../text-area/text-area.component'

import { EmailCheckContainer } from './email-check.styles'

export default function EmailCheck() {
	const [email, setEmail] = useState<string>('')
	const [isValid, setIsValid] = useState<boolean>(false)

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputEmail = e.target.value
		setEmail(inputEmail)
		setIsValid(validateEmail(inputEmail))
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		isValid ? console.log('valid email: ', email) : alert('Invalid Email Text')
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
				<Input
					type="email"
					value={email}
					placeholder="abc@gmail.com"
					handleChange={handleEmailChange}
				/>
				<Button text="Submit" appearance="neutral" hierarchy="primary" />
			</label>
		</EmailCheckContainer>
	)
}
