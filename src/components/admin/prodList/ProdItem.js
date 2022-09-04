import styled from 'styled-components';
import CommonButton from '../common/button';
import CommonLabel from '../common/label';
import AdminService from '../../../services/admin/adminService';
import { useState } from 'react';

const ProdItem = ({ curData, setCurData, data, idx }) => {
    const changedPrice = data.salePrice.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
    const slicedText = data.prodDetail.slice(0, 100);
    const [showFlag, setShowFlag] = useState(data.showFlag);
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

    const onEditItemShow = async () => {
        try {
            const res = await AdminService.edit(data.id, { showFlag: !showFlag });
            if (res.status === 200) {
                setShowFlag(prev => !prev);
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
                <CommonLabel
                    text={showFlag ? '노출 중' : '비노출 중'}
                    color="#fff"
                    bgColor="#61CA3C"
                />
                <ShowButtonWrapper>
                    <label htmlFor="showInput">{showFlag ? '숨겨놓기' : '보여주기'}</label>
                    <input
                        id="showInput"
                        type="checkbox"
                        checked={showFlag ? false : true}
                        onChange={onEditItemShow}
                    ></input>
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
    width: 70%;
    margin-bottom: 20px;
    border: 1px solid;
    background-color: #fff;
`;
const ProdItemHeader = styled.div`
    display: flex;
    align-items: center;
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
    > label {
        display: inline-block;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: #d9d9d9;
        cursor: pointer;
    }
    > input {
        position: absolute;
        overflow: hidden;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        border: 0;
        clip: rect(0, 0, 0, 0);
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
