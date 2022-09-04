import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLoginPage from './pages/admin/loginPage';
import AdminProdListPage from './pages/admin/prodListPage';
import AdminProdPage from './pages/admin/prodPage';
import AdminProdListPage from './pages/admin/prodListPage';
import AdminProdPage from './pages/admin/prodPage';
import GlobalStyle from './styles/global';
import AdminRoute from './utils/adminRoute';
import AdminRoute from './utils/adminRoute';
import Main from './pages/client/main/main';
import ProductPage from './pages/client/ProductListPage';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/fruitstore" element={<ProductPage />} />
                    <Route element={<AdminRoute />}>
                        <Route path="/admin" element={<AdminLoginPage />} />
                        <Route exact path="/admin/prodList" element={<AdminProdListPage />} />
                        <Route exact path="/admin/prod" element={<AdminProdPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default Router;
