import React from 'react';
import PropTypes from 'prop-types';
import ArticleListItem from './ArticleListItem';
import '../assets/articleList.css';

const ArticleList = ({ articles }) => (
	<div className="articles-main-section">
		<ul>
			{Object.values(articles).map(article => {
				return (
					<ArticleListItem
						key={article.slug}
						title={article.title}
						date={article.pubDate}
						year={article.pubYear}
						author={article.author}
						shortText={article.shortText}
					/>
				);
			})}
		</ul>
	</div>
);

ArticleList.propTypes = {
	articles: PropTypes.object.isRequired
};

export default ArticleList;
