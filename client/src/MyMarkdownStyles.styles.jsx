import styled, { css } from 'styled-components'

// import { device } from './styles/css/utils.styles.js'
import {
	PStyles,
	H1Styles,
} from './components/typography/typography.components.js'

const sharedStyles = css`
	p {
		margin-left: 0.7rem;
	}
`

export const MyMarkdownStyles = styled.div`
	${sharedStyles}

	padding: 2.5rem;

	p + h2 {
		margin-top: 2.5rem;
	}
`
