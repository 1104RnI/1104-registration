import styled from 'styled-components'

export const StartingContainer = styled.div`
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

	#lottie-welcome-anim {
		width: 50%;
		/* margin-right: 2rem; */
		min-width: 12.5rem;
	}

	div#button-container {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;

		#start-button {
			width: 100%;
			box-sizing: border-box;
		}

		span#disclaimer-text {
			font-size: 0.75rem;
			line-height: 150%;
		}
	}
`
