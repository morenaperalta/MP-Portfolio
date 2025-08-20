import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeBg from '../../assets/home-bg.jpg';
import TechStack from './TechStack.jsx';
import ToolStack from './ToolStack.jsx';
import FutureStack from './FutureStack.jsx';

function Stack() {
	return (
		<Container
			fluid
			className='home-stack-section'
			style={{
				backgroundImage: `linear-gradient(to bottom left, rgba(17, 16, 16, 0.678), rgba(20, 15, 47, 0.863)), url(${homeBg})`,
			}}>
			<Container>
				<Row style={{ justifyContent: 'center', padding: '10px' }}>
					<Col
						md={12}
						style={{
							justifyContent: 'center',
							paddingTop: '30px',
							paddingBottom: '50px',
						}}></Col>
				</Row>
				<h1 className='project-heading'>
					Professional <strong className='aqua'>Skillset </strong>
				</h1>
				<TechStack />
				<h1 className='project-heading'>
					<strong className='aqua'>Tools</strong> I use
				</h1>
				<ToolStack />
				<h1 className='project-heading'>
					Technologies<strong className='aqua'> I am learning </strong>
				</h1>
				<FutureStack />
			</Container>
		</Container>
	);
}

export default Stack;
