import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const BlogPostForm: React.FC = () => {
	const [title, setTitle] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const history = useHistory();

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

	const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
		setContent(e.target.value);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const blog = { title, content };

		fetch('http://localhost:3001/blog-posts', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog),
		}).then(() => history.push('/'));
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
					<input type="submit" value="Add article" />
				</div>
			</form>
		</div>
	);
};

export default BlogPostForm;
