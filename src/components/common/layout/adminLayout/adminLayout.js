import styled from 'styled-components';
import AdminLayoutHeader from './header/header';
import AdminLayoutSide from './side/side';

const AdminLayout = ({ children, type }) => {
    return (
        <>
            <AdminLayoutHeader />
            <div style={{ display: 'flex' }}>
                {type !== 'login' && <AdminLayoutSide />}
                {children}
            </div>
        </>
    );
};
export default AdminLayout;
