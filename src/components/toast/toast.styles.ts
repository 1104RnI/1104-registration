import styled from 'styled-components'

export const ToastContainer = styled.div`
	position: fixed;
	width: 100%;
	max-width: 37.5rem;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 9999;
	padding: 1.5rem;

	div#toast {
		width: auto;
		display: flex;
		align-items: center;
		gap: 0.75rem;

		background-color: #333;
		padding: 1.25rem 1.25rem;
		border-radius: 0.5rem;
		box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);

		color: #fff;

		p {
			width: 100%;
		}

		span {
			text-decoration: underline;
			cursor: pointer;
		}
	}
`
