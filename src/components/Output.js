import React from 'react';

export default class Output extends React.Component {
	render() {
		return (
			<div className="col col-md-6">
				<h3 className="text-center">Output:</h3>
				<div className="form-control h-100 overflow-auto">
					{this.props.value}
				</div>
			</div>
		);
	}
}
