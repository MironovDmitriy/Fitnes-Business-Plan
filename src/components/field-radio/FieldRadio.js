import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {description} from 'proj/constants/servicesDescription';
import Box from '@material-ui/core/Box';

const styles = {
	margin: '0 0 0 10px',
};

const HelpContainer = styled.div`
	font-size: 0.7em;
`

const FieldRadio = ({
	groupName,
	value,
	values,
	onChange,
	helpType,
	isDisabled,
	...rest,
}) => {
	const handleChange = e => {
		const value = e.target.value;
		onChange(value, groupName);
	};

	const getHelpInfo = (list, type) => type ? list.find(item => item.label === type).content : '';

	return (
		<Box style={styles}>
			<RadioGroup
				name={groupName}
				value={value}
				onChange={handleChange}
			>
				{values.map((item, index) => (
					<FormControlLabel
						key={index}
						disabled={isDisabled ? true : false}
						value={item.value}
						control={<Radio />}
						label={item.label}
					/>
				))}
			</RadioGroup>
			<HelpContainer>
				<div>{getHelpInfo(description, helpType)}</div>
			</HelpContainer>
		</Box>
	);
};

FieldRadio.propTypes = {
	groupName: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	values: PropTypes.array.isRequired,
	helpType: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

FieldRadio.defaultProps = {
	helpType: '',
};

export default FieldRadio;
