import React, { useState, useEffect, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism } from 'react-syntax-highlighter'
import prismCustom from './prismCustom.js'
import axios from 'axios'

import { CIndex } from '../components.index.js'

import { MyMarkdownStyles } from './MarkdownPost.styles'

const MarkdownPost = ({ postId }) => {
	const {
		TComp: { P, H1, H2, Code, AuthorText },
	} = CIndex

	const [mdData, setMdData] = useState({
		content: '',
		title: 'Not loaded yet',
		date: 'July 20, 2010 00:10:11 GMT+00:00',
		excerpt: '',
		_id: '',
	})

	useEffect(() => {
		axios.get(`http://localhost:5000/doc?id=${postId}`).then(res => {
			console.log(res)
			const data = res.data.data
			setMdData(data)
		})
	}, [mdData])

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

	const { content, title, excerpt, date, _id } = mdData

	return (
		<>
			<H1>{title}</H1>
			<P>{_id}</P>
			<P>{excerpt ? 'excerpt found' : ''}</P>
			<AuthorText>{new Date(date).toDateString()}</AuthorText>
			<MyMarkdownStyles>
				<ReactMarkdown renderers={renderers} children={content} />
			</MyMarkdownStyles>
		</>
	)
}

export default MarkdownPost
