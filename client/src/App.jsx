import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { themeDark, themeLight } from './styles/theme'
import GlobalStyles from './styles/global.styles.jsx'
import { CIndex } from './components/components.index.js'
import { AppContainer } from './App.styles.jsx'

function App() {
	const {
		PostsOverview,
		MarkdownPost,
		Footer,
		TComp: { P },
	} = CIndex

	const [theme, setTheme] = useState('dark')

	const changeTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	return (
		<ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
			<GlobalStyles />
			<AppContainer>
				<button onClick={changeTheme} style={{ marginBottom: '5rem' }}>
					CHANGE THEME
				</button>
				<Switch>
					<Route exact path="/" component={PostsOverview} />
					<Route path="/posts/:id" component={MarkdownPost} />
				</Switch>
			</AppContainer>
			<Footer />
		</ThemeProvider>
	)
}

export default App
