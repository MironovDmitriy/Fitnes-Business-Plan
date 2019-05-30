import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles({
	root: {
		alignItems: 'center',
		// margin: '10px 0 0 0',
		minHeight: '130px',
		border: '1px solid red',
	},
});

const GridRow = ({
	xs,
	sm,
	md,
	lg,
	xl,
	children,
	...rest
}) => {
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
	children: PropTypes.node,
}

GridRow.defaultProps = {
	xs: 12,
	sm: 12,
	md: 12,
	lg: 12,
	xl: 12,
	children: null,
};

export default GridRow;