import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/colors';

const Logo = styled(Link)`
	text-decoration: none;
	color: ${colors.lightGray};
`;

export default Logo;
