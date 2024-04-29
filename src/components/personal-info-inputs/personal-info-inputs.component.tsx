import { useState, ChangeEvent } from 'react'

import { useProgressStore } from '../../store/progressStore'
import { useUserDataStore } from '../../store/dataStore'
import useForwardProgress from '../../hooks/useForwardProgress'
import useSubmitForm from '../../hooks/useSubmitForm'

import Input from '../input/input.component'
import BirthSelector from '../birth-selector/birth-selector.component'
import Button from '../button/button.component'
import TextArea from '../text-area/text-area.component'
import WarningMessage from '../warning-message/warning-message.component'
import Toast from '../toast/toast.component'

import { PersonalInfoInputsContainer } from './personal-info-inputs.styles'

interface InputValidity {
	isNameValid: boolean
	isTelValid: boolean
}

export default function PersonalInfoInputs() {
	const [isValid, setIsValid] = useState<InputValidity>({
		isNameValid: false,
		isTelValid: false,
	})

	const email = useUserDataStore((state) => state.email)
	const personalInfo = useUserDataStore((state) => state.personalInfo)
	const updatePersonalInfo = useUserDataStore(
		(state) => state.updatePersonalInfo,
	)

	const requestStatus = useProgressStore((state) => state.requestStatus)
	const updateRequestStatus = useProgressStore(
		(state) => state.updateRequestStatus,
	)

	useForwardProgress()

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name

		if (inputName === 'name') {
			updatePersonalInfo(inputName, inputValue)
			setIsValid((prevState) => ({
				...prevState,
				isNameValid: validateInput(inputName, inputValue),
			}))
		} else if (inputName === 'tel') {
			const numericValue = inputValue.replace(/\D/g, '')
			const formattedValue = formatTelNumber(numericValue)

			updatePersonalInfo('tel', formattedValue)
			setIsValid((prevState) => ({
				...prevState,
				isTelValid: validateInput(inputName, formattedValue),
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

		if (type === 'name') {
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

	const isAllValid = (): boolean => {
		const birth = personalInfo.birth

		if (
			isValid.isNameValid &&
			isValid.isTelValid &&
			birth.month.length !== 0 &&
			birth.year.length !== 0
		) {
			return true
		} else return false
	}

	const handleSubmit = useSubmitForm({
		url: `${process.env.REACT_APP_MODIFY_URL}${email}`,
		params: {
			name: personalInfo.name,
			callnum: personalInfo.tel,
			birth: `${personalInfo.birth.year}-${personalInfo.birth.month}`,
		},
		headers: { 'X-Requested-With': 'XMLHttpRequest' },
		isValid: isAllValid(),
	})

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
						name="name"
						type="text"
						value={personalInfo.name}
						placeholder="4자 이내 본명을 입력해 주세요."
						isValid={personalInfo.name.length === 0 || isValid.isNameValid}
						handleChange={handleInputChange}
					/>
					<Input
						name="tel"
						type="tel"
						value={personalInfo.tel}
						placeholder="핸드폰 번호를 -없이 숫자만 입력해 주세요."
						isValid={personalInfo.tel.length === 0 || isValid.isTelValid}
						handleChange={handleInputChange}
					/>
					<BirthSelector />
				</div>
				<Button
					text="입력 완료"
					appearance="neutral"
					hierarchy="primary"
					disabled={!isAllValid()}
				/>
			</label>
			{requestStatus === 'error' ? (
				<Toast
					text="문제가 발생했습니다. 입력하신 개인 정보를 다시 한 번 확인해 주세요."
					duration={3000}
					onClose={() => updateRequestStatus('idle')}
				/>
			) : null}
		</PersonalInfoInputsContainer>
	)
}
