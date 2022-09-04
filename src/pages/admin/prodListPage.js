import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProdItem from '../../components/admin/prodList/ProdItem';
import Pagination from '../../components/admin/prodList/Pagination';
import AdminService from '../../services/admin/adminService';

const AdminProdListPage = () => {
    const [curData, setCurData] = useState([]);
    const [pageLength, setPageLength] = useState(null);
    const [curPage, setCurPage] = useState(1);

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

    useEffect(() => {
        getProdList();
    }, [curPage]);

    return (
        <ProdListPageMain>
            <ProdItemContainer>
                {curData.map((it, idx) => (
                    <ProdItem
                        key={it.id}
                        curData={curData}
                        setCurData={setCurData}
                        data={it}
                        idx={idx}
                    >
                        {' '}
                    </ProdItem>
                ))}
            </ProdItemContainer>
            <Pagination pageLength={pageLength} curPage={curPage} setCurPage={setCurPage} />
        </ProdListPageMain>
    );
};
export default AdminProdListPage;

const ProdListPageMain = styled.main`
    position: relative;
    width: 100%;
    margin: 30px auto;
`;
const ProdItemContainer = styled.div`
    height: 90vh;
    margin: 0 atuo;
    overflow-y: scroll;
`;
