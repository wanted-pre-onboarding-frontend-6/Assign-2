import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLoginPage from './pages/admin/loginPage';
import AdminProdListPage from './pages/admin/prodListPage';
import AdminProdPage from './pages/admin/prodPage';
import GlobalStyle from './styles/global';
import AdminRoute from './utils/adminRoute';
import Main from './pages/client/main/main';
import Orders from './pages/client/orders/orders';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route element={<AdminRoute />}>
                        <Route path="/admin" element={<AdminLoginPage />} />
                        <Route exact path="/admin/prodList" element={<AdminProdListPage />} />
                        <Route exact path="/admin/prod" element={<AdminProdPage />} />
                    </Route>
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default Router;
