import styled from 'styled-components'

export const ExchangePromotionContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 5rem;

	text-align: left;

	#lottie-shining-anim {
		position: absolute;
		top: 2vh;
		left: 50%;
		transform: translate(-50%, 0);
		width: 100%;
		max-width: 30rem;
		/* height: 100vh; */
		opacity: 0.5;
		z-index: -5;
	}

	h1 {
		line-height: 120%;

		span {
			font-size: 1.25rem;
			line-height: 100%;
		}
	}

	div#rows-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 3rem;

		div.body-rows {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			.card {
				p {
					font-size: 1.25rem;
					font-weight: 700;
					line-height: 150%;
				}

				span {
					font-size: 0.75rem;
					font-weight: 300;
					color: #666666;
					line-height: 150%;
				}
			}
		}
	}

	div#buttons-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
`
