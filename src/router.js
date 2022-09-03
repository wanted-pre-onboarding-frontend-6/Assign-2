import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminLoginPage from './pages/admin/loginPage';
import GlobalStyle from './styles/global';

const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/admin" element={<AdminLoginPage />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
