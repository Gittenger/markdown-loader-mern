import typography from './typography/typography'
import { cssIndex } from './css/utils.styles'

const darkColors = {
	primary: '#090A08',
	secondary: '#CFF2DC',
}

const lightColors = {
	primary: '#CFF2DC',
	secondary: '#090A08',
}

export const css = {
	...cssIndex,
}

const shared = {
	typography,
	css,
}

export const themeDark = {
	colors: darkColors,
	...shared,
}

export const themeLight = {
	colors: lightColors,
	...shared,
}
