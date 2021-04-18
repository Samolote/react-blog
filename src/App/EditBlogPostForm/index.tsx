import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

interface BlogPost {
	id: number;
	title: string;
	content: string;
}

const EditBlogPostForm: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const [title, setTitle] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const history = useHistory();

	useEffect(() => {
		fetch(`http://localhost:3001/blog-posts/${id}`)
			.then((res) => res.json())
			.then(({ title, content }) => {
				setTitle(title);
				setContent(content);
			});
	}, [id]);

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

	const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
		setContent(e.target.value);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const blog = { title, content };

		fetch(`http://localhost:3001/blog-posts/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog),
		}).then(() => history.push(`/blog-post/${id}`));
	};

	return (
		<div>
			<h2>Your article below:</h2>
			<form onSubmit={handleSubmit}>
				<div className="field">
					<label htmlFor="article-title">Article title:</label>
					<input
						id="article-title"
						type="text"
						value={title}
						onChange={handleTitleChange}
						required
					/>
				</div>
				<div className="field">
					<label htmlFor="article-content">Article content:</label>
					<textarea
						id="article-content"
						value={content}
						onChange={handleContentChange}
						required
					></textarea>
				</div>
				<div className="button-wrapper">
					<input type="submit" value="Confirm changes" />
				</div>
			</form>
		</div>
	);
};

export default EditBlogPostForm;
