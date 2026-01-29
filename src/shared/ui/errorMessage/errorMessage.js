import React from 'react';

import { BiError } from 'react-icons/bi';
import styles from './errorMessage.module.scss';

export default function ErrorMessage({ message }) {
	return (
		<div className={styles.wrap}>
			<BiError className={styles.icon} />
			<p>{message}</p>
		</div>
	);
}
