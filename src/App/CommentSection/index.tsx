import React, { useEffect, useState } from 'react';
import CommentForm from '../CommentForm';

interface Props {
	id: string;
}

interface Comment {
	id: number;
	blogPostId: number;
	content: string;
	likes: number;
	dislikes: number;
}

type Comments = Comment[];

const CommentSection: React.FC<Props> = ({ id }) => {
	const [comments, setComments] = useState<Comments>();

	useEffect(() => {
		fetch(`http://localhost:3001/comments?blogPostId=${id}`)
			.then((res) => res.json())
			.then((data) => setComments(data));
	}, [id]);

	return (
		<>
			<CommentForm id={id} />
			{comments && (
				<section>
					<h2>Comments: {comments.length}</h2>
					{comments.map(({ id, content }) => (
						<p key={id}>{content}</p>
					))}
				</section>
			)}
		</>
	);
};

export default CommentSection;
