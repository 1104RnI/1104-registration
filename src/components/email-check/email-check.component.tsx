import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import axios from 'axios'

import { useUserDataStore } from '../../store/dataStore'
import { useProgressStore, ProgressAtcion } from '../../store/progressStore'

import Input from '../input/input.component'
import Button from '../button/button.component'
import TextArea from '../text-area/text-area.component'
import WarningMessage from '../warning-message/warning-message.component'

import { EmailCheckContainer } from './email-check.styles'

interface ResponseData {
	result: string
	returnMessage: string
}

export default function EmailCheck() {
	const [isValid, setIsValid] = useState<boolean>(false)
	const email = useUserDataStore((state) => state.email)
	const updateUserData = useUserDataStore((state) => state.updateUserData)

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'auto' })
	}, [])

	const forwardProgress = useProgressStore(
		(state: ProgressAtcion) => state.forwardProgress,
	)

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputEmail = e.target.value
		const inputName = e.target.name

		updateUserData(inputName, inputEmail)
		setIsValid(validateEmail(inputEmail))
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (isValid) {
			try {
				const response = await axios.get<ResponseData>(
					process.env.REACT_APP_EMAILCHECK_URL,
					{
						params: { email: email },
						headers: { 'X-Requested-With': 'XMLHttpRequest' },
					},
				)
				if (response.data.result === 'success') {
					console.log('등록된 이메일이 확인되었습니다.')
					forwardProgress()
				}
			} catch (error) {
				if (axios.isAxiosError(error)) {
					if (error.response && error.response.status === 404) {
						console.error(
							'등록되지 않은 이메일 입니다. 이메일을 다시 확인해 주세요.',
						)
					} else console.error('Error checking email: ', error)
				}
			}
		} else alert('Invalid Email Text')
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
					'가입 여부 확인을 위해 1104.kr 웹사이트에서 회원가입에 사용한 이메일을 입력해 주세요.',
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
						name="email"
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
