import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
<<<<<<< HEAD
import Router from './router';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router />
        </ThemeProvider>
    );
=======
import axios from 'axios';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        // msw example
        // baseURL https:/fruitte.co/api/goods/5
        axios
            .get('https:/fruitte.co/api/goods/5')
            .then(response => console.log('goodsDetail', response))
            .catch(err => {
                console.error(err);
                throw new Error(err);
            });

        axios
            .get('https:/fruitte.co/api/goods?page=5')
            .then(response => console.log('goodsAll', response))
            .catch(err => {
                console.error(err);
                throw new Error(err);
            });

        axios
            .get('https:/fruitte.co/api/admin/goods?page=5')
            .then(response => console.log('admin', response))
            .catch(err => {
                console.error(err);
                throw new Error(err);
            });
    }, []);

    return <ThemeProvider theme={theme}></ThemeProvider>;
>>>>>>> main
}

export default App;
