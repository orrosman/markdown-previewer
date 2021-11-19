import React from 'react';

export default class Input extends React.Component {
	render() {
		return (
			<div className="col m-4">
				<h3 className="text-center">Input:</h3>
				<textarea class="form-control" id="input-area" rows="20">
					Marked - Markdown Parser
				</textarea>
			</div>
		);
	}
}
