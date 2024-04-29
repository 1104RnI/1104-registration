import { useState, ChangeEvent } from 'react'

import { useUserDataStore } from '../../store/dataStore'
import { useProgressStore } from '../../store/progressStore'
import useForwardProgress from '../../hooks/useForwardProgress'
import useSubmitForm from '../../hooks/useSubmitForm'

import TextArea from '../text-area/text-area.component'
import Input from '../input/input.component'
import Button from '../button/button.component'
import WarningMessage from '../warning-message/warning-message.component'
import Toast from '../toast/toast.component'

import { UidInputContainer } from './uid-input.styles'

export default function UidInput() {
	const [isValid, setIsValid] = useState<boolean>(false)

	const email = useUserDataStore((state) => state.email)
	const referral = useUserDataStore((state) => state.referral)
	const uid = useUserDataStore((state) => state.uid)
	const exchange = useUserDataStore((state) => state.exchange)
	const updateUserData = useUserDataStore((state) => state.updateUserData)

	const requestStatus = useProgressStore((state) => state.requestStatus)
	const updateRequestStatus = useProgressStore(
		(state) => state.updateRequestStatus,
	)

	useForwardProgress({ action: 'forwardProgress' })

	const handleUidChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name

		updateUserData(inputName, inputValue.replace(/[^0-9]/g, ''))
		setIsValid(validateUid(inputValue))
	}

	const handleSubmit = useSubmitForm({
		url: `${process.env.REACT_APP_MODIFY_URL}${email}`,
		params: { isreferral: referral, uid: uid, exchange: exchange },
		headers: { 'X-Requested-With': 'XMLHttpRequest' },
		isValid: isValid,
	})

	const validateUid = (uid: string): boolean => {
		const uidRegex = /^\d+$/
		return uidRegex.test(uid.replace(/[^0-9]/g, ''))
	}

	return (
		<UidInputContainer onSubmit={handleSubmit}>
			<TextArea
				title="거래소 UID 입력"
				text={['가입하신 거래소의 UID를 입력해 주세요.']}
			/>

			<label>
				<div id="input-container">
					{!isValid && uid.length !== 0 ? (
						<WarningMessage
							text="UID 형식이 올바르지 않습니다. UID 양식(숫자로만 구성)을
							확인해 주세요."
						/>
					) : null}
					<Input
						name="uid"
						type="text"
						value={uid}
						placeholder="숫자로 이루어진 UID를 입력해 주세요."
						isValid={uid.length === 0 || isValid}
						handleChange={handleUidChange}
					/>
				</div>
				<Button
					appearance="neutral"
					hierarchy="primary"
					text="입력 완료"
					disabled={!isValid}
				/>
			</label>
			{requestStatus === 'error' ? (
				<Toast
					text="오류가 발생했습니다. 입력하신 UID를 다시 확인해 주세요."
					duration={3000}
					onClose={() => updateRequestStatus('idle')}
				/>
			) : null}
		</UidInputContainer>
	)
}
