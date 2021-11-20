import React, { useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import infoIcon from '../assets/info-circle.svg';

export default function Help() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button
				className="p-0 shadow-none bg-transparent"
				variant="light"
				onClick={handleShow}
			>
				<img src={infoIcon} alt="Markdown Cheat Sheet"></img>
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Markdown Cheat Sheet</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Basic Syntax</h4>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Element</th>
								<th>Markdown Syntax</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Heading</td>
								<td>
									# H1<br></br> ## H2<br></br> ### H3
								</td>
							</tr>
							<tr>
								<td>
									<b>Bold</b>
								</td>
								<td>**bold text**</td>
							</tr>
							<tr>
								<td>
									<i>Italic</i>
								</td>
								<td>*italicized text*</td>
							</tr>
							<tr>
								<td>
									<del>Strikethrough</del>
								</td>
								<td>~~example~~</td>
							</tr>
							<tr>
								<td>Blockquote</td>
								<td>{'>'} blockquote</td>
							</tr>
							<tr>
								<td>Ordered List</td>
								<td>
									1. First<br></br> 2. Second<br></br> 3. Third
								</td>
							</tr>
							<tr>
								<td>Unordered List</td>
								<td>
									- First<br></br> - Second<br></br> - Third
								</td>
							</tr>
							<tr>
								<td>
									<code>Code</code>
								</td>
								<td>`code`</td>
							</tr>
							<tr>
								<td>Horizontal Rule</td>
								<td> ---</td>
							</tr>
							<tr>
								<td>
									<a href="#">Link</a>
								</td>
								<td> [title](https://www.example.com)</td>
							</tr>
							<tr>
								<td>Image</td>
								<td> ![alt text](image.jpg)</td>
							</tr>
						</tbody>
					</Table>
					<h4>Extended Syntax</h4>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Element</th>
								<th>Markdown Syntax</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Table</td>
								<td>
									| Properties | of | table |<br></br>| ----------- |
									----------- | -----------|
									<br></br>| Table | content | text |
								</td>
							</tr>
							<tr>
								<td>
									<code>
										Fenced <br></br>Code<br></br> Block
									</code>
								</td>
								<td>
									```<br></br>"firstName"{':'} "John",<br></br> "lastName"{':'}{' '}
									"Smith",
									<br></br>
									"age"
									{':'} 25<br></br> ```
								</td>
							</tr>
							<tr>
								<td>Footnote</td>
								<td>
									{' '}
									Here's a sentence with a footnote. [^1]<br></br> [^1]: This is
									the footnote.
								</td>
							</tr>
							<tr>
								<td>Heading ID</td>
								<td>### My Great Heading {'{#custom-id}'}</td>
							</tr>
							<tr>
								<td>Definition List</td>
								<td>
									term<br></br> : definition
								</td>
							</tr>
							<tr>
								<td>Task List</td>
								<td>
									- [x] Write the press release<br></br> - [ ] Update the
									website<br></br> - [ ] Contact the media
								</td>
							</tr>
						</tbody>
					</Table>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
