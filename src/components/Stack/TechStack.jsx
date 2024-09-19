import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiMongodb,
	DiGit,
	DiMysql,
} from 'react-icons/di';
import {
	SiTypescript,
	SiBootstrap,
	SiHtml5,
	SiCss3,
	SiTailwindcss,
	SiGithub,
} from 'react-icons/si';

function TechStack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '40px' }}>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<DiJavascript1 /> <h6>JavaScript</h6>
			</Col>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<SiTypescript /> <h6>TypeScript</h6>
			</Col>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<SiHtml5 /> <h6>HTML5</h6>
			</Col>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<SiCss3 /> <h6>CSS3</h6>
			</Col>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<DiNodejs /> <h6>Node.js</h6>
			</Col>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<DiReact />
				<h6>React.js</h6>
			</Col>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<SiBootstrap />
				<h6>Bootstrap</h6>
			</Col>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<SiTailwindcss /> <h6>Tailwind</h6>
			</Col>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<DiMysql />
				<h6>MySQL</h6>
			</Col>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<DiMongodb />
				<h6>MongoDB</h6>
			</Col>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<DiGit />
				<h6>Git</h6>
			</Col>
			<Col
				xs={2}
				md={2}
				lg={1}
				className='tech-icons'>
				<SiGithub />
				<h6>GitHub</h6>
			</Col>
		</Row>
	);
}

export default TechStack;
