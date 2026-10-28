import { useState } from 'react';
import styles from '../forms/form.module.scss';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { DNA } from 'react-loader-spinner';

import { useLanguage } from '../../i18n/languageContext';

// ------------   ГУГЛ КАПЧА

const RECAPTCHA_SITE_KEY = '6Ld_nwQuAAAAABy9OmdBxojKUjnCFDdfGqHEMzlP';

const loadRecaptcha = () =>
	new Promise((resolve, reject) => {
		if (window.grecaptcha) {
			window.grecaptcha.ready(() => resolve(window.grecaptcha));
			return;
		}

		const existingScript = document.querySelector(
			'script[data-recaptcha="true"]'
		);

		if (existingScript) {
			existingScript.addEventListener('load', () => {
				window.grecaptcha.ready(() => resolve(window.grecaptcha));
			});

			existingScript.addEventListener('error', reject);
			return;
		}

		const script = document.createElement('script');
		script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
		script.async = true;
		script.defer = true;
		script.dataset.recaptcha = 'true';

		script.onload = () => {
			window.grecaptcha.ready(() => resolve(window.grecaptcha));
		};

		script.onerror = () => reject(new Error('Failed to load reCAPTCHA'));

		document.head.appendChild(script);
	});

// ----------------------------------                 конец ГУГЛКАПЧА

const MyTextInput = ({ label, as, ...props }) => {
	const [field, meta] = useField(props);
	const Component = as || 'input';
	return (
		<>
			<label htmlFor={props.name} className={styles.label}>
				{label}
			</label>
			<Component
				{...props}
				{...field}
				className={styles[props.className] || styles.input}
			/>
			{meta.touched && meta.error ? (
				<div className={styles.error}>{meta.error}</div>
			) : null}
		</>
	);
};

const MyCheckbox = ({ children, ...props }) => {
	const [field, meta] = useField({ ...props, type: 'checkbox' });
	return (
		<>
			<label className={styles.checkbox}>
				<input
					type="checkbox"
					{...props}
					{...field}
					className={styles.checkboxInput}
				/>
				{children}
			</label>
			{meta.touched && meta.error ? (
				<div className={styles.error}>{meta.error}</div>
			) : null}
		</>
	);
};

const MainForm = () => {
	const { t } = useLanguage();
	const [overlay, setOverlay] = useState(null);

	const MIN_DELAY = 2000;
	// показать оверлей
	const showOverlay = (type, message = '') => {
		setOverlay({ type, message });
	};
	// закрыть оверлей
	const hideOverlay = () => {
		setOverlay(null);
	};

	return (
		<>
			<Formik
				initialValues={{
					name: '',
					email: '',
					text: '',
					terms: false,
					honeypot: '',
				}}
				validationSchema={Yup.object({
					name: Yup.string().min(2, t.errorMinName).required(t.errorRequired),
					email: Yup.string()
						.email(t.errorEmail)
						.matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Valid email required')
						.required(t.errorRequired),
					text: Yup.string().min(10, t.errorMinText).required(t.errorRequired),
					terms: Yup.boolean()
						.required(t.errorConsent)
						.oneOf([true], t.errorConsent),
				})}
				onSubmit={async (values, { resetForm, setSubmitting }) => {
					// чтобы запомнить время начала отправки сообщения
					const startTime = Date.now();
					// сразу показать спиннер
					showOverlay('loading');

					try {
						// капча ----------------------------------------------------------------
						const recaptcha = await loadRecaptcha();
						const recaptchaToken = await recaptcha.execute(RECAPTCHA_SITE_KEY, {
							action: 'contact_form',
						});
						// ----------------------------------------------------------------------
						const response = await fetch('/mailer/mailer.php', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								name: values.name,
								email: values.email,
								text: values.text,
								honeypot: values.honeypot,
								recaptchaToken,
							}),
						});

						const result = await response.json();

						if (!response.ok || !result.success) {
							throw new Error(result.error || 'Send error');
						}

						const elapsed = Date.now() - startTime;
						if (elapsed < MIN_DELAY) {
							await new Promise((resolve) =>
								setTimeout(resolve, MIN_DELAY - elapsed)
							);
						}

						showOverlay('success', 'Message sent successfully!');
						resetForm(); // очистить форму
					} catch (error) {
						const elapsed = Date.now() - startTime;
						if (elapsed < MIN_DELAY) {
							await new Promise((resolve) =>
								setTimeout(resolve, MIN_DELAY - elapsed)
							);
						}

						showOverlay('error', error.message || 'Failed to send the email.');
					} finally {
						setSubmitting(false); // в любом случае снять блокировку с формы
					}
				}}
			>
				{({ isSubmitting, values, handleChange }) => (
					<Form className={styles.form}>
						<h2 className={styles.formHeader}>{t.sendMessage}</h2>

						{/* скрытый инпут от ботяр */}
						<input
							type="text"
							name="honeypot"
							value={values.honeypot}
							onChange={handleChange}
							tabIndex={-1}
							autoComplete="off"
							aria-hidden="true"
							className={styles.honeypot}
						/>

						<MyTextInput
							id="name"
							name="name"
							type="text"
							placeholder={t.yourName}
						/>
						<MyTextInput
							id="email"
							name="email"
							type="email"
							placeholder={t.yourEmail}
						/>
						<MyTextInput
							id="text"
							name="text"
							as="textarea"
							className="textarea"
							placeholder={t.yourMessage}
						/>
						<MyCheckbox name="terms">
							<Link to="/policy" className={styles.link}>
								{t.agreePrivacy}
							</Link>
						</MyCheckbox>
						<button
							type="submit"
							className={styles.buttonForm}
							disabled={isSubmitting} // отключить кнопку во время отправки
						>
							{t.sendBtn}
						</button>
					</Form>
				)}
			</Formik>

			{overlay && (
				<div className={styles.overlay}>
					<div className={styles.overlayContent}>
						{/* состояние загрузки */}
						{overlay.type === 'loading' && (
							<>
								<DNA
									height="150"
									width="150"
									radius="9"
									color="#4fa94d"
									ariaLabel="three-dots-loading"
									visible={true}
								/>
								<p className={styles.messageMain}>Message sending...</p>
							</>
						)}

						{overlay.type === 'success' && (
							<>
								<div className={styles.successIcon}>✓</div>
								<p className={styles.successText}>{overlay.message}</p>
								<Button
									onClick={hideOverlay}
									className={styles.overlayBtn}
									variant="none"
								>
									Close
								</Button>
							</>
						)}

						{overlay.type === 'error' && (
							<>
								<div className={styles.errorIcon}>✗</div>
								<p className={styles.errorText}>{overlay.message}</p>
								<Button
									onClick={hideOverlay}
									className={styles.overlayBtn}
									variant="none"
								>
									Close
								</Button>
							</>
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default MainForm;
