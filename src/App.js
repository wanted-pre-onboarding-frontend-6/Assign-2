import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import axios from 'axios';
import { useEffect } from 'react';
import Router from './router';

const App = () => {
    useEffect(() => {
        // msw example
        // baseURL https:/fruitte.co/api

        // 상품 상세 조회 ID 값에 따라 데이터와 id값 다르게 반환
        axios
            .get('https:/fruitte.co/api/goods/5')
            .then(response => console.log('goodsDetail', response))
            .catch(err => {
                console.error(err);
                throw new Error(err);
            });

        // 상품 전체 조회 page 값에 따라 page 데이터 다르게 반환
        axios
            .get('https:/fruitte.co/api/goods?page=5')
            .then(response => console.log('goodsAll', response))
            .catch(err => {
                console.error(err);
                throw new Error(err);
            });

        // 어드민 상품 상세조회  page 값에 따라 page 데이터 다르게 반환
        axios
            .get('https:/fruitte.co/api/admin/goods?page=5')
            .then(response => console.log('admin', response))
            .catch(err => {
                console.error(err);
                throw new Error(err);
            });

        // 어드민 상품 노출 수정 req.body에 노출 수정값 0[비노출],1[노출]을 보내면 해당 값 그대로 반환
        axios
            .put('https:/fruitte.co/api/admin/goods/:goodsId/showflag', { showFlag: 0 })
            .then(response => console.log('show', response))
            .catch(err => {
                console.error(err);
                throw new Error(err);
            });

        // 어드민 상품 삭제 주소에 삭제 id 값을 보내면 삭제값 그대로 반환
        axios
            .delete('https:/fruitte.co/api/admin/goods/:5')
            .then(response => console.log('delete', response))
            .catch(err => {
                console.error(err);
                throw new Error(err);
            });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Router />
        </ThemeProvider>
    );
};

export default App;
