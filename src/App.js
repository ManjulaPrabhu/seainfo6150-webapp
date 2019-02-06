import React, { Component } from 'react';
import ArticleTable from './components/ArticleTable';
import articles from './data/articles.json';

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="App">
				<ArticleTable articles={articles} />
			</div>
		);
	}
}

export default App;
