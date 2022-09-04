import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLoginPage from './pages/admin/loginPage';
import AdminProdListPage from './pages/admin/prodListPage';
import AdminProdPage from './pages/admin/prodPage';
import GlobalStyle from './styles/global';
import ClientRoute from './utils/ClientRoute';
import AdminRoute from './utils/adminRoute';
import Main from './pages/client/main/main';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route element={<ClientRoute />}>
                        <Route path="/" element={<Main />} />
                    </Route>
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
