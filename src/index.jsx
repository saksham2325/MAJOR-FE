import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

import './index.css';
import App from './App';
import configureStore from './store/index';
import reportWebVitals from './reportWebVitals';
import { index as index_const } from './constants/values';


// importing store
const store = configureStore();

ReactDOM.render(
    // using provider to make the store available to all the components inside
    <Provider store={store}>
        <React.StrictMode>
            <ToastProvider autoDismiss autoDismissTimeout={index_const.toastTimeout} placement="bottom-center">
                <App />
            </ToastProvider>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
