import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
	root: {
		// border: '1px dashed blue',
		justifyContent: 'flex-start',
		height: '150px',
		// margin: '10px 0 0 0',
	},
}));

const GridRow = ({xs, sm, md, lg, xl, children, ...rest}) => {
	const classes = useStyle();

	return (
		<Grid
			xs={xs}
			sm={sm}
			md={md}
			lg={lg}
			xl={xl}
			item
			container
			className={classes.root}
		>
			{children}
		</Grid>
	);
};

GridRow.propTypes = {
	xs: PropTypes.number,
	sm: PropTypes.number,
	md: PropTypes.number,
	lg: PropTypes.number,
	xl: PropTypes.number,
}

export default GridRow;