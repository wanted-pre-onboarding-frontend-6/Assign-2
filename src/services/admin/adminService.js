import { axiosApiInstance } from '../../utils/axios';

export default class AdminService {
    static get(curPage) {
        const res = axiosApiInstance.get(`/admin/goods?page=${curPage}`);
        return res;
    }
    static remove(idx) {
        const res = axiosApiInstance.delete(`/admin/goods/:${idx}`)
        return res;
    }
}
