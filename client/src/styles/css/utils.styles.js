import { css } from "styled-components";

// MEDIA QUERIES
export const sizes = {
	mobileS: "375px",
	mobileM: "500px",
	tabletS: "650px",
	tabletM: "800px",
	tabletL: "870px",
	tabletLand: "940px",
	laptopXS: "1050px",
	laptopS: "1190px",
	laptopM: "1350px",
	laptopL: "1450px",
	desktop: "1600px",
	desktopL: "1900px",
};

const {
	mobileS,
	mobileM,
	tabletS,
	tabletM,
	tabletL,
	tabletLand,
	laptopXS,
	laptopS,
	laptopM,
	laptopL,
	desktop,
	desktopL,
} = sizes;

export const device = {
	mobileS: `@media only screen and (max-width: ${mobileS})`,
	mobileM: `@media only screen and (max-width: ${mobileM})`,
	tabletS: `@media only screen and (max-width: ${tabletS})`,
	tabletM: `@media only screen and (max-width: ${tabletM})`,
	tabletL: `@media only screen and (max-width: ${tabletL})`,
	tabletLand: `@media only screen and (max-width: ${tabletLand})`,
	laptopXS: `@media only screen and (max-width: ${laptopXS})`,
	laptopS: `@media only screen and (max-width: ${laptopS})`,
	laptopM: `@media only screen and (max-width: ${laptopM})`,
	laptopL: `@media only screen and (max-width: ${laptopL})`,
	desktop: `@media only screen and (max-width: ${desktop})`,
	desktopL: `@media only screen and (max-width: ${desktopL})`,
};

export const deviceMin = {
	minMobileS: `@media only screen and (min-width: ${mobileS})`,
	minMobileM: `@media only screen and (min-width: ${mobileM})`,
	minTabletS: `@media only screen and (min-width: ${tabletS})`,
	minTabletM: `@media only screen and (min-width: ${tabletM})`,
	minTabletL: `@media only screen and (min-width: ${tabletL})`,
	minTabletLand: `@media only screen and (min-width: ${tabletLand})`,
	minLaptopXS: `@media only screen and (min-width: ${laptopXS})`,
	minLaptopS: `@media only screen and (min-width: ${laptopS})`,
	minLaptopM: `@media only screen and (min-width: ${laptopM})`,
	minLaptopL: `@media only screen and (min-width: ${laptopL})`,
	minDesktop: `@media only screen and (min-width: ${desktop})`,
	minDesktopL: `@media only screen and (min-width: ${desktopL})`,
};

export const cssIndex = {
	flexCenter: css`
		display: flex;
		justify-content: center;
		align-items: center;
	`,
	flexCenterCol: css`
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	`,

	scrollBarStyles: css`
		&::-webkit-scrollbar-track {
			-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6);
			background-color: #cccccc;
		}

		&::-webkit-scrollbar {
			width: 10px;
			background-color: #f5f5f5;
		}

		&::-webkit-scrollbar-thumb {
			background-color: #fff;
			background-image: -webkit-linear-gradient(
				90deg,
				rgba(0, 0, 0, 1) 0%,
				rgba(0, 0, 0, 1) 25%,
				transparent 100%,
				rgba(0, 0, 0, 1) 75%,
				transparent
			);
		}
	`,
};

const utils = {
	sizes,
	device,
	deviceMin,
	cssIndex,
};

export default utils;
