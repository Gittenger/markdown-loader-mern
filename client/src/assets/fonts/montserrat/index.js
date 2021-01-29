import normal from './Montserrat-Regular.ttf'
import lighter from './Montserrat-ExtraLight.ttf'

export const montserrat = {
	name: 'Montserrat',
	format: 'truetype',
	styles: {
		normal: {
			weight: '400',
			style: 'normal',
			font: normal,
		},
		lighter: {
			weight: '200',
			style: 'normal',
			font: lighter,
		},
	},
}

export default montserrat
