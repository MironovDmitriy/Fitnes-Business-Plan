import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const FieldCheckbox = ({label, checked, name, onChange, ...rest}) => {

	const handleChange = () => {
		const value = !checked;
		onChange(value, name);
	};

	return (
		<FormControlLabel
			control={
				<Checkbox
					checked={checked}
					onChange={handleChange}
				/>}
			label={label}
		/>
	);
};

FieldCheckbox.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
};

FieldCheckbox.defaultProps = {
	checked: false,
	name: '',
	onChange: () => {},
};

export default FieldCheckbox;
