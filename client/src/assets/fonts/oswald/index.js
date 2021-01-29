import normal from "./Oswald-Regular.ttf";
import light from "./Oswald-Light.ttf";
import lighter from "./Oswald-ExtraLight.ttf";
import semibold from "./Oswald-SemiBold.ttf";
import bold from "./Oswald-Bold.ttf";

export const oswald = {
	name: "Oswald",
	format: "truetype",
	styles: {
		normal: {
			weight: "400",
			style: "normal",
			font: normal,
		},
		semibold: {
			weight: "600",
			style: "normal",
			font: semibold,
		},
		bold: {
			weight: "700",
			style: "normal",
			font: bold,
		},
		light: {
			weight: "300",
			style: "normal",
			font: light,
		},
		lighter: {
			weight: "200",
			style: "normal",
			font: lighter,
		},
	},
};

export default oswald;
