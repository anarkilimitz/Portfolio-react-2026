import React from 'react';
import { useState } from 'react';
import styles from '../forms/form.module.scss';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { DNA } from 'react-loader-spinner';

import { useLanguage } from '../../i18n/languageContext';

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
						const response = await fetch(
							'/mailer/mailer.php',
							{
								method: 'POST',
								headers: {
									'Content-Type': 'application/json',
								},
								body: JSON.stringify({
									name: values.name,
									email: values.email,
									text: values.text,
								}),
							}
						);

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
				{({ isSubmitting }) => (
					<Form className={styles.form}>
						<h2 className={styles.formHeader}>{t.sendMessage}</h2>
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
