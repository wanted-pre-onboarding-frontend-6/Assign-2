import styled from 'styled-components';
import Button from '../../common/button/button';
import Input from '../../common/input/input';
import ProdTable from './table/prodTable';

const ProdOption = () => {
    return (
        <>
            <ProdOptionTemplate>
                상품 옵션
                <ProdOptionForm>
                    <Input width="70%" mainColor="#fff" subColor="#222" />
                    <span>
                        가격 <Input mainColor="#fff" subColor="#222" margin="0 8px" /> 원
                    </span>
                    <Button size="small" mainColor="#61CA3C" padding="1px" fontSzie="12px">
                        추가
                    </Button>
                </ProdOptionForm>
            </ProdOptionTemplate>
            <ProdTable type="option" />
        </>
    );
};
export default ProdOption;

const ProdOptionTemplate = styled.div`
    margin: 16px 0;
`;

const ProdOptionForm = styled.div`
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
`;
