import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

import { useUserDataStore } from '../../store/dataStore'
import { useProgressStore } from '../../store/progressStore'

import TextArea from '../text-area/text-area.component'
import Button from '../button/button.component'
import Input from '../input/input.component'
import RadioButton from '../radio-button/radio-button.component'

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
		return Number(numericValue).toLocaleString()
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

		const formattedValue = formatNumber(inputValue)
		const modifiedValue = `${formattedValue}만 원`
		setFormattedValue(modifiedValue)

		const sanitizedValue = inputValue.replace(/[^0-9]/g, '')
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
					<Input
						name="assetManagement"
						type="text"
						value={formattedValue}
						placeholder="2,0000만 원 이상 직접 입력"
						handleChange={handleInputTextChange}
						handleFocus={handleInputTextChange}
					/>
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
