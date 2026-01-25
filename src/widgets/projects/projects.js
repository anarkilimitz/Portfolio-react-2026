import React from 'react';
import styles from './projects.module.scss';

import { Container } from 'react-bootstrap';

function Projects() {
	return (
		<Container className="mt-5 mb-5">
			<section className={`d-flex align-items-stretch ${styles.projects}`}>
				<div className={`text-white p-5 ${styles.titleProjects}`}>
					<h1 className="pb-3">Project</h1>
				</div>
			</section>
		</Container>
	);
}

export default Projects;
