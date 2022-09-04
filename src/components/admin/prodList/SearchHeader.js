import styled from 'styled-components';
import CommonLabel from '../common/label';

const SearchHeader = () => {
    return (
        <SearchHeaderContainer>
            <SerchInputWrapper>
                <input></input>
                <button>검색</button>
            </SerchInputWrapper>
            <KeywordsWrapper>
                <CommonLabel text="비노출" />
                <CommonLabel text="신상품" />
                <CommonLabel text="MD" />
                <CommonLabel text="판매량" />
                <CommonLabel text="노출" />
                <CommonLabel text="SALE" />
                <CommonLabel text="SOLD OUT" />
                <CommonLabel text="구매량" />
            </KeywordsWrapper>
        </SearchHeaderContainer>
    );
};

export default SearchHeader;

const SearchHeaderContainer = styled.header`
    position: relative;
    display: flex;
    width: 80%;
    margin-bottom: 20px;
    align-items: center;
    /* justify-content: space-between; */
`;

const SerchInputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 40px;
    background-color: #fff;
    > input {
        width: 80%;
        margin-left: 10px;
        border: none;
    }
    > button {
        height: 100%;
        width: 20%;
        color: #fff;
        font-weight: bold;
        background-color: green;
    }
`;

const KeywordsWrapper = styled.div`
    width: 300px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
`;
