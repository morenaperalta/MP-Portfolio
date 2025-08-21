import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import workInProgress from '../../assets/Projects/work_in_progress.png';
import socialMedia from '../../assets/Projects/red_social.png';

function Projects() {
	return (
		<Container
			fluid
			className='project-section'>
			<Container>
				<Row style={{ justifyContent: 'center', paddingTop: '4em' }}>
					<Col
						md={4}
						className='project-card'>
						<ProjectCard
							imgPath={workInProgress}
							isBlog={false}
							title='🏢 Las Naves | Coworking'
							description='Coworking management app optimizing room usage with access control, real-time monitoring, and reporting. Users can easily check availability and book spaces. Stack: React, Tailwind, JWT, TypeScript, MySQL, TypeORM, Docker.'
							ghLink='https://github.com/More-Pe/frontend-Coworking'
						/>
					</Col>

					<Col
						md={4}
						className='project-card'>
						<ProjectCard
							imgPath={socialMedia}
							isBlog={false}
							title='📱 EMME | Social Media'
							description='A social platform designed to foster user connection and creative expression. Features include user authentication (JWT), profile management, post creation/editing with images, real-time content interactions (likes), and admin controls for user and post moderation. Stack: React, CSS, JWT, Node.js, Express, MongoDB, Docker.'
							ghLink='https://github.com/More-Pe/frontend-SocialMedia'
						/>
					</Col>

					<Col
						md={4}
						className='project-card'>
						<ProjectCard
							imgPath={workInProgress}
							isBlog={false}
							title='🔧 FIXLY | REST API'
							description='Complete REST API for Work Order Management built with Spring Boot and Spring Security. Features comprehensive CRUD operations with robust authentication & authorization, plus business logic for complete work order lifecycle management. Stack: Spring Boot, Spring Security, MySQL, JPA.'
							ghLink='https://github.com/morenaperalta/Fixly'
						/>
					</Col>

					<Col
						md={4}
						className='project-card'>
						<ProjectCard
							imgPath={workInProgress}
							isBlog={false}
							title='✈️ Nomad Pulse | Travel API'
							description='A robust REST API for managing users and travel destinations, built with Java 21 and Spring Boot. Features clean MVC architecture, secure JWT authentication, role-based access control, and comprehensive API documentation. Emphasizes backend scalability and maintainability with unit and integration testing. Stack: Java 21, Spring Boot, Spring Security, JWT, JUnit, Mockito.'
							ghLink='https://github.com/morenaperalta/happy-travel-backend'
						/>
					</Col>
					<Col
						md={4}
						className='project-card'>
						<ProjectCard
							imgPath={workInProgress}
							isBlog={false}
							title='👓 Iris & Co. | Optical E-commerce'
							description='Backend application simulating an e-commerce platform for optical products. Built with Java 21 and Spring Boot, implements clean architecture, robust entity relationships, and comprehensive error handling. Features CRUD operations for users, products, carts, and categories with request validation and testing. Stack: Java 21, Spring Boot, JUnit, Mockito.'
							ghLink='https://github.com/morenaperalta/ecommerce-optic'
						/>
					</Col>

					<Col
						md={4}
						className='project-card'>
						<ProjectCard
							imgPath={workInProgress}
							isBlog={false}
							title='🤝 HelpHub | Skills Exchange'
							description='A dynamic platform for skill exchange that connects individuals eager to teach and learn new abilities. Features user profile management, skill-sharing requests, and seamless communication tools. The backend built with Node.js, Express, and MongoDB ensures a scalable and secure experience, fostering collaborative learning. Stack: Node.js, Express, MongoDB.'
							ghLink='https://github.com/morenaperalta/backend-HelpHub'
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
