import styled from 'styled-components'

export const ExchangeRegistrationGuideContainer = styled.div`
	position: absolute;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	top: 0;
	left: 0;
	width: 100%;
	height: auto;

	background-color: white;
	text-align: left;

	padding: 4rem 1rem 4rem 1rem;

	z-index: 9999;

	div#body-container {
		width: 100%;
		max-width: 37.5rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;

		padding: 0;

		div#top-bar {
			width: 100%;
			position: fixed;
			top: 0;
			right: 0;

			display: flex;
			justify-content: center;

			z-index: 9999;

			div#close-button-container {
				width: 100%;
				max-width: 37.5rem;

				display: flex;
				justify-content: flex-end;

				#close-button {
					padding: 0.5rem 1.5rem;
					font-size: 1.75rem;
				}
			}
		}

		h4 {
			margin: 0 0.5rem;
			padding: 1rem 1rem;
			border-radius: 1rem;
			background-color: #f3f3f3;
		}

		div#notion-page {
			width: 100%;
			height: auto;

			background-color: white;
			text-align: left;
		}

		div#bottom-bar {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;

			display: flex;
			flex-direction: column;
			align-items: center;

			padding: 1rem 1.5rem 1.5rem 1.5rem;
			box-sizing: border-box;
			background-color: #ffffff;

			#button {
				width: 100%;
				max-width: 37.5rem;
				box-sizing: border-box;
			}
		}
	}
`
