import React from 'react'
import { Link } from 'react-router-dom'
import Dracula from '../../assets/img/dracula.svg'

import { CIndex } from '../components.index.js'

import { FooterContainer, ThemeText, ThemeSection } from './Footer.styles'

const Footer = () => {
	const {
		TComp: { P, H1 },
	} = CIndex

	return (
		<FooterContainer>
			<a
				href="https://draculatheme.com/"
				target="__blank"
				rel="noopener noreferrer"
			>
				<ThemeSection>
					<ThemeText>
						<P>Made using:</P>
						<H1>Dracula theme!</H1>
					</ThemeText>
					<img src={Dracula} alt="" />
				</ThemeSection>
			</a>
		</FooterContainer>
	)
}
export default Footer
