import React from 'react';

export default class Output extends React.Component {
	render() {
		return (
			<div className="col m-4">
				<h3 className="text-center ">Output:</h3>
				<div className="form-control">{this.props.output}</div>
			</div>
		);
	}
}
