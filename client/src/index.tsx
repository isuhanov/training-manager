import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


import App from './App';
import reportWebVitals from './reportWebVitals';
import ComposeProvider, { createProvider } from './context/ComposeProvider';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/globals';
import { ModalProvider } from './context/ModalContext';
import { AuthProvider } from './context/AuthContext';
import { RecordsProvider } from './context/RecordsContext';


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

const providers = [
	createProvider(BrowserRouter),
	createProvider(LocalizationProvider, {dateAdapter: AdapterDayjs}),
	createProvider(ThemeProvider, {theme: theme}),
	createProvider(ModalProvider),
	createProvider(AuthProvider),
	createProvider(RecordsProvider),
]

root.render(
	<React.StrictMode>
		<ComposeProvider providers={providers}>
			<GlobalStyles />
			<App />
		</ComposeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
