import React from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import clipboard from '../assets/clipboard.svg';

export default class Output extends React.Component {
	copyToClipboard() {
		navigator.clipboard.writeText(this.props.value.props.content);
	}

	downloadAsHTML() {
		const element = document.createElement('a');
		const file = new Blob([this.props.value.props.content], {
			type: 'text/plain',
		});
		element.href = URL.createObjectURL(file);
		element.download = 'markdown-file.md';
		document.body.appendChild(element);
		element.click();
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
				<div className="d-flex justify-content-end mt-5">
					<DropdownButton title="Download">
						<Dropdown.Item as="button" onClick={() => this.downloadAsHTML()}>
							HTML format
						</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Github format</Dropdown.Item>
					</DropdownButton>
				</div>
			</div>
		);
	}
}
