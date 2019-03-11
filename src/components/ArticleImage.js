import React from 'react';
import '../assets/articleImage.css';
const ArticleImage = ({ url, title }) => (
	<img className="article-image" src={url} alt={title} />
);

export default ArticleImage;
