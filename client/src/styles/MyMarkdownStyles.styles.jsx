import styled from 'styled-components'

import { device, cssIndex } from './css/utils.styles.js'

export const MyMarkdownStyles = styled.div`
	width: 100%;
	padding: 2.5rem 19vw;

	${device.laptopS} {
		padding: 2.5rem 15vw;
	}

	${device.laptopXS} {
		padding: 2.5rem 7vw;
	}

	${device.tabletLand} {
		padding: 2.5rem 3.5rem;
	}

	${device.tabletM} {
		padding: 2.5rem 2rem 2.5rem 1.7rem;
	}

	p {
		margin-left: 0.7rem;

		${device.tabletLand} {
			margin-left: 0;
		}
	}

	p + h2 {
		margin-top: 3.5rem;
	}

	p + h1 {
		margin-top: 4.5rem;
	}

	pre {
		margin-bottom: 4rem !important;
		width: 98%;

		${cssIndex.scrollBarStyles}
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
