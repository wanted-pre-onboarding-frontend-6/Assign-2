import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ProductList({ products, offset, postsPerPage }) {
    return (
        <Container>
            {products.slice(offset, offset + postsPerPage).map(product => {
                const { id, prodName, prodImg, originalPrice, salePrice } = product;
                return (
                    <ProductItem key={id}>
                        <Link to={`/fruitstore/${id}`}>
                            <ProductImg src={prodImg.src} alt={prodName} />
                            <ProductInfo>
                                <ProductName>{prodName}</ProductName>
                                <PriceBlock>
                                    <ProductPrice>{salePrice}원</ProductPrice>
                                    <OriginalPrice>{originalPrice}원</OriginalPrice>
                                </PriceBlock>
                                <BoxBlock>
                                    <SaleBox>SALE</SaleBox>
                                    <BestBox>BEST</BestBox>
                                </BoxBlock>
                            </ProductInfo>
                        </Link>
                    </ProductItem>
                );
            })}
        </Container>
    );
}

const Container = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width: 1360px;
    margin: 0 auto;
`;

const ProductItem = styled.li`
    display: flex;
    justify-content: center;
    margin: 0 8.5px;
    height: 600px;
`;

const ProductImg = styled.img`
    width: 258px;
    height: 340px;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    margin-bottom: 40px;
`;

const ProductName = styled.h3`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    margin-top: 6px;
    line-height: 18px;
`;

const PriceBlock = styled.div`
    margin-top: 8px;
    line-height: 22px;
    font-size: 14px;
    font-weight: 700;
`;

const ProductPrice = styled.span``;

const OriginalPrice = styled.del`
    display: inline-block;
    margin-left: 8px;
    height: 21px;
    color: #a4a4a4;
    font-size: 13px;
`;

const BoxBlock = styled.div`
    display: flex;
    align-items: center;
    margin-top: 18px;
`;

const BoxStyled = styled.i`
    width: 48px;
    height: 20px;
    display: inline-block;
    margin-left: 4px;
    padding: 0 10px;
    height: 20px;
    line-height: 18px;
    font-size: 11px;
`;

const SaleBox = styled(BoxStyled)`
    background: ${({ theme }) => theme.mainColor};
    color: #fff;
`;

const BestBox = styled(BoxStyled)`
    border: 1px solid ${({ theme }) => theme.mainColor};
    color: ${({ theme }) => theme.mainColor};
`;

export default ProductList;
