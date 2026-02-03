import styles from './page404.module.scss';
import Lottie from 'lottie-react';
import lonely404Animation from '../../shared/ui/errorMessagePage/Lonely404.json';

import { Link } from 'react-router-dom';

const Page404 = () => {
	return (
		<div className={styles.page404}>
			<Lottie
				animationData={lonely404Animation}
				loop
				autoplay
				className={styles.animation}
			/>
			
			<Link to="/" className={styles.page404button}>
				Вернуться на главную!
			</Link>

			<div className={styles.numbers}>
				<span>4</span>
				<span>0</span>
				<span>4</span>
			</div>

			<p className={styles.page404text}>
				Похоже, ты зашёл не туда. Такой страницы не существует!
			</p>

			<footer className={styles.page404footer}>
				© {new Date().getFullYear()} Твоя Вселенная. 🚀
			</footer>
		</div>
	);
};

export default Page404;
