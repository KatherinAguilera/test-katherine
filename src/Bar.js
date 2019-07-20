import React, { Component } from 'react';

class Bar extends Component {
	render() {
		const percentUp = this.props.percentUp;
		const percentDown = 100 - percentUp;

		const BarUp = {
			width: percentUp + '%',
		};

		const BarDown = {
			width: percentDown + '%'
		}

		return (
			<div className="percent-bar">
				<div className="percent-bar-up" style={BarUp}>
					{percentUp}%
				</div>
				<div className="percent-bar-down" style={BarDown}>
					{percentDown}%
				</div>
			</div>
		);
	}
};

export default Bar;
