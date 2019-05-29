import React from 'react';
import styled from 'styled-components';

const FieldContainer = styled.div`
	margin: 5px 5px 5px 5px;
	border: 1px dashed red;
	padding: 3px 3px 3px 3px;
	width: 10vw;
`

export default ({children}) => {
	return (
		<FieldContainer>
			{children}
		</FieldContainer>
	);
};