import { css } from 'styled-components'

import fontsIndex from '../../assets/fonts/index'
const { oxygen, firaCode, cantarell } = fontsIndex

export const fontVars = {
	fontMain: css`
		--fontMain: '${oxygen.name}', sans-serif;
		--fontHeading: '${cantarell.name}', sans-serif;
		--fontCode: '${firaCode.name}', monospace;
		--globalScale: 0.9;
	`,
}

export default fontVars
