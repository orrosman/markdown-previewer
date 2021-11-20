import React from 'react';
import { Button } from 'react-bootstrap';
import clipboard from '../assets/clipboard.svg';

export default class Output extends React.Component {
	copyToClipboard() {
		navigator.clipboard.writeText(this.props.value.props.content);
	}
	render() {
		return (
			<div className="col col-md-6">
				<h3 className="text-center">Output:</h3>
				<div className="form-control h-100 overflow-auto">
					<div>
						<Button
							className="position-absolute end-0 bg-transparent"
							variant="light"
							title="Copy to clipboard"
							onClick={() => this.copyToClipboard()}
						>
							<img src={clipboard} alt={'Copy to clipboard'}></img>
						</Button>
					</div>
					{this.props.value}
				</div>
			</div>
		);
	}
}
