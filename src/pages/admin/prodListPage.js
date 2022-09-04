import { useEffect, useState } from 'react';
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
        <main>
            <div>
                {curData.map(it => (
                    <div key={it.id}> {it.id}</div>
                ))}
            </div>
        </main>
    );
};
export default AdminProdListPage;
