import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';

const styles = {
	width: '8vw',
	margin: '0 0 0 10px',
};

const FieldCheckbox = ({
	label,
	checked,
	name,
	onChange,
	...rest,
}) => {
	const handleChange = () => {
		const value = !checked;
		onChange(value, name);
	};

	return (
		<Box style={styles}>
			<FormControlLabel
				control={
					<Checkbox
						checked={checked}
						onChange={handleChange}
					/>}
				label={label}
			/>
		</Box>
	);
};

FieldCheckbox.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default FieldCheckbox;
