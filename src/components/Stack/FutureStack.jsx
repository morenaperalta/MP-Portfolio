import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DiPython, DiDjango } from 'react-icons/di';

function FutureStack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '40px' }}>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<DiPython />
				<h6>Python</h6>
			</Col>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<DiDjango />
				<h6>Django</h6>
			</Col>
		</Row>
	);
}

export default FutureStack;
