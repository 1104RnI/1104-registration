import { useState, ChangeEvent, FormEvent } from 'react'

import { useProgressStore, RegistrationProgress } from '../../store/dataStore'

import Input from '../input/input.component'
import YearSelector from '../year-selector/year-selector.component'
import Button from '../button/button.component'
import TextArea from '../text-area/text-area.component'
import WarningMessage from '../warning-message/warning-message.component'

import { PersonalInfoInputsContainer } from './personal-info-inputs.styles'

type PersonalInfo = {
	name: string
	tel: string
}

type InputValidity = {
	isNameValid: boolean
	isTelValid: boolean
}

export default function PersonalInfoInputs() {
	const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
		name: '',
		tel: '',
	})
	const [isValid, setIsValid] = useState<InputValidity>({
		isNameValid: false,
		isTelValid: false,
	})

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputType = e.target.type

		if (inputType === 'text') {
			setPersonalInfo((prevState) => ({ ...prevState, name: inputValue }))
			setIsValid((prevState) => ({
				...prevState,
				isNameValid: validateInput(inputType, inputValue),
			}))
		} else if (inputType === 'tel') {
			const numericValue = inputValue.replace(/\D/g, '')
			const formattedValue = formatTelNumber(numericValue)

			setPersonalInfo((prevState) => ({ ...prevState, tel: formattedValue }))
			setIsValid((prevState) => ({
				...prevState,
				isTelValid: validateInput(inputType, formattedValue),
			}))
		} else console.log('input type error')
	}

	const formatTelNumber = (numericNumber: string) => {
		if (numericNumber.length <= 3) {
			return numericNumber
		} else if (numericNumber.length <= 7) {
			return `${numericNumber.slice(0, 3)}-${numericNumber.slice(3)}`
		} else {
			return `${numericNumber.slice(0, 3)}-${numericNumber.slice(
				3,
				7,
			)}-${numericNumber.slice(7, 11)}`
		}
	}

	const validateInput = (type: string, value: string): boolean => {
		const nameRegex = /^[가-힣]{2,4}$/
		const telRegex = /^01[0-9]-\d{4}-\d{4}$/

		if (type === 'text') {
			return nameRegex.test(value)
		} else if (type === 'tel') {
			return telRegex.test(value)
		} else return false
	}

	const isWarning = (): boolean => {
		if (!isValid.isNameValid && personalInfo.name.length !== 0) {
			return true
		} else if (!isValid.isTelValid && personalInfo.tel.length !== 0) {
			return true
		} else return false
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log(personalInfo)
	}

	return (
		<PersonalInfoInputsContainer onSubmit={handleSubmit}>
			<TextArea
				title="개인정보 입력"
				text={[
					'이름 및 연락처와 생년월을 입력해 주세요.',
					'입력하신 개인 정보는 본인 확인 용도로만 사용되며, 당사가 아닌 제 3자에게 제공되지 않습니다.',
				]}
			></TextArea>

			<label>
				<div id="input-container">
					{isWarning() ? (
						<WarningMessage text="입력하신 이름, 또는 핸드폰 번호가 올바르지 않습니다." />
					) : null}
					<Input
						type="text"
						value={personalInfo.name}
						placeholder="4자 이내 본명을 입력해 주세요."
						isValid={personalInfo.name.length === 0 || isValid.isNameValid}
						handleChange={handleInputChange}
					/>
					<Input
						type="tel"
						value={personalInfo.tel}
						placeholder="핸드폰 번호를 -없이 숫자만 입력해 주세요."
						isValid={personalInfo.tel.length === 0 || isValid.isTelValid}
						handleChange={handleInputChange}
					/>
					<YearSelector />
				</div>
				<Button
					text="입력 완료"
					appearance="neutral"
					hierarchy="primary"
					disabled={!isValid.isNameValid || !isValid.isTelValid}
				/>
			</label>
		</PersonalInfoInputsContainer>
	)
}
