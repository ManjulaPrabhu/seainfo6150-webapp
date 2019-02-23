import React from 'react';
import '../assets/articleImage.css';
const ArticleImage = ({ url, title }) => (
	<figure>
		<img className="article-image" src={url} alt={title} />
	</figure>
);

export default ArticleImage;
