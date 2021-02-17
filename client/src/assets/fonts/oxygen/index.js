import normal from './Oxygen-Regular.ttf'
import light from './Oxygen-Light.ttf'

export const oxygen = {
	name: 'Oxygen',
	format: 'truetype',
	styles: {
		normal: {
			weight: '400',
			style: 'normal',
			font: normal,
		},
		light: {
			weight: '200',
			style: 'normal',
			font: light,
		},
	},
}

export default oxygen
