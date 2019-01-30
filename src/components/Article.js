import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import * as articleImage from '../assets/article_image.jpg';
const Article = ({ title, date, author, children }) => {
	return (
		<div className="article-section">
			<h2> {title}</h2>
			<div className="image-section">
				<img className="article-image" src={articleImage} />{' '}
			</div>
			<div className="author-section"> By {author} </div>
			<div className="date-section"> {date} </div>
			<article> {children} </article>
		</div>
	);
};

Article.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired
};
export default Article;
