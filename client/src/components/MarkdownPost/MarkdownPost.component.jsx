import React, { useState, useEffect, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism } from 'react-syntax-highlighter'
import prismCustom from './prismCustom.js'
import axios from 'axios'

import { CIndex } from '../components.index.js'

import { MyMarkdownStyles } from './MarkdownPost.styles'

const MarkdownPost = ({ match: { params } }) => {
	const {
		TComp: { P, H1, H2, Code, AuthorText },
	} = CIndex

	const [mdData, setMdData] = useState({
		content: '',
		title: 'Loading',
		date: '',
		excerpt: '',
		_id: '',
	})

	const getData = () => {
		axios.get(`${process.env.REACT_APP_HOST}/doc?id=${params.id}`).then(res => {
			const { data } = res.data
			setMdData(data)
			localStorage.setItem('blogPostData', JSON.stringify(data))
		})
	}

	useEffect(() => {
		const localStorageData = localStorage.getItem('blogPostData')

		if (localStorageData) {
			const parsed = JSON.parse(localStorageData)

			if (parsed._id === params.id) {
				setMdData(parsed)
			} else {
				getData()
			}
		} else {
			getData()
		}
	}, [])

	const renderers = {
		paragraph: P,
		inlineCode: Code,
		link: props =>
			React.createElement(
				'a',
				{ target: '__blank', rel: 'noopener noreferrer', ...props },
				props.children
			),
		code: ({ language, value }) => (
			<Prism style={prismCustom} language={language} children={value} />
		),
		heading: props =>
			props.level === 1 ? (
				<H1 {...props} />
			) : props.level === 2 ? (
				<H2 {...props} />
			) : (
				React.createElement('h3', props, props.children)
			),
	}

	const { content, title, date } = mdData

	return (
		<>
			{date ? (
				<>
					{' '}
					<H1>{title}</H1>
					<AuthorText>{new Date(date).toDateString()}</AuthorText>
				</>
			) : (
				''
			)}
			<MyMarkdownStyles>
				<ReactMarkdown renderers={renderers} children={content} />
			</MyMarkdownStyles>
		</>
	)
}

export default MarkdownPost
