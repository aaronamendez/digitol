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
