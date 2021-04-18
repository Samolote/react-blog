import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Grid from './Grid';
import BlogTile from './BlogTile';
import Heading from './Heading';
import CallToAction from './CallToAction';
import StyledSvg from './StyledSvg';
import Arrow from './Arrow';

interface BlogPost {
	id: number;
	title: string;
	content: string;
	likes?: number;
	dislikes?: number;
}

type BlogPosts = BlogPost[] | null;

const BlogGrid: React.FC = () => {
	const [blogPosts, setBlogPosts] = useState<BlogPosts>(null);

	useEffect(() => {
		fetch('http://localhost:3001/blog-posts')
			.then((res) => res.json())
			.then((data) => setBlogPosts(data));
	}, []);

	return (
		<Grid>
			{blogPosts &&
				blogPosts.map(({ id, title }) => (
					<BlogTile as={Link} to={`/blog-post/${id}`} key={id}>
						<Heading>{title}</Heading>
						<CallToAction>
							read more
							<StyledSvg width="54" height="15" viewBox="0 0 54 15">
								<Arrow
									fill-rule="nonzero"
									stroke="#fff"
									fill="none"
									stroke-linecap="square"
									d="M.5 7h51.919M46 0l7 7.147L46 14"
								/>
							</StyledSvg>
						</CallToAction>
					</BlogTile>
				))}
		</Grid>
	);
};

export default BlogGrid;
