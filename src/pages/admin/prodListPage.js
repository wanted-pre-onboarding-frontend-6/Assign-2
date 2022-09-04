import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProdItem from '../../components/admin/prodList/ProdItem';
import AdminService from '../../services/admin/adminService';

const AdminProdListPage = () => {
    const [curData, setCurData] = useState([]);
    const [pageLength, setPageLength] = useState(null);
    const [curPage, setCurPage] = useState(1);

    useEffect(() => {
        const getProdList = async () => {
            try {
                const res = await AdminService.get(curPage);
                // 삭제 예정
                console.log(res.data);

                setCurData(res.data.data);
                setPageLength(res.data.totalPage);
                setCurPage(res.data.currentPage);
            } catch (err) {
                console.error(err);
                throw new Error(err);
            }
        };
        getProdList();
    }, [curPage]);

    return (
        <ProdListPageMain>
            <ProdItemContainer>
                {curData.map(it => (
                    <ProdItem key={it.id} data={it}>
                        {' '}
                    </ProdItem>
                ))}
            </ProdItemContainer>
        </ProdListPageMain>
    );
};
export default AdminProdListPage;

const ProdListPageMain = styled.main`
    width: 100%;
    margin: 30px 30px;
`;
const ProdItemContainer = styled.div`
    margin: 0 atuo;
`;
