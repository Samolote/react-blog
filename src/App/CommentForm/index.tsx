import React, { useState } from 'react';

interface Props {
	id: string;
}

const CommentForm: React.FC<Props> = ({ id }) => {
	const [content, setContent] = useState<string>('');

	const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
		setContent(e.target.value);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const comment = { blogPostId: id, content, likes: 0, dislikes: 0 };

		fetch('http://localhost:3001/comments', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(comment),
		});
	};

	return (
		<section>
			<h2>Comment:</h2>
			<form onSubmit={handleSubmit}>
				<div className="field">
					<label htmlFor="comment-content">Tell us what you think:</label>
					<textarea
						id="comment-content"
						value={content}
						onChange={handleContentChange}
						required
					></textarea>
				</div>
				<div className="button-wrapper">
					<input type="submit" value="Add comment" />
				</div>
			</form>
		</section>
	);
};

export default CommentForm;
