import React from 'react';
import Input from './Input';
import Output from './Output';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: null,
		};
	}

	handleInput(newInput) {
		this.setState({ input: newInput });
	}
	render() {
		return (
			<div className="container mx-auto row">
				<Input onType={this.handleInput.bind(this)} />
				<Output value={this.state.input} />
			</div>
		);
	}
}
