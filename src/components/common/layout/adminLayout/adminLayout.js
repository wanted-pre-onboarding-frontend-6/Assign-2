import styled from 'styled-components';
import AdminLayoutHeader from './header/header';
import AdminLayoutSide from './side/side';

const AdminLayout = ({ children, type }) => {
    return (
        <>
            <AdminLayoutHeader />
            <>
                {type !== 'login' && <AdminLayoutSide />}
                {children}
            </>
        </>
    );
};
export default AdminLayout;
