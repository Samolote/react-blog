import React, { useEffect, useState } from 'react';

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
			{comments && (
				<section>
					<h2>Comments:</h2>
					<p>Curent comment count: {comments.length}</p>
					{comments.map(({ id, content }) => (
						<p key={id}>{content}</p>
					))}
				</section>
			)}
		</>
	);
};

export default CommentSection;
