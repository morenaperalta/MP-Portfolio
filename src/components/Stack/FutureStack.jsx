import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
	DiPython,
	DiJava,

} from 'react-icons/di';
import {
	SiPhp,
	SiLaravel,
} from 'react-icons/si';

function FutureStack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '40px' }}>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<SiPhp />
				<h6>PHP</h6>
			</Col>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<SiLaravel />
				<h6>Laravel</h6>
			</Col>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<DiPython />
				<h6>Phyton</h6>
			</Col>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<DiJava />
				<h6>Java</h6>
			</Col>
		</Row>
	);
}

export default FutureStack;