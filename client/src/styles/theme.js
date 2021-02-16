import typography from './typography/typography'
import { cssIndex } from './css/utils.styles'

const darkColors = {
	primary: '#1e2029',
	secondary: '#f3e6e0',
}

const lightColors = {
	primary: '#f3e6e0',
	secondary: '#1e2029',
}

const codeColors = {
	background: '#282a36',
	// text: '#50fa7b',
	text: '#ff79c6',
}

export const css = {
	...cssIndex,
}

const shared = {
	typography,
	css,
	codeColors,
}

export const themeDark = {
	colors: darkColors,
	...shared,
}

export const themeLight = {
	colors: lightColors,
	...shared,
}
