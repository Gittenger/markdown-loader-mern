import styled, { css } from 'styled-components'
import { device } from '../../styles/css/utils.styles'

// MAIN TYPOGRAPHY STYLES
// set globalScale in fontVars.js
export const P = styled.p`
	font-family: var(--fontMain);
	font-weight: 400;
	letter-spacing: 0.07em;
	margin-bottom: 0.9rem;
	color: ${({ theme: { colors } }) => colors.secondary};
	transition: color 0.3s;

	--scale: 1;
	font-size: calc((var(--scale) * 2.7rem) * var(--globalScale));
	line-height: 1.6;

	${device.tabletLand} {
		font-size: calc((var(--scale) * 2.2rem) * var(--globalScale));
		letter-spacing: 0.05em;
	}
	${device.tabletS} {
		font-size: calc((var(--scale) * 1.8rem) * var(--globalScale));
		line-height: 1.8;
	}
	${device.mobileM} {
		font-size: calc((var(--scale) * 1.7rem) * var(--globalScale));
		line-height: 1.7;
	}
	${device.mobileS} {
		font-size: calc((var(--scale) * 1.5rem) * var(--globalScale));
		line-height: 1.6;
	}
`

export const H1 = styled.h1`
	font-family: var(--fontHeading);
	letter-spacing: 0.09em;
	white-space: nowrap;
	color: ${({ theme: { colors } }) => colors.secondary};
	transition: color 0.3s;

	--scale: 1;
	font-size: calc((var(--scale) * 3.8rem) * var(--globalScale));
	margin-bottom: 1.4rem;

	${device.tabletLand} {
		font-size: calc((var(--scale) * 3rem) * var(--globalScale));
		letter-spacing: 0.07em;
		margin-bottom: 1.3rem;
	}
	${device.tabletS} {
		margin-bottom: 1.2rem;
	}
	${device.mobileM} {
		font-size: calc((var(--scale) * 2.6rem) * var(--globalScale));
		margin-bottom: 0.9rem;
	}
	${device.mobileS} {
		font-size: calc((var(--scale) * 2.2rem) * var(--globalScale));
		margin-bottom: 0.5rem;
	}
`

// EXTENDED TYPOGRAPHY STYLES

export const AuthorText = styled(P)`
	font-weight: 200;
	--scale: 0.8;

	margin-bottom: 1.4rem;

	${device.tabletLand} {
		margin-bottom: 1.3rem;
	}
	${device.tabletS} {
		margin-bottom: 1.2rem;
	}
	${device.mobileM} {
		margin-bottom: 0.9rem;
	}
	${device.mobileS} {
		margin-bottom: 0.5rem;
	}
`

export const TComp = {
	P,
	H1,
	AuthorText,
}

export default TComp
