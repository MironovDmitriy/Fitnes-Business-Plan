import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const FieldRadio = ({groupName, value, values, onChange, ...rest}) => {

	const handleChange = e => {
		const value = e.target.value;
		onChange(value, groupName);
	};

	return (
		<RadioGroup
			name={groupName}
			value={value}
			onChange={handleChange}
		>
			{values.map((item, index) => (
				<FormControlLabel
					key={index}
					value={item.value}
					control={<Radio />}
					label={item.label}
				/>
			))}
		</RadioGroup>
	);
};

FieldRadio.propTypes = {
	groupName: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	values: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
};

FieldRadio.defaultProps = {
	groupName: '',
	value: '',
	values: [],
	onChange: () => {},
};

export default FieldRadio;
