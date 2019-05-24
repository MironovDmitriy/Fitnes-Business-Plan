import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const AcceptButton = ({label, name, type, onClick, ...rest}) => {

	return (
		<Button
			variant={type}
			color="primary"
			name={name}
			onClick={onClick}
		>
			{label}
		</Button>
	);
};

AcceptButton.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

AcceptButton.defaultProps = {
	label: '',
	name: '',
	type: '',
	onClick: () => {},
};

export default AcceptButton;
