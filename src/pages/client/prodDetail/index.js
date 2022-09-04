import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

//상품 이름 개수 가격 정보

const ProdDetail = () => {
    const { id } = useParams();
    const [prodInfo, setProdInfo] = useState();
    const [subImgSrc, setSubImgSrc] = useState('');
    const [overSubImg, setOverSubImg] = useState(true);
    const [prodCount, setProdCount] = useState(1);
    console.log(prodInfo);

    useEffect(() => {
        axios
            .get(`https:/fruitte.co/api/goods/${id}`)
            .then(res => setProdInfo(res.data))
            .catch(err => {
                console.error(err);
                throw new Error(err);
            });
    }, []);

    if (!prodInfo) {
        return <>로딩중입니다</>;
    }

    const onSubImg = src => {
        setOverSubImg(false);
        setSubImgSrc(src);
    };

    const onOffSubImg = () => {
        setOverSubImg(true);
    };

    const onMinusCount = () => {
        if (prodCount > 1) setProdCount(prev => prev - 1);
        else setProdCount(1);
    };

    const onPlusCount = () => setProdCount(prev => prev + 1);

    const onBuyAction = () => {
        sessionStorage.setItem('price', prodInfo.salePrice * prodCount);
        sessionStorage.setItem('prodName', prodInfo.prodName);
        sessionStorage.setItem('prodCount', prodCount);
        
    };

    const onSale = prodInfo.salfFlag === 1;
    const onBest = prodInfo.soldFlag === 1;
    const onMd = prodInfo.mdFlag === 1;

    return (
        <Container>
            <WrapProdImg>
                <ProdMainImg src={overSubImg ? prodInfo.prodImg.src : subImgSrc} alt="제품이미지" />
                <WrapSubImg>
                    {prodInfo.subImg.map(el => (
                        <ProdSubImg
                            key={el.src}
                            src={el.src}
                            alt="제품추가이미지"
                            length={prodInfo.subImg.length}
                            onMouseOver={() => onSubImg(el.src)}
                            onMouseOut={onOffSubImg}
                        />
                    ))}
                </WrapSubImg>
            </WrapProdImg>
            <WrapProdInfo>
                <WrapProdInfoHeader>
                    <ProdName>{prodInfo.prodName}</ProdName>
                    {onSale && <SaleIcon>Sale</SaleIcon>}
                    {onBest && <BestIcon>Best</BestIcon>}
                    {onMd && <MdIcon>MD</MdIcon>}
                    <ProdSalePrice>{prodInfo.salePrice}원</ProdSalePrice>
                    <ProdPrice>{prodInfo.prodPrice}원</ProdPrice>
                </WrapProdInfoHeader>
                <WrapProdPayment>
                    수량
                    <WrapSpinnerBox>
                        <SpinnerBoxMinus onClick={onMinusCount}>-</SpinnerBoxMinus>
                        <SpinnerBoxNumber>{prodCount}</SpinnerBoxNumber>
                        <SpinnerBoxPlus onClick={onPlusCount}>+</SpinnerBoxPlus>
                    </WrapSpinnerBox>
                    <ProdPayment>총 상품금액{prodInfo.salePrice * prodCount}원</ProdPayment>
                </WrapProdPayment>
                <BuyButton onClick={onBuyAction}>구매하기</BuyButton>
            </WrapProdInfo>
        </Container>
    );
};

export default ProdDetail;

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    border: 10px solid black;
`;
const WrapProdImg = styled.div`
    width: 50%;
    height: 70%;
    border: 1px solid red;
`;
const ProdMainImg = styled.img`
    width: 100%;
    height: 70%;
`;

const WrapSubImg = styled.div`
    display: flex;
    width: 100%;
    height: 30%;
`;
const ProdSubImg = styled.img`
    width: ${props => 100 / props.length}%;
    height: 100%;
    object-fit: cover;
`;
const WrapProdInfo = styled.div`
    width: 50%;
    height: 70%;
    border: 1px solid green;
`;

const WrapProdInfoHeader = styled.div`
    border-bottom: 1px solid silver;
`;
const ProdName = styled.div`
    width: 100%;
`;
const SaleIcon = styled.div`
    background: #fe5356;
    border: 1px solid #fe5356;
    width: 30px;
    color: white;
`;
const BestIcon = styled.div`
    background: #fff;
    color: #000;
    border: 1px solid #ccc;
    width: 35px;
    text-align: center;
`;
const MdIcon = styled(BestIcon)``;
const ProdPrice = styled.div`
    width: 100%;
    text-decoration: line-through;
`;
const ProdSalePrice = styled.div`
    width: 100%;
`;
const WrapProdPayment = styled.div`
    border: 1px solid black;
    height: 100px;
`;
const WrapSpinnerBox = styled.div`
    border: 1px solid black;
    height: 50%;
`;
const SpinnerBoxMinus = styled.button`
    border: 1px solid black;
`;
const SpinnerBoxNumber = styled.span`
    border: 1px solid black;
`;
const SpinnerBoxPlus = styled(SpinnerBoxMinus)``;

const ProdPayment = styled.div`
    border: 1px solid black;
    height: 50%;
`;
const BuyButton = styled.button``;
