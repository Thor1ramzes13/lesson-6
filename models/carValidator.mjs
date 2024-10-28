class CarValidator {
	static carValidationSchema = {
		brand: {
			isLength: {
				options: { min: 2, max: 20 },
				notEmpty: { errorMessage: 'Brand is required' },
				errorMessage: 'Brand must be between 2 and 20 characters',
			},
			trim: true,
			escape: true,
		},
		model: {
			isLength: {
				options: { min: 2, max: 20 },
				notEmpty: { errorMessage: 'Model is required' },
				errorMessage: 'Model must be between 2 and 20 characters',
			},
			trim: true,
			escape: true,
		},
		transmission: {
			isLength: {
				options: { min: 4, max: 8 },
				notEmpty: { errorMessage: 'Transmission is required' },
				errorMessage: 'Transmission must be between 4 and 8 characters',
			},
			trim: true,
			escape: true,
		},
		year: {
			isNumeric: {
				errorMessage: 'Year must be a number',
			},
			notEmpty: { errorMessage: 'Year is required' },
			trim: true,
			escape: true,
		},
		number: {
			isLength: {
				options: { min: 6, max: 6 },
				notEmpty: { errorMessage: 'Number is required' },
				errorMessage: 'Number must be 6 characters',
			},
			trim: true,
			escape: true,
		},
		image: {
			trim: true,
			escape: true,
		},
		price: {
			isNumeric: {
				errorMessage: 'Price must be a number',
			},
			notEmpty: { errorMessage: 'Price is required' },
			trim: true,
			escape: true,
		},
	}
}

export default CarValidator