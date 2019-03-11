import React from 'react';
import PropTypes from 'prop-types';
import '../assets/articleList.css';
import ArticleImage from './ArticleImage';

const ArticleListItem = ({ title, date, year, author, shortText, image }) => (
	<div className="article-list-item">
		<li>
			<div className="article-image-section">
				<ArticleImage url={image} title={title} />
			</div>
			<div>
				<div className="article-title"> {title} </div>
				<div>{shortText}</div>
				<div className="article-details">
					<address> By: {author}</address>
					<time className="article-date" datetime={year}>
						{' '}
						{date}{' '}
					</time>
				</div>
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
