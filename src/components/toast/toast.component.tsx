import { useEffect } from 'react'
import { createPortal } from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

import { ToastContainer } from './toast.styles'

type ToastProps = {
	text: string
	duration?: number
	onClose?: () => void
}

export default function Toast(props: ToastProps) {
	const { text, duration, onClose } = props

	useEffect(() => {
		const timer = setTimeout(() => {
			onClose?.()
		}, duration)

		return () => {
			clearTimeout(timer)
		}
	}, [duration, onClose])

	return createPortal(
		<ToastContainer>
			<div id="toast">
				<FontAwesomeIcon icon={faCircleExclamation} />
				<p>{text}</p>
				<span onClick={onClose}>닫기</span>
			</div>
		</ToastContainer>,
		document.body,
	)
}
