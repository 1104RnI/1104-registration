import { FormEvent } from 'react'
import axios, { AxiosError } from 'axios'

import { useProgressStore } from '../store/progressStore'

type UseSubmitFormProps = {
	url: string
	params: object
	headers: object
	isValid: boolean
}

const useSubmitForm = (props: UseSubmitFormProps) => {
	const { url, params, headers, isValid } = props

	const updateRequestStatus = useProgressStore(
		(state) => state.updateRequestStatus,
	)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		updateRequestStatus('idle')

		if (isValid) {
			try {
				updateRequestStatus('loading')
				await axios.get(url, { params, headers })
				updateRequestStatus('success')
			} catch (error) {
				if (axios.isAxiosError(error)) {
					updateRequestStatus('error')
					if ((error as AxiosError).response?.status === 404) {
						console.error('데이터 처리 중 문제가 발생했습니다.')
					} else console.error('Error checking email: ', error)
				}
			}
		} else alert('Invalid data processing')
	}
	return handleSubmit
}

export default useSubmitForm
