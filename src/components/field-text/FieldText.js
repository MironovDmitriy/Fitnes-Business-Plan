import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';

const FieldText = ({
	id,
	name,
	type,
	value,
	onChange,
	label,
	unit,
	isDisabled,
	...rest
}) => {

	const handleChange = e => {
		const value = e.target.value;
		onChange(value, name);
	};

	return (
			<Box width="70%">
				<TextField
					id={id}
					name={name}
					type={type}
					value={value}
					onChange={handleChange}
					variant="outlined"
					label={label}
					disabled={isDisabled ? true : false}
					InputProps={{
						endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
					}}
				/>
			</Box>
	);
};

FieldText.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	unit: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

FieldText.defaultProps = {
	id: '',
	name: '',
	value: '',
	onChange: () => {},
};

export default FieldText;