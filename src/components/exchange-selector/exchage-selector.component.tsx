import { useState, useEffect, ChangeEvent } from 'react'

import { useUserDataStore, useExchangeDataStore } from '../../store/dataStore'
import { useProgressStore } from '../../store/progressStore'
import useForwardProgress from '../../hooks/useForwardProgress'
import useSubmitForm from '../../hooks/useSubmitForm'

import TextArea from '../text-area/text-area.component'
import Button from '../button/button.component'
import RadioButton from '../radio-button/radio-button.component'
import BeginnerButton from '../beginner-button/beginner-button.component'
import NotionPage from '../notion-page/notion-page.component'
import Toast from '../toast/toast.component'

import { ExchangeSelectorContainer } from './exchange-selector.styles'

export default function ExchangeSelector() {
	const [isValid, setIsValid] = useState<boolean>(false)
	const [isGuideClicked, setIsGuideClicked] = useState<boolean>(false)

	const email = useUserDataStore((state) => state.email)
	const exchange = useUserDataStore((state) => state.exchange)
	const beginner = useUserDataStore((state) => state.beginner)
	const updateUserDate = useUserDataStore((state) => state.updateUserData)
	const exchangeList = useExchangeDataStore((state) => state.exchangeList)
	const defaultExchange = useExchangeDataStore((state) => state.defaultExchange)
	const setUserData = useUserDataStore((state) => state.setUserData)

	const requestStatus = useProgressStore((state) => state.requestStatus)
	const updateRequestStatus = useProgressStore(
		(state) => state.updateRequestStatus,
	)
	const updateExchangeSelectStep = useProgressStore(
		(state) => state.updateExchangeSelectStep,
	)

	useEffect(() => {
		const validtaeExchange = (): boolean => exchange.length !== 0
		setIsValid(validtaeExchange)
	}, [exchange])

	useForwardProgress({
		action: 'updateExchangeSelectStep',
		step: 'afterSelection',
	})

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name

		updateUserDate(inputName, inputValue)
	}

	const handleSubmit = useSubmitForm({
		url: `${process.env.REACT_APP_MODIFY_URL}${email}`,
		params: { beginner: beginner, exchange: exchange },
		headers: { 'X-Requested-With': 'XMLHttpRequest' },
		isValid: isValid,
	})

	return (
		<ExchangeSelectorContainer onSubmit={handleSubmit}>
			{isGuideClicked ? (
				<NotionPage
					pageId="a4c12b8eca0b40ab9aebde2a398d31c2"
					handleCloseButtonClick={() => {
						setIsGuideClicked(false)
						window.scrollTo({ top: 0, behavior: 'auto' })
					}}
					description="선물 거래를 시작하려면 먼저 해외 거래소부터 가입해야 합니다. 아래의
						가이드를 따라 해외 거래소 가입을 진행해 주세요."
					bottomButtonText="가이드에 따라 가입을 마쳤어요."
					handleBottomButtonClick={() => {
						updateExchangeSelectStep('uidInput')
						setUserData({
							referral: true,
							beginner: true,
							exchange: defaultExchange,
						})
					}}
				/>
			) : null}

			<TextArea
				title="사용중인 주거래소 선택"
				text={['현재 사용중이신 주거래소를 선택해 주세요.']}
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
			{requestStatus === 'error' ? (
				<Toast
					text="문제가 발생했습니다. 선택하신 거래소 정보를 다시 한 번 확인해 주세요."
					duration={3000}
					onClose={() => updateRequestStatus('idle')}
				/>
			) : null}
		</ExchangeSelectorContainer>
	)
}
