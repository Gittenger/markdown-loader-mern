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
		TComp: { P, H1, H2, AuthorText },
	} = CIndex

	const [mdData, setMdData] = useState({
		content: '',
		title: 'Not loaded yet',
		date: 'July 20, 2010 00:10:11 GMT+00:00',
		excerpt: '',
	})

	const changeTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	const getData = () => {
		axios
			.get(`http://localhost:5000/doc?id=602a01da82d4c8b3759b7c31`)
			.then(res => {
				console.log(res)
				const data = res.data.data
				setMdData(data)
			})
	}

	const renderers = {
		paragraph: P,
		heading: props =>
			props.level === 1 ? (
				<H1 {...props} />
			) : props.level === 2 ? (
				<H2 {...props} />
			) : (
				React.createElement('h3', props, props.children)
			),
	}

	const { content, title, excerpt, date } = mdData

	return (
		<ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
			<GlobalStyles />
			<div style={{ height: '15rem' }}></div>
			<button onClick={changeTheme}>CHANGE THEME</button>
			<H1>{title}</H1>
			<AuthorText>{new Date(date).toDateString()}</AuthorText>
			<MyMarkdownStyles>
				<ReactMarkdown renderers={renderers} children={content} />
			</MyMarkdownStyles>
			<button onClick={getData}>Show markdown</button>
		</ThemeProvider>
	)
}

export default App
