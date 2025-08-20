import React from 'react';
import { Container } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
	return (
		<Container
			fluid
			className='footer'>
			<p>
				Feel free to <span className='aqua'>connect </span>with me!
			</p>
			<ul className='home-about-social-links'>
				<li className='social-icons'>
					<a
						href='https://github.com/morenaperalta'
						target='_blank'
						rel='noopener noreferrer'
						className='icon-colour  home-social-icons'>
						<AiFillGithub />
					</a>
				</li>
				<li className='social-icons'>
					<a
						href='https://www.linkedin.com/in/morenaperalta/'
						target='_blank'
						rel='noopener noreferrer'
						className='icon-colour  home-social-icons'>
						<FaLinkedinIn />
					</a>
				</li>
			</ul>
		</Container>
	);
}

export default Footer;