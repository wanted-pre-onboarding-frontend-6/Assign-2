import styled from 'styled-components';
import CommonButton from '../common/button';
import CommonLabel from '../common/label';
import AdminService from '../../../services/admin/adminService';

const ProdItem = ({ curData, setCurData, data, idx }) => {
    const changedPrice = data.salePrice.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    const slicedText = data.prodDetail.slice(0, 100);

    const onRemoveProdItem = async () => {
        try {
            const res = await AdminService.remove(idx);
            if (res.status === 200) {
                const newData = curData.filter((_, i) => i !== idx);
                setCurData(newData);
            }
        } catch (err) {
            console.error(err);
            throw new Error(err);
        }
    };

    return (
        <ProdItemWrapper>
            <ProdItemHeader>
                <h3>{data.prodName}</h3>
                <ShowButtonWrapper>
                    <span>노출</span>
                    <input type="checkbox" checked={data.showFlag ? true : false}></input>
                    <span>비노출</span>
                </ShowButtonWrapper>
            </ProdItemHeader>
            <ProdItemContent>
                <img src={data.prodImg.src}></img>
                <div>
                    <ProdItemName>상품명 : {data.prodName}</ProdItemName>
                    <ProdItemDetail>상품소개 : {slicedText}</ProdItemDetail>
                    <div>
                        <span>가격: {changedPrice}원</span>
                        <CommonLabel text="sale" color="#fff" bgColor="#F93939" />
                        {data.mdFlag === 0 ? null : <CommonLabel text="MD" bgColor="#fff" />}
                        {data.soldFlag === 0 ? null : (
                            <CommonLabel text="SOLD OUT" bgColor="#D9D9D9" />
                        )}
                    </div>
                </div>
                <ButtonWrapper>
                    <CommonButton text="수정" color="#61CA3C" bgColor="#fff" />
                    <CommonButton
                        text="삭제"
                        color="#fff"
                        bgColor="#61CA3C"
                        onClick={onRemoveProdItem}
                    />
                </ButtonWrapper>
            </ProdItemContent>
        </ProdItemWrapper>
    );
};

export default ProdItem;

const ProdItemWrapper = styled.li`
    width: 80%;
    margin-bottom: 20px;
    border: 1px solid;
`;
const ProdItemHeader = styled.div`
    display: flex;
    position: relative;
    padding: 10px 30px;
    border-bottom: 1px solid;
    > h3 {
        font-weight: bold;
    }
`;

const ShowButtonWrapper = styled.div`
    position: absolute;
    right: 30px;
    > span {
        font-size: 12px;
    }
`;

const ProdItemContent = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    padding: 10px 30px;
    > img {
        width: 100px;
        height: 100px;
        margin-right: 30px;
    }
`;

const ProdItemName = styled.span`
    font-weight: bold;
`;

const ProdItemDetail = styled.div`
    color: #a8a8a8;
`;

const ButtonWrapper = styled.div`
    position: absolute;
    right: 30px;
    bottom: 20px;
`;
