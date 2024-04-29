import styled from 'styled-components'

export const FooterContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	gap: 0rem;

	color: #b6b6b6;

	button#privacy-button {
		all: unset;
		cursor: pointer;

		font-size: 0.875rem;
		/* text-decoration: underline; */

		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	p#copyright {
		font-size: 0.75rem;
		font-weight: 300;

		span {
			font-weight: 700;
		}
	}
`
