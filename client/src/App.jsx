import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { themeDark, themeLight } from './styles/theme'
import GlobalStyles from './styles/global.styles.jsx'
import axios from 'axios'
import { CIndex } from './components/components.index.js'

function App() {
	const {
		MarkdownPost,
		TComp: { P },
	} = CIndex

	const [theme, setTheme] = useState('dark')
	const [posts, setPosts] = useState([])

	const changeTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	const getPosts = () => {
		axios.get(`http://localhost:5000/docs`).then(res => {
			console.log(res)
			setPosts(res.data.data)
		})
	}

	return (
		<ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
			<GlobalStyles />
			<div style={{ height: '15rem' }}></div>
			<button onClick={changeTheme}>CHANGE THEME</button>
			<button onClick={getPosts}>Get Posts</button>
			<div>
				{posts != []
					? posts.map(post => {
							const postId = post._id
							const { title, excerpt, date } = post
							return (
								<div key={postId}>
									<P>Post title: {title}</P>
									<P>Sample: {excerpt}</P>
									<P>Published: {new Date(date).toDateString()}</P>
									<P>ID: {postId}</P>
									<P>****************</P>
								</div>
							)
					  })
					: ''}
			</div>
		</ThemeProvider>
	)
}

export default App
