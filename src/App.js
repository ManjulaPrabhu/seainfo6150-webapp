import React, { Component } from 'react';
import Article from './components/Article';
import ArticleContent from './components/ArticleContent';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "The Statue of Liberty's torch heads to new museum",
			date: 'November 22, 2018',
			author: 'Kate Farley'
		};
	}
	render() {
		return (
			<div className="App">
				<Article
					title={this.state.title}
					date={this.state.date}
					author={this.state.author}>
					<ArticleContent />
				</Article>
			</div>
		);
	}
}

export default App;
