import React from 'react';
import { Link } from 'react-router-dom';

import StyledHeader from './StyledHeader';
import Heading from './Heading';
import Logo from './Logo';
import Button from './Button';

const Header: React.FC = () => {
	return (
		<StyledHeader>
			<Heading>
				<Logo as={Link} to="/">
					Articles
				</Logo>
			</Heading>
			<Button as={Link} to="/create-blog-post">
				Add article
			</Button>
		</StyledHeader>
	);
};

export default Header;
