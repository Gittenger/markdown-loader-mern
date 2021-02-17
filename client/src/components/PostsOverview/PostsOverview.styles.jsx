import styled from 'styled-components'

export const PostsOverviewContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-template-rows: 450px;
	grid-auto-rows: 450px;
	grid-gap: 4rem;

	& > div {
		background: ${({ theme: { colors } }) => colors.primaryDark};
		padding: 3rem;
		border-radius: 0.8rem;
	}

	a:visited,
	a:link {
		color: royalblue;
		text-decoration: underline;
	}

	.date {
		font-weight: 200;
		--scale: 0.6;
	}
	.excerpt {
		font-style: italic;
		font-weight: 200;
		--scale: 0.8;
	}
`
