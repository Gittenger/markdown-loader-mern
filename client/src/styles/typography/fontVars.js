import { css } from 'styled-components'

import fontsIndex from '../../assets/fonts/index'
const { oxygen, firaCode, cantarell, yuseiMagic } = fontsIndex

export const fontVars = {
	fontMain: css`
		--fontMain: '${oxygen.name}', sans-serif;
		--fontSecondary: '${yuseiMagic.name}', sans-serif;
		--fontHeading: '${cantarell.name}', sans-serif;
		--fontCode: '${firaCode.name}', monospace;
		--globalScale: 0.9;
	`,
}

export default fontVars
