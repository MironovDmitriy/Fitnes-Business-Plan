import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const FieldContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	margin: 5px 5px 5px 10px;
	padding: 3px 3px 3px 3px;
	width: 15vw;
`

const AcceptButton = ({label, name, type, onClick, ...rest}) => {

	return (
		<FieldContainer>
			<Box>
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
		</FieldContainer>
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
