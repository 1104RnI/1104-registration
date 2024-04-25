import styled from 'styled-components'

export const FooterContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	padding: 1rem;
	gap: 0rem;

	color: #b6b6b6;

	z-index: -9999;

	p#privacy-text {
		font-size: 0.875rem;
		text-decoration: underline;

		cursor: pointer;
	}

	p#copyright {
		font-size: 0.75rem;
		font-weight: 300;

		span {
			font-weight: 700;
		}
	}
`
