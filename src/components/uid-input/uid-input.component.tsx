import { useState, ChangeEvent, FormEvent } from 'react'
// import axios from 'axios'

import { useUserDataStore } from '../../store/dataStore'
import { useProgressStore, ProgressAtcion } from '../../store/progressStore'

import TextArea from '../text-area/text-area.component'
import Input from '../input/input.component'
import Button from '../button/button.component'
import WarningMessage from '../warning-message/warning-message.component'
// import Toast from '../toast/toast.component'

import { UidInputContainer } from './uid-input.styles'

export default function UidInput() {
	const [isValid, setIsValid] = useState<boolean>(false)

	const uid = useUserDataStore((state) => state.uid)
	const updateUserData = useUserDataStore((state) => state.updateUserData)

	// const requestStatus = useProgressStore((state) => state.requestStatus)
	// const updateRequestStatus = useProgressStore(
	// 	(state) => state.updateRequestStatus,
	// )
	const forwardProgress = useProgressStore(
		(state: ProgressAtcion) => state.forwardProgress,
	)

	const handleUidChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name

		updateUserData(inputName, inputValue.replace(/[^0-9]/g, ''))
		setIsValid(validateUid(inputValue))
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// updateRequestStatus('idle')

		if (isValid) {
			// try {
			// 	updateRequestStatus('loading')

			// 	const response = await axios.get(process.env.REACT_APP_EMAILCHECK_URL, {
			//     params: { uid: uid },
			// 		headers: { 'X-Requested-With': 'XMLHttpRequest' },
			// 	})
			// 	if (response.status === 200) {
			forwardProgress()
			// 	}
			// 	updateRequestStatus('success')
			// } catch (error) {
			// 	if (axios.isAxiosError(error)) {
			// 		updateRequestStatus('error')

			// 		if (error.response && error.response.status === 404) {
			// 			console.error(
			// 				'UID를 다시 확인해 주세요.',
			// 			)
			// 		} else console.error('Error checking uid: ', error)
			// 	}
			// }
		} else alert('Invalid UID Text')
	}

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
			{/* {requestStatus === 'error' ? (
				<Toast
					text="오류가 발생했습니다. UID를 다시 확인해 주세요."
					duration={3000}
					onClose={() => updateRequestStatus('idle')}
				/>
			) : null} */}
		</UidInputContainer>
	)
}
