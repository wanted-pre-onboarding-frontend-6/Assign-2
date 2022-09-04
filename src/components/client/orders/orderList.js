import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';

export function OrderList() {
    const [orders, setOrders] = useState([]);
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();

    useEffect(() => {
        axios
            .get('https:/fruitte.co/api/goods/5')
            .then(response => {
                setOrders(response.data);
            })
            .catch(err => {
                console.error(err);
                throw new Error(err);
            });
    }, []);

    return (
        <>
            <OrderDate>
                {year}.{month}.{date}
            </OrderDate>
            <Order>
                <Category>
                    <tr>
                        <td>주문번호</td>
                        <td>주문정보</td>
                        <td>진행상태</td>
                    </tr>
                </Category>
                <tbody>
                    <tr>
                        <td>{orders.salePrice}</td>
                        <Product>
                            <Img src={orders.prodImg?.src} alt={orders.prodName} />
                            <Detail>
                                <div>{orders.prodName}</div>
                                <div>[옵션] {orders.prodName}</div>
                                <div>수량: {orders.id}개</div>
                                <div>{orders.prodPrice}원</div>
                            </Detail>
                        </Product>
                        <State>
                            <div>배송중</div>
                            <span>배송조회</span>
                        </State>
                    </tr>
                </tbody>
            </Order>
        </>
    );
}

const OrderDate = styled.div`
    border-top: solid;
    padding: 20px 0 10px 0;
    font-size: 18px;
    font-weight: bold;
`;

const Order = styled.table`
    border-style: solid;
    border-color: #f1f3f5;
    text-align: center;
    margin: auto;
    width: 900px;
`;

const Category = styled.thead`
    background-color: #f6f6f6;
    & td {
        padding: 10px;
    }
`;

const Product = styled.td`
    display: flex;
    text-align: left;
    margin: 25px 0;
`;

const Img = styled.img`
    width: 130px;
    height: 130px;
    margin-right: 20px;
`;

const State = styled.td`
 & > span {
    font-weight: bold;
    font-size: 12px;
    color: white;
    border-radius: 5px;
    background: ${props => props.theme.mainColor};
    padding: 3px;        
`;

const Detail = styled.div`
    div:nth-child(1) {
        font-weight: bold;
        font-size: 17px;
    }
    div:nth-child(2) {
        color: #575757;
        font-size: 13px;
        margin-bottom: 10px;
    }
    div:nth-child(3) {
        color: ${props => props.theme.mainColor};
        font-weight: bold;
        font-size: 13px;
    }
    div:nth-child(4) {
        font-weight: bold;
        font-size: 15px;
    }
`;
