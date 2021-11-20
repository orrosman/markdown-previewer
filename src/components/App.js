import React from 'react';
import Input from './Input';
import Output from './Output';
import { marked } from 'marked';
import Interweave from 'interweave';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			plainInput: null,
			parsedInput: null,
		};
	}

	handleInput(newInput) {
		console.log(newInput);
		let parsedInput = <Interweave content={marked.parse(newInput)} />; //sanitize and parse text input to HTML markdown format
		this.setState({ plainInput: newInput, parsedInput: parsedInput });
	}
	render() {
		return (
			<div className="container-fluid row h-100">
				<Input onType={this.handleInput.bind(this)} />
				<Output
					value={this.state.parsedInput}
					plainInput={this.state.plainInput}
				/>
			</div>
		);
	}
}
