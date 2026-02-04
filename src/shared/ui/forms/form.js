import React from 'react';
import styles from '../forms/form.module.scss';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';

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
	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				text: '',
				terms: false,
			}}
			validationSchema={Yup.object({
				name: Yup.string().min(2, 'At least 2 characters').required('Required'),
				email: Yup.string()
					.email('Invalid email address')
					.matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Valid email required')
					.required('Required'),
				text: Yup.string()
					.min(10, 'At least 10 characters')
					.required('Required'),
				terms: Yup.boolean()
					.required('Consent required')
					.oneOf([true], 'Consent required'),
			})}
			onSubmit={(values) => {}} // для отправки формы на БУДУЩЕЕ
		>
			<Form className={styles.form}>
				<h2 className={styles.formHeader}>Send message</h2>
				<MyTextInput
					id="name"
					name="name"
					type="text"
					placeholder="Your name"
				/>
				<MyTextInput
					id="email"
					name="email"
					type="email"
					placeholder="Your email"
				/>
				<MyTextInput
					id="text"
					name="text"
					as="textarea"
					className="textarea"
					placeholder="Your message"
				/>
				<MyCheckbox name="terms">
					<Link to="/policy" className={styles.link}>
						Do you agree to the Privacy Policy?
					</Link>
				</MyCheckbox>
				<button type="submit" className={styles.button}>
					Send
				</button>
			</Form>
		</Formik>
	);
};

export default MainForm;
