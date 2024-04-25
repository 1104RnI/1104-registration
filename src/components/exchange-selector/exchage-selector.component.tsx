import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

import { useUserDataStore, useExchangeDataStore } from '../../store/dataStore'
import { useProgressStore } from '../../store/progressStore'

import TextArea from '../text-area/text-area.component'
import Button from '../button/button.component'
import RadioButton from '../radio-button/radio-button.component'
import BeginnerButton from '../beginner-button/beginner-button.component'
import ExchangeRegistrationGuide from '../exchange-registration-guide/exchange-registration-guide.component'

import { ExchangeSelectorContainer } from './exchange-selector.styles'

export default function ExchangeSelector() {
	const [isValid, setIsValid] = useState<boolean>(false)
	const [isGuideClicked, setIsGuideClicked] = useState<boolean>(false)

	const exchange = useUserDataStore((state) => state.exchange)
	const updateUserDate = useUserDataStore((state) => state.updateUserData)
	const exchangeList = useExchangeDataStore((state) => state.exchangeList)
	const forwardProgress = useProgressStore((state) => state.forwardProgress)

	useEffect(() => {
		const validtaeExchange = (): boolean => exchange.length !== 0
		setIsValid(validtaeExchange)
	}, [exchange])

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name

		updateUserDate(inputName, inputValue)
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (isValid) {
			// Server Communication comes here later
			// ...
			// ...
			forwardProgress()
			console.log(`selected exchange: ${exchange}`)
		} else alert('Invalid exchange info')
	}

	return (
		<ExchangeSelectorContainer onSubmit={handleSubmit}>
			{isGuideClicked ? <ExchangeRegistrationGuide /> : null}

			<TextArea
				title="사용중인 거래소 선택"
				text={['현재 사용중이신 주 거래소를 선택해 주세요.']}
			/>

			<div id="buttons-container">
				<BeginnerButton
					text="잠깐, 선물 거래가 처음이신가요? 저희가 도와드릴게요!"
					onClick={() => {
						setIsGuideClicked(true)
						window.scrollTo({ top: 0, behavior: 'auto' })
					}}
				/>
				<div id="input-container">
					{exchangeList.map((item, index) => (
						<RadioButton
							key={index}
							name="exchange"
							text={item.koName}
							value={item.name}
							handleChange={handleInputChange}
							isChecked={exchange === item.name}
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
		</ExchangeSelectorContainer>
	)
}
