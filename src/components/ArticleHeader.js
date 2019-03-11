import React from 'react';
import '../assets/articleList.css';
const ArticleHeader = () => (
	<div className="article-header-section">
		<div className="article-header-title"> The INFO6150 News </div>
		<div>
			{' '}
			<time className="header-date" datetime={2019}>
				Wed, February 20, 2019
			</time>
		</div>
	</div>
);
export default ArticleHeader;
