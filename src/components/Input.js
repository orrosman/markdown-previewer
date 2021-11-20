import React from 'react';
import Help from './Help';

export default class Input extends React.Component {
	render() {
		return (
			<div className="col col-md-6">
				<div className="d-flex">
					<Help />
					<h3 className="mx-auto">Input:</h3>
				</div>
				<textarea
					className="form-control h-100"
					id="input-area"
					style={{
						resize: 'none',
						overflow: 'auto',
						maxHeight: '35rem',
					}}
					defaultValue="# Live Markdown Editor"
					onChange={(e) => this.props.onType(e.target.value)}
				></textarea>
			</div>
		);
	}
}
