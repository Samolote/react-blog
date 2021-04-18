import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import CommentSection from '../CommentSection';

interface BlogPostData {
	id: number;
	title: string;
	content: string;
}

const BlogPost: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [blogPostData, setBlogPostData] = useState<BlogPostData>();
	const history = useHistory();

	useEffect(() => {
		fetch(`http://localhost:3001/blog-posts/${id}`)
			.then((res) => res.json())
			.then((data) => setBlogPostData(data));
	}, [id]);

	const handleDeleteClick = (e: React.MouseEvent) => {
		fetch(`http://localhost:3001/blog-posts/${id}`, { method: 'DELETE' }).then(() =>
			history.push('/')
		);
	};

	return (
		<>
			{blogPostData && (
				<>
					<article>
						<h2>{blogPostData.title}</h2>
						<p>{blogPostData.content}</p>
						<div className="button-wrapper">
							<Link to={`/edit/${id}`}>Edit</Link>
							<button onClick={handleDeleteClick}>Delete</button>
						</div>
					</article>
					<CommentSection id={id} />
				</>
			)}
		</>
	);
};

export default BlogPost;
