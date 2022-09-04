import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pagination from '../../components/client/productList/Pagination';
import ProductList from '../../components/client/productList/ProductList';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 12;
    const numberOfProducts = products.length;
    const numberOfPages = Math.ceil(numberOfProducts / postsPerPage);
    const offset = (currentPage - 1) * postsPerPage;

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
            <ProductList products={products} postsPerPage={postsPerPage} offset={offset} />
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                numberOfPages={numberOfPages}
            />
        </Container>
    );
};

const Container = styled.main`
    padding: 100px;
    padding-bottom: 100px;
    margin: 0 auto;
`;

export default ProductPage;
