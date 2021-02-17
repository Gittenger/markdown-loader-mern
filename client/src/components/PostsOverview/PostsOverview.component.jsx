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
		axios.get(`http://localhost:5000/docs`).then(res => {
			console.log(res)
			setPosts(res.data.data)
		})
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
