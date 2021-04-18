import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header/index';
import BlogGrid from './BlogGrid/index';
import TopContainer from '../shared/TopContainer';
import MainWrapper from '../shared/MainWrapper';

const App: React.FC = () => {
	return (
		<Router>
			<TopContainer>
				<Header />
				<MainWrapper>
					<Switch>
						<Route exact path="/">
							<BlogGrid />
						</Route>
						<Route path="/create-blog-post">
							<p>yo add some form here</p>
						</Route>
						<Route path="*">
							<p>no such address duuuude - 404</p>
						</Route>
					</Switch>
				</MainWrapper>
			</TopContainer>
		</Router>
	);
};

export default App;
