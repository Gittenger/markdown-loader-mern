import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themeDark, themeLight } from './styles/theme'
import GlobalStyles from './styles/global.styles.jsx'
import ReactMarkdown from 'react-markdown'

import axios from 'axios'

import CIndex from './components/components.index.js'
import { MyMarkdownStyles } from './MyMarkdownStyles.styles'

function App() {
	const [theme, setTheme] = useState('light')
	const {
		TComp: { P, H1 },
	} = CIndex

	const [mdData, setMdData] = useState('')

	const changeTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	const getData = () => {
		axios
			.get(`http://localhost:5000/doc?id=6017770643b446288033d79e`)
			.then(res => {
				console.log(res)
				const md = res.data.data.text
				setMdData(md)
			})
	}

	const renderers = {
		paragraph: P,
		heading: props => (props.level === 1 ? <H1 {...props} /> : 'h5'),
	}

	return (
		<ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
			<GlobalStyles />
			<div style={{ height: '15rem' }}></div>
			<button onClick={changeTheme}>CHANGE THEME</button>
			<P>Here is some sample text. Hit the button to change the theme.</P>
			<button onClick={getData}>Show markdown</button>
			<MyMarkdownStyles>
				<ReactMarkdown renderers={renderers} children={mdData} />
			</MyMarkdownStyles>
		</ThemeProvider>
	)
}

export default App
