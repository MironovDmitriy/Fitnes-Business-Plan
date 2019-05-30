import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const styles = {
	margin: '0 0 0 10px',
};

const AcceptButton = ({
	label,
	name,
	type,
	onClick,
	...rest,
}) => {

	return (
			<Box style={styles}>
				<Button
					variant={type}
					color="primary"
					name={name}
					onClick={onClick}
					size="large"
				>
					{label}
				</Button>
			</Box>
	);
};

AcceptButton.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default AcceptButton;
