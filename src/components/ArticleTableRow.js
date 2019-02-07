import React from 'react';
import PropTypes from 'prop-types';

class ArticleTableRow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: false,
			selectedStatus: 'No'
		};
	}

	onClick() {
		this.setState({
			selected: !this.state.selected
		});
	}

	render() {
		if (this.state.selected) {
			this.state.selectedStatus = 'Yes';
		} else {
			this.state.selectedStatus = 'No';
		}

		// paste this onClick handler into your checkbox;
		// you should not have to modify this code in any way
		// onClick={this.onClick.bind(this)}
		//
		return (
			<tr>
				<td>
					<input type="checkbox" onClick={this.onClick.bind(this)} />
				</td>
				<td>{this.state.selectedStatus}</td>
				<td>{this.props.title}</td>
				<td> {this.props.author}</td>
				<td>
					<time datetime="2018"> {this.props.date} </time>{' '}
				</td>
				<td>{this.props.shortText}</td>
			</tr>
		);
	}
}

ArticleTableRow.propTypes = {
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	shortText: PropTypes.string.isRequired
};

export default ArticleTableRow;
