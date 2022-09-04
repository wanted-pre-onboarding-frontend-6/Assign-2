import styled from 'styled-components';
import ProdImage from '../../components/admin/prod/prodImage/prodImage';
import ProdInfo from '../../components/admin/prod/prodinfo/prodInfo';
import ProdOption from '../../components/admin/prod/prodOption';
import ProdOrign from '../../components/admin/prod/prodOrigin';
import Button from '../../components/common/button/button';

const AdminProdPage = () => {
    return (
        <AdminProdContainer>
            <ProdInfo />
            <ProdImage />
            <ProdOption />
            <ProdOrign />
            <Button size="full" height="38px" margin="16px 0 0 0" mainColor="#61CA3C">
                등록
            </Button>
        </AdminProdContainer>
    );
};
export default AdminProdPage;

const AdminProdContainer = styled.div`
    margin: 0 auto;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;
