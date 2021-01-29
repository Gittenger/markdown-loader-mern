import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themeDark, themeLight } from './styles/theme'
import GlobalStyles from './styles/global.styles.jsx'
import ReactMarkdown from 'react-markdown'

import axios from 'axios'

import CIndex from './components/components.index.js'

function App() {
	const [theme, setTheme] = useState('light')
	const {
		TComp: { P },
	} = CIndex

	const [mdData, setMdData] = useState('')

	const changeTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	const getData = () => {
		axios.get('http://localhost:5000/doc?id=md1').then(res => {
			console.log(res)
			const md = res.data.data
			setMdData(md)
		})
	}
	return (
		<ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
			<GlobalStyles />
			<div style={{ height: '15rem' }}></div>
			<button onClick={changeTheme}>CHANGE THEME</button>
			<P>Here is some sample text. Hit the button to change the theme.</P>
			<button onClick={getData}>Show markdown</button>
			<ReactMarkdown children={mdData} />
		</ThemeProvider>
	)
}

export default App
