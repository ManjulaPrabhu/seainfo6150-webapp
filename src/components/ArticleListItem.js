import React from 'react';
import PropTypes from 'prop-types';
import '../assets/articleList.css';

const ArticleListItem = ({ title, date, year, author, shortText }) => (
	<div className="article-list-item">
		<li>
			<div className="article-title"> {title} </div>
			<div>{shortText}</div>
			<div className="article-details">
				<address> By: {author}</address>
				<time datetime={year}> {date} </time>
			</div>
		</li>
	</div>
);

ArticleListItem.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	year: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	shortText: PropTypes.string.isRequired
};

export default ArticleListItem;
