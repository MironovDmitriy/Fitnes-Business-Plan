import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Box from '@material-ui/core/Box';

const styles = {
	// width: '65%',
	width: '235px',
	margin: '0 0 0 10px',
};

const FieldText = ({
	id,
	name,
	type,
	value,
	onChange,
	label,
	unit,
	isDisabled,
	...rest,
}) => {
	const handleChange = e => {
		const value = e.target.value;
		onChange(value, name);
	};

	return (
		<Box style={styles}>
			<TextField
				id={id}
				name={name}
				type={type}
				value={value}
				onChange={handleChange}
				variant="outlined"
				label={label}
				disabled={isDisabled}
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
	unit: '',
}

export default FieldText;