import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLoginPage from './pages/admin/loginPage';
import AdminProdListPage from './pages/admin/prodListPage';
import AdminProdPage from './pages/admin/prodPage';
import GlobalStyle from './styles/global';
import AdminRoute from './utils/adminRoute';
import Main from './pages/client/main/main';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    {/* client */}
                    <Route path="/" element={<Main />} />
                    {/* admin */}
                    <Route path="/admin" element={<AdminLoginPage />} />
                    <Route element={<AdminRoute />}>
                        <Route exact path="/admin/prodList" element={<AdminProdListPage />} />
                        <Route exact path="/admin/prod" element={<AdminProdPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default Router;
