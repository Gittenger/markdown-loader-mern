import { css } from 'styled-components'

import fontsIndex from '../../assets/fonts/index'
const { yuseiMagic, oswald, montserrat } = fontsIndex

export const fontVars = {
	fontMain: css`
		--fontMain: '${montserrat.name}', sans-serif;
		--fontHeading: '${oswald.name}', sans-serif;
		--globalScale: 1;
	`,
}

export default fontVars
