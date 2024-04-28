import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

import { useUserDataStore } from '../../store/dataStore'
import { useProgressStore } from '../../store/progressStore'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import TextArea from '../text-area/text-area.component'
import Button from '../button/button.component'
import Input from '../input/input.component'
import RadioButton from '../radio-button/radio-button.component'
import WarningMessage from '../warning-message/warning-message.component'

import { AssetManagementSelectorContainer } from './asset-management-selector.styles'

export default function AssetManagementSelector() {
	const optionList = [
		{ title: '2,000만 원', value: '2000' },
		{ title: '1,000만 원', value: '1000' },
		{ title: '400만 원', value: '400' },
		{ title: '100만 원', value: '100' },
	]
	const [isValid, setIsValid] = useState<boolean>(false)
	const [formattedValue, setFormattedValue] = useState<string>('')
	const [isCutsomInputValid, setIsCutsomInputValid] = useState<boolean>(false)

	const assetManagement = useUserDataStore((state) => state.assetManagement)
	const updateUserData = useUserDataStore((state) => state.updateUserData)
	const forwardProgress = useProgressStore((state) => state.forwardProgress)

	useEffect(() => {
		const validtaAssetManagement = (): boolean => assetManagement.length !== 0
		setIsValid(validtaAssetManagement)
	}, [assetManagement])

	const handleInputRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name

		updateUserData(inputName, inputValue)
	}

	const formatNumber = (value: string): string => {
		const numericValue = value.replace(/[^0-9]/g, '')
		const length = numericValue.length

		if (length <= 3) {
			return numericValue
		} else if (length === 4) {
			return `${numericValue.slice(0, 1)},${numericValue.slice(1)}`
		} else {
			const billionDigits = numericValue.slice(0, -4)
			const millionDigits = numericValue.slice(-4)
			return `${billionDigits}억 ${millionDigits.slice(
				0,
				1,
			)},${millionDigits.slice(1)}`
		}
	}

	const isValidInput = (value: string): boolean => {
		const inputRegex = /^(200[1-9]|20[1-9]\d|2[1-9]\d{2}|[3-9]\d{3}|\d{5,})$/
		return inputRegex.test(value.replace(/[^0-9]/g, ''))
	}

	const updateCursorPosition = (
		inputElement: HTMLInputElement,
		position: number,
	) => {
		setTimeout(() => {
			inputElement.setSelectionRange(position, position)
		}, 0)
	}

	const handleInputTextChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name
		const sanitizedValue = inputValue.replace(/[^0-9]/g, '')
		const formattedValue = formatNumber(inputValue)
		const modifiedValue = `${formattedValue}만 원`

		parseInt(sanitizedValue) <= 2000
			? setIsCutsomInputValid(false)
			: setIsCutsomInputValid(true)

		setFormattedValue(modifiedValue)
		updateUserData(
			inputName,
			isValidInput(sanitizedValue) ? sanitizedValue : '',
		)
		const inputElement = e.target
		updateCursorPosition(inputElement, formattedValue.length)
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (isValid) {
			// Server Communication comes here later
			// ...
			// ...

			forwardProgress()
		} else alert('Invalid asset management info')
	}

	return (
		<AssetManagementSelectorContainer onSubmit={handleSubmit}>
			<TextArea
				title="맞춤형 자산설계 선택"
				text={['예상되는 초기 투자 자금의 규모를 선택해 주세요.']}
			/>

			<div id="buttons-container">
				<div id="input-container">
					{!isCutsomInputValid && !isValid ? (
						<WarningMessage text="직접 입력은 2,000만 원 보다 높게(예. 2,001 만 원 이상) 입력해 주세요." />
					) : null}
					<label id="custom-input-label">
						<Input
							name="assetManagement"
							type="text"
							value={formattedValue}
							placeholder="2,0000만 원 초과 직접 입력"
							isValid={isCutsomInputValid}
							handleChange={handleInputTextChange}
							handleFocus={handleInputTextChange}
						/>
						{parseInt(assetManagement) >= 2001 ? (
							<FontAwesomeIcon icon={faCircleCheck} id="icon" />
						) : null}
					</label>
					{optionList.map((item, index) => (
						<RadioButton
							key={index}
							name="assetManagement"
							text={item.title}
							value={item.value}
							handleChange={handleInputRadioChange}
							isChecked={assetManagement === item.value}
						/>
					))}
				</div>
				<Button
					text="선택 완료"
					appearance="neutral"
					hierarchy="primary"
					disabled={!isValid}
				/>
			</div>
		</AssetManagementSelectorContainer>
	)
}
