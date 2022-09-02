import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/global';

const Router = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<></>} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
