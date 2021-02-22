import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { CIndex } from '../components.index.js'

import { PostsOverviewContainer } from './PostsOverview.styles'

const PostsOverview = () => {
	const {
		TComp: { P },
	} = CIndex

	const [posts, setPosts] = useState([])

	useEffect(() => {
		const localStorageData = localStorage.getItem('postsOverview')

		if (localStorageData) {
			setPosts(JSON.parse(localStorageData))
		} else {
			axios.get(`${process.env.REACT_APP_HOST}/docs`).then(res => {
				const { data } = res.data
				setPosts(data)
				localStorage.setItem('postsOverview', JSON.stringify(data))
			})
		}
	}, [])

	return (
		<PostsOverviewContainer>
			{posts != []
				? posts.map(post => {
						const postId = post._id
						const { title, excerpt, date } = post
						return (
							<div key={postId}>
								<P>{title}</P>
								<P className="date">Published: {new Date(date).toDateString()}</P>
								<P className="excerpt">
									{excerpt.split(' ').slice(0, 20).join(' ')}...
								</P>
								<Link to={`/posts/${postId}`}>Link here</Link>
							</div>
						)
				  })
				: ''}
		</PostsOverviewContainer>
	)
}

export default PostsOverview
