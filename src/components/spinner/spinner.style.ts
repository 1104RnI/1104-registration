import styled from 'styled-components'

export const SpinnerContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;

	width: 100vw;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;

	z-index: 9999;

	background-color: #ffffff;
	pointer-events: auto;
`
