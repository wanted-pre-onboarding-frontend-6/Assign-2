import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import axios from 'axios';
import { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        // msw example
        // baseURL https:/fruitte.co/api
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
};

export default App;
