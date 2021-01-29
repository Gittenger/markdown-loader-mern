import styled, { css } from 'styled-components'

// import { device } from './styles/css/utils.styles.js'
import {
	PStyles,
	H1Styles,
} from './components/typography/typography.components.js'

const sharedStyles = css`
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: ${({ theme: { colors } }) => colors.secondary};
	}
`

export const MyMarkdownStyles = styled.div`
	${sharedStyles}

	padding: 2.5rem;

	p {
		${PStyles}
	}
`
