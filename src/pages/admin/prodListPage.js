import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import ProdItem from '../../components/admin/prodList/ProdItem';
import Pagination from '../../components/admin/prodList/Pagination';
import SearchHeader from '../../components/admin/prodList/SearchHeader';
import AdminService from '../../services/admin/adminService';

const AdminProdListPage = () => {
    const [curData, setCurData] = useState([]);
    const [pageLength, setPageLength] = useState(null);
    const [curPage, setCurPage] = useState(1);

    const getProdList = async () => {
        try {
            const res = await AdminService.get(curPage);

            setCurData(res.data.data);
            setPageLength(res.data.totalPage);
            setCurPage(res.data.currentPage);
        } catch (err) {
            console.error(err);
            throw new Error(err);
        }
    };

    const onEditShowFlag = useCallback(
        async (showFlag, id) => {
            try {
                const res = await AdminService.edit({ showFlag, id });
                if (res.status === 200) {
                    const data = [...curData];
                    data.find(v => v.id === res.data.id).showFlag = res.data.showFlag;
                    setCurData(data);
                }
            } catch (err) {
                console.error(err);
                throw new Error(err);
            }
        },
        [curData],
    );

    const onRemoveProdItem = async id => {
        try {
            const res = await AdminService.remove(id);
            if (res.status === 200) {
                const resId = res.data.slice(1);
                const newData = curData.filter(it => it.id !== resId);
                setCurData(newData);
            }
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
            <SearchHeader />
            <ProdItemContainer>
                <ul>
                    {curData.map(it => (
                        <ProdItem
                            key={it.id}
                            onEditShowFlag={onEditShowFlag}
                            onRemoveProdItem={onRemoveProdItem}
                            data={it}
                        ></ProdItem>
                    ))}
                </ul>
            </ProdItemContainer>
            <Pagination pageLength={pageLength} curPage={curPage} setCurPage={setCurPage} />
        </ProdListPageMain>
    );
};
export default AdminProdListPage;

const ProdListPageMain = styled.main`
    position: relative;
    width: calc(100% - 240px);
    margin: 30px auto;
`;
const ProdItemContainer = styled.div`
    height: calc(100vh - 180px);
    padding-bottom: 100px;
    margin: 0 atuo;
    overflow-y: scroll;
    & > ul {
        width: 70%;
        margin: 0 auto;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`;
