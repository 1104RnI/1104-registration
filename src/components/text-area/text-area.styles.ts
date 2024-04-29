import styled from 'styled-components'

export const TextAreaContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;

	h1 {
		margin-bottom: 1.5rem;
		line-height: 120%;
	}

	span {
		color: #666666;
		text-decoration: underline;
		cursor: pointer;
		font-size: 0.875rem;

		#icon {
			font-size: 0.825rem;
			padding-right: 0.25rem;
		}
	}
`
