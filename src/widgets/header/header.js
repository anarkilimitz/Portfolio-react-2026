import React from 'react';
import styles from './header.module.scss';

import { Container, Navbar, Nav } from 'react-bootstrap';

function Header() {
	return (
		<>
			<Navbar
				expand="lg"
				className={`fixed-top ${styles.customNavbar}`}
				variant="dark"
			>
				<Container>
					<Navbar.Brand href="#home">Evgeniy Pavlenok</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link href="#about">About</Nav.Link>
							<Nav.Link href="#projects">Projects</Nav.Link>
							<Nav.Link href="#contacts">Contacts</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<header
				className={`min-vh-100 d-flex align-items-stretch ${styles.header}`}
			>
				<Container fluid className="p-0 h-100">
					<div className="text-white p-5" style={{ marginTop: '280px' }}>
						<h1>Hi, I'm Evgeniy</h1>
						<h3>Front-End JavaScript & React Developer</h3>
						<p>I build modern, responsive web applications.</p>
					</div>
				</Container>
			</header>
		</>
	);
}

export default Header;
