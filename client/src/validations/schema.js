import * as yup from 'yup';

export const addClientValidations = yup.object().shape({
	clientName: yup
		.string()
		.required('client name is required')
		.min(5, 'client name must be at least 5 characters'),
	address: yup
		.string()
		.required('address is required')
		.min(5, 'address must be at least 5 characters'),
});

export const addUserValidations = yup.object().shape({
	name: yup
		.string()
		.required('name is required')
		.min(5, 'name must be at least 2 characters'),
	email: yup
		.string()
		.email('email is not a valid email address')
		.required('email is required')
		.min(5, 'email must be at least 5 characters'),
	isAdmin: yup.boolean().required('admin field is required'),
	roles: yup.string().oneOf(['Office Worker', 'Customer Service', 'Remote']),
});
