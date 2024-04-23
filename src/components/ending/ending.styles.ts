import styled from 'styled-components'

export const EndingContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4rem;

	div#text-anim-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	#lottie-confetti-anim {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		opacity: 0.5;
		z-index: -5;
	}

	#lottie-congrats-anim {
		width: 50%;
		min-width: 12.5rem;
	}

	#discord-button {
		width: 100%;
		box-sizing: border-box;
	}
`
