import React from 'react';
import { RefObject } from 'react';
import styles from './footer.module.scss';

import { Container, Row, Col } from 'react-bootstrap';

import MainForm from '../../shared/ui/forms/form';

import { useLanguage } from '../../shared/i18n/languageContext';

interface FooterProps {
	contactsRef?: RefObject<HTMLElement | null>; // реф для прокрутки
}

function Footer({ contactsRef }: FooterProps) {
	const { t } = useLanguage();

	return (
		<footer ref={contactsRef} className={`bg-dark text-white ${styles.footer}`}>
			<Container>
				<Row className="align-items-center gy-4">
					{/* обо мне */}
					<Col md={4} className="text-md-start text-center">
						<h5>{t.titleFooter}</h5>
						<p>{t.textFooter}</p>
					</Col>

					{/* соцсети */}
					<Col md={4} className="text-center">
						<h5>{t.socials}</h5>
						<div className={`${styles.contactsSocial} ${styles.socialCenter}`}>
							{/* гитхаб */}
							<a
								className={`${styles.contactsLink} ${styles.contactsLinkGitHub}`}
								href="https://github.com/anarkilimitz"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									width="20"
									height="19"
									viewBox="0 0 20 19"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M10 0C4.475 0 0 4.36167 0 9.74107C0 14.0457 2.865 17.6962 6.8375 18.9832C7.3375 19.0749 7.52083 18.7734 7.52083 18.5148C7.52083 18.2835 7.5125 17.6706 7.50833 16.8585C4.72667 17.4459 4.14 15.5517 4.14 15.5517C3.685 14.4274 3.0275 14.1267 3.0275 14.1267C2.12167 13.5228 3.0975 13.5352 3.0975 13.5352C4.10167 13.603 4.62917 14.5389 4.62917 14.5389C5.52083 16.0283 6.97 15.5979 7.54167 15.3493C7.63167 14.719 7.88917 14.2903 8.175 14.0466C5.95417 13.8029 3.62 12.9652 3.62 9.23304C3.62 8.16988 4.0075 7.30085 4.64917 6.61934C4.53667 6.37317 4.19917 5.3827 4.73667 4.04116C4.73667 4.04116 5.57417 3.78012 7.48667 5.03988C8.28667 4.82345 9.13667 4.71606 9.98667 4.7111C10.8367 4.71606 11.6867 4.82345 12.4867 5.03988C14.3867 3.78012 15.2242 4.04116 15.2242 4.04116C15.7617 5.3827 15.4242 6.37317 15.3242 6.61934C15.9617 7.30085 16.3492 8.16988 16.3492 9.23304C16.3492 12.9752 14.0117 13.7987 11.7867 14.0383C12.1367 14.3307 12.4617 14.928 12.4617 15.8408C12.4617 17.1444 12.4492 18.1918 12.4492 18.5082C12.4492 18.7635 12.6242 19.0683 13.1367 18.9708C17.1375 17.692 20 14.0391 20 9.74107C20 4.36167 15.5225 0 10 0Z" />
								</svg>
							</a>

							{/* инстаграм */}
							<a
								className={`${styles.contactsLink} ${styles.contactsLinkInstagram}`}
								href="https://www.instagram.com/evgeniypavlenok/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M13.7495 0L6.24951 0C2.79826 0 -0.000488281 2.79875 -0.000488281 6.25L-0.000488281 13.75C-0.000488281 17.2013 2.79826 20 6.24951 20L13.7495 20C17.2008 20 19.9995 17.2013 19.9995 13.75L19.9995 6.25C19.9995 2.79875 17.2008 0 13.7495 0ZM18.1245 13.75C18.1245 16.1625 16.162 18.125 13.7495 18.125L6.24951 18.125C3.83701 18.125 1.87451 16.1625 1.87451 13.75L1.87451 6.25C1.87451 3.8375 3.83701 1.875 6.24951 1.875L13.7495 1.875C16.162 1.875 18.1245 3.8375 18.1245 6.25L18.1245 13.75Z" />
									<path d="M9.99951 5C7.23826 5 4.99951 7.23875 4.99951 10C4.99951 12.7613 7.23826 15 9.99951 15C12.7608 15 14.9995 12.7613 14.9995 10C14.9995 7.23875 12.7608 5 9.99951 5ZM9.99951 13.125C8.27701 13.125 6.87451 11.7225 6.87451 10C6.87451 8.27625 8.27701 6.875 9.99951 6.875C11.722 6.875 13.1245 8.27625 13.1245 10C13.1245 11.7225 11.722 13.125 9.99951 13.125Z" />
									<path d="M15.3745 5.29123C15.7425 5.29123 16.0408 4.99295 16.0408 4.62499C16.0408 4.25703 15.7425 3.95874 15.3745 3.95874C15.0065 3.95874 14.7083 4.25703 14.7083 4.62499C14.7083 4.99295 15.0065 5.29123 15.3745 5.29123Z" />
								</svg>
							</a>

							{/* телеграм */}
							<a
								className={`${styles.contactsLink} ${styles.contactsLinkTelegram}`}
								href="https://t.me/rothludatha"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 30 30"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M15 30C23.2863 30 30 23.2863 30 15C30 6.71375 23.2863 0 15 0C6.71375 0 0 6.71375 0 15C0 23.2863 6.71375 30 15 30ZM6.86375 14.675L21.3263 9.09875C21.9975 8.85625 22.5837 9.2625 22.3662 10.2775L22.3675 10.2762L19.905 21.8775C19.7225 22.7 19.2337 22.9 18.55 22.5125L14.8 19.7487L12.9912 21.4913C12.7912 21.6913 12.6225 21.86 12.235 21.86L12.5013 18.0438L19.4513 11.765C19.7537 11.4987 19.3837 11.3488 18.985 11.6138L10.3963 17.0212L6.69375 15.8663C5.89 15.6112 5.8725 15.0625 6.86375 14.675Z" />
								</svg>
							</a>
						</div>
					</Col>

					{/* контакты */}
					<Col md={4} className="text-md-center text-center">
						<h5>{t.contacts}</h5>
						<p>{t.email}: devlimitz@yandex.ru</p>
						<p>{t.phone}: +7 (912) 284-50-53</p>
					</Col>
				</Row>

				{/* форма */}
				<Row className="mt-4 justify-content-center">
					<Col md={6}>
						<MainForm />
					</Col>
				</Row>

				<hr className={styles.divider} />

				{/* лицензия */}
				<Row>
					<Col className={styles.bottomBar}>
						<span>© 2025 {t.allRights}</span>

						<span className={styles.license}>
							{t.license}
							<a
								href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
								target="_blank"
								rel="noopener noreferrer"
							>
								CC BY-NC-ND 4.0
							</a>
							<img
								src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"
								alt=""
							/>
							<img
								src="https://mirrors.creativecommons.org/presskit/icons/by.svg"
								alt=""
							/>
							<img
								src="https://mirrors.creativecommons.org/presskit/icons/nc.svg"
								alt=""
							/>
							<img
								src="https://mirrors.creativecommons.org/presskit/icons/nd.svg"
								alt=""
							/>
						</span>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
