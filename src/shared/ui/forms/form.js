import React from 'react';
import styles from '../forms/form.module.scss';

import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, as, ...props }) => {
	const [field, meta] = useField(props);
	const Component = as || 'input';
	return (
		<>
			<label htmlFor={props.name}>{label}</label>
			<Component
				{...props}
				{...field}
				className={styles[props.className] || ''}
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
				<input type="checkbox" {...props} {...field} />
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
				name: Yup.string()
					.min(2, 'Введите не менее 2 символов')
					.required('Обязательно для заполнения'),

				email: Yup.string()
					.email('Некорректно введен email')
					.matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, 'Введите корректный email')
					.required('Обязательно для заполнения'),

				text: Yup.string()
					.min(10, 'Введите не менее 10 символов')
					.required('Обязательно для заполнения'),

				terms: Yup.boolean()
					.required('Необходимо согласие!')
					.oneOf([true], 'Необходимо согласие!'),
			})}
			onSubmit={(values) => {}} // для отправки формы на БУДУЩЕЕ
		>
			<Form className={styles.form}>
				<h2>Можете написать мне</h2>

				<MyTextInput label="Ваше имя" id="name" name="name" type="text" />

				<MyTextInput label="Ваша почта" id="email" name="email" type="email" />

				<MyTextInput
					label="Ваше сообщение"
					id="text"
					name="text"
					as="textarea"
					className="textarea"
				/>

				<MyCheckbox name="terms">
					Соглашаетесь с политикой конфиденциальности?
				</MyCheckbox>

				<button type="submit">Отправить</button>
			</Form>
		</Formik>
	);
};

export default MainForm;
