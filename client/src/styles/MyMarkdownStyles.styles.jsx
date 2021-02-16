import styled, { css } from 'styled-components'

// import { device } from './styles/css/utils.styles.js'

const sharedStyles = css`
	p {
		margin-left: 0.7rem;
	}
`

export const MyMarkdownStyles = styled.div`
	${sharedStyles}

	padding: 2.5rem 35rem;

	p + h2 {
		margin-top: 3.5rem;
	}

	p + h1 {
		margin-top: 4.5rem;
	}

	pre {
		margin-bottom: 4rem !important;
	}
`
