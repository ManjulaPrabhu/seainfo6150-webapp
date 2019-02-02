import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import * as articleImage from '../assets/article_image.jpg';
const Article = ({ title, date, author, children }) => {
	return (
		<article className="article-section">
			<header>
				{title}
				<figure className="image-section">
					<img className="article-image" src={articleImage} />{' '}
				</figure>
				<p className="author-section">
					By {author} <time className="date-section">{date}</time>
				</p>
			</header>
			<section> {children} </section>
		</article>
	);
};

Article.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired
};
export default Article;
