import React from 'react';
import Input from './Input';
import Output from './Output';
import { marked } from 'marked';
import Interweave from 'interweave';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			parsedInput: null,
		};
	}

	handleInput(newInput) {
		let parsedInput = <Interweave content={marked.parse(newInput)} />; //sanitize and parse text input to HTML markdown format
		this.setState({ parsedInput: parsedInput });
	}
	render() {
		return (
			<div className="container mx-auto row">
				<Input onType={this.handleInput.bind(this)} />
				<Output value={this.state.parsedInput} />
			</div>
		);
	}
}
