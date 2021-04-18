import styled from 'styled-components';
import colors from '../../utils/colors';

const Button = styled.button`
	padding: 1.25rem 2.5rem;
	border-radius: 5px;
	background: linear-gradient(90deg, ${colors.amber} 0%, ${colors.red} 100%);
	font-size: 1.3em;
	text-decoration: none;
	color: ${colors.lightGray};
`;

export default Button;
