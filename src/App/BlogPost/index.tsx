import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import StyledArticle from './StyledArticle';
import ArticleHeading from './ArticleHeading';
import ArticleContent from './ArticleContent';
import ButtonWrapper from './ButtonWrapper';
import Button from './Button';
import CommentSection from '../CommentSection';

interface BlogPostData {
	id: number;
	title: string;
	content: string;
}

interface Comment {
	id: number;
	blogPostId: number;
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

	const handleDeleteClick = async (e: React.MouseEvent) => {
		const resComments = await fetch(`http://localhost:3001/comments?blogPostId=${id}`);
		const filteredComments = await resComments.json();
		await filteredComments.forEach(
			async (comment: Comment) =>
				await fetch(`http://localhost:3001/comments/${comment.id}`, { method: 'DELETE' })
		);
		await fetch(`http://localhost:3001/blog-posts/${id}`, { method: 'DELETE' });
		history.push('/');
	};

	return (
		<>
			{blogPostData && (
				<>
					<StyledArticle>
						<ArticleHeading>{blogPostData.title}</ArticleHeading>
						<ArticleContent>{blogPostData.content}</ArticleContent>
						<ButtonWrapper>
							<Button as={Link} to={`/edit/${id}`}>
								Edit
							</Button>
							<Button onClick={handleDeleteClick}>Delete</Button>
						</ButtonWrapper>
					</StyledArticle>
					<CommentSection id={id} />
				</>
			)}
		</>
	);
};

export default BlogPost;
