import styled, { css } from 'styled-components'

import { device } from './css/utils.styles.js'

const sharedStyles = css`
	p {
		margin-left: 0.7rem;
	}
`

export const MyMarkdownStyles = styled.div`
	${sharedStyles}

	padding: 2.5rem 35rem;

	${device.tabletLand} {
		padding: 0;
	}

	p + h2 {
		margin-top: 3.5rem;
	}

	p + h1 {
		margin-top: 4.5rem;
	}

	pre {
		margin-bottom: 4rem !important;
	}

	a:link,
	a:visited {
		color: dodgerblue;
		text-decoration: underline;
		transition: color 0.3s;

		&:hover {
			color: midnightblue;
		}
	}
`
