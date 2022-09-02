import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Main from './pages/client/main/main';

const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
