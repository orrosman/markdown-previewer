import React from 'react';

export default class Input extends React.Component {
	render() {
		return (
			<div className="col m-4">
				<h3 className="text-center">Input:</h3>
				<textarea
					className="form-control"
					id="input-area"
					rows="20"
					defaultValue="Marked - Markdown Parser"
					onChange={(e) => this.props.onType(e.target.value)}
				></textarea>
			</div>
		);
	}
}
