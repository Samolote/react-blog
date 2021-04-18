import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/colors';

const Logo = styled(Link)`
	padding: 0 2rem;
	border-bottom: 5px solid;
	border-image-slice: 1;
	border-image-source: linear-gradient(90deg, ${colors.amber} 0%, ${colors.red} 100%);
	text-decoration: none;
	color: ${colors.lightGray};
`;

export default Logo;
