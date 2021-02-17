import styled from 'styled-components'

export const FooterContainer = styled.footer`
	width: 100%;
	background: ${({ theme: { colors } }) => colors.primaryDark};
	padding: 4rem;
`
export const ThemeSection = styled.div`
	${({ theme: { css } }) => css.flexCenter};
	justify-content: flex-start;
	width: 45%;

	img {
		margin-left: 2rem;
		width: 30%;
	}
`

export const ThemeText = styled.div`
	${({ theme: { css } }) => css.flexCenterCol};
	align-items: flex-start;

	& > p,
	& > h1 {
		--scale: 0.7;
		margin: 0;
		display: inline-block;
	}
`
