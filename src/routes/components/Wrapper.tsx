import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { isMobile } from 'react-device-detect';

type WrapperProps = {
    children: object
}

const useStyles = makeStyles(() => ({
    main: {
        marginTop: `${isMobile ? 66.2 : 96.5}px`
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