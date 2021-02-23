import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

type WrapperProps = {
    children: object
}

const useStyles = makeStyles(() => ({
    main: {
        marginTop: 96.5
    }
}))

const Wrapper = ({ children } : WrapperProps) => {
    const styles = useStyles();

	return (
		<Grid className={styles.main}>
			{children}
		</Grid>
	)
}

export default Wrapper;