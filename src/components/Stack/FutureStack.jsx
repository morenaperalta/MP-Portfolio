import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
	DiPython
} from 'react-icons/di';

function FutureStack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '40px' }}>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<DiPython />
				<h6>Phyton</h6>
			</Col>
		</Row>
	);
}

export default FutureStack;