import React from 'react';
import Input from './Input';
import Output from './Output';

export default class App extends React.Component {
	render() {
		return (
			<div className="container mx-auto row">
				<Input />
				<Output />
			</div>
		);
	}
}
