import React, { Component } from 'react';
import ArticleList from './components/ArticleList';
import articles from './data/articles.json';

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="App">
				<ArticleList articles={articles} />
			</div>
		);
	}
}

export default App;
