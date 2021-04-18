import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TopContainer from '../shared/TopContainer';
import MainWrapper from '../shared/MainWrapper';
import Header from './Header/index';
import BlogGrid from './BlogGrid/index';
import BlogPost from './BlogPost';
import CreateNewBlogPostForm from './CreateNewBlogPostForm/index';

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
							<CreateNewBlogPostForm />
						</Route>
						<Route path="/blog-post/:id">
							<BlogPost />
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
