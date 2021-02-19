import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import { lightTheme } from './config/theme/light';
import Routes from './routes';
import './index.css';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={lightTheme}>
			<Routes />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept();
}
