import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles({
	root: {
		// margin: '10px 0 0 0',
		// border: '1px dashed orange',
	},
});

const GridContainer = ({
	direction,
	alignItems,
	justify,
	children,
	...rest,
}) => {
	const classes = useStyle();

	return (
		<Grid
			container
			direction={direction}
			alignItems={alignItems}
			justify={justify}
			className={classes.root}
		>
			{children}
		</Grid>
	);
};

GridContainer.propTypes = {
	direction: PropTypes.string,
	alignItems: PropTypes.string,
	justify: PropTypes.string,
	children: PropTypes.node,
}

GridContainer.defaultProps = {
	direction: 'row',
	alignItems: 'flex-start',
	justify: 'flex-start',
	children: null,
};

export default GridContainer;
