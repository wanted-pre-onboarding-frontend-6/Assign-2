import styled from 'styled-components';
import { AdminSubject } from '../../../styles/common';
import Button from '../../common/button/button';
import Input from '../../common/input/input';
import ProdTable from './table/prodTable';

const ProdOrign = () => {
    return (
        <>
            <ProdOptionTemplate>
                <AdminSubject>상품 제공 공시</AdminSubject>
                <ProdOptionForm>
                    <Input
                        width="20%"
                        mainColor="#fff"
                        subColor="#222"
                        placeholder="--명칭--"
                        style={{ textAlign: 'center' }}
                    />
                    <span>
                        <Input width="760px" mainColor="#fff" subColor="#222" margin="0 8px" />
                    </span>
                    <Button size="small" mainColor="#61CA3C" padding="1px" fontSzie="12px">
                        추가
                    </Button>
                </ProdOptionForm>
            </ProdOptionTemplate>
            <ProdTable type="origin" />
        </>
    );
};
export default ProdOrign;

const ProdOptionTemplate = styled.div`
    margin: 16px 0;
`;

const ProdOptionForm = styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
`;
