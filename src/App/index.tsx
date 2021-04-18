import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import TopContainer from '../shared/TopContainer';
import MainWrapper from '../shared/MainWrapper';
import Header from './Header/index';
import BlogGrid from './BlogGrid';
import BlogPost from './BlogPost';
import NewBlogPostForm from './NewBlogPostForm';

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
						<Route path="/new">
							<NewBlogPostForm />
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
