import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('https:/fruitte.co/api/goods?page=5')
            .then(({ data }) => {
                console.log('goodsAll', data);
                setProducts(data.data);
                console.log('goodsAll', products);
            })
            .catch(err => {
                console.error(err);
                throw new Error(err);
            });
    }, []);
    return (
        <Container>
            <ProductList>
                {products.map(product => {
                    const { id, prodName, prodImg, prodPrice, salePrice } = product;
                    return (
                        <ProductItem key={id}>
                            <Link to={`/fruitstore/${id}`}>
                                <ProductImg src={prodImg.src} alt={prodName} />
                                <ProductInfo>
                                    <ProductName>{prodName}</ProductName>
                                    <p>{prodPrice}</p>
                                </ProductInfo>
                            </Link>
                        </ProductItem>
                    );
                })}
            </ProductList>
        </Container>
    );
};

const Container = styled.main`
    padding: 100px;
    margin: 0 auto;
    padding-bottom: 100px;
`;

const ProductList = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1920px;
`;

const ProductItem = styled.li`
    width: calc(25% - 17px);
    margin: 0 8.5px;
`;

const ProductImg = styled.img`
    width: 100%;
    vertical-align: top;
`;

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`;

const ProductName = styled.h3`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
`;

export default ProductPage;
