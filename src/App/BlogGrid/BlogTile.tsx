import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/colors';

const BlogTile = styled(Link)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 3rem 2.25rem 1.6rem;
	border: 1px solid ${colors.amber};
	min-height: 300px;
	text-decoration: none;
	color: ${colors.lightGray};
`;

export default BlogTile;
