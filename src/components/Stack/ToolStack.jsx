import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
	SiVisualstudiocode,
	SiPostman,
	SiSlack,
	SiMacos,
	SiTrello,
	SiJira
} from 'react-icons/si';

function ToolStack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '40px' }}>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<SiMacos />
				<h6>MacOS</h6>
			</Col>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<SiVisualstudiocode />
				<h6>VSC</h6>
			</Col>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<SiPostman />
				<h6>Postman</h6>
			</Col>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<SiSlack />
				<h6>Slack</h6>
			</Col>
						<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<SiJira />
				<h6>Jira</h6>
			</Col>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<SiTrello />
				<h6>Trello</h6>
			</Col>
		</Row>
	);
}

export default ToolStack;
