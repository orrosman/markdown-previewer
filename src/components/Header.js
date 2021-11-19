import React from 'react';
import markdownLogo from '../assets/markdown.svg';

export default class Header extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark">
				<i className="navbar-brand mx-auto text-center">
					<img
						src={markdownLogo}
						width="100"
						height="100"
						alt="example logo"
					></img>
					<div>Online Markdown Editor</div>
				</i>
			</nav>
		);
	}
}
