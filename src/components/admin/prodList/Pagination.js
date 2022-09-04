import styled from 'styled-components';

const Pagination = ({ pageLength, curPage, setCurPage }) => {
    const onClickDecrease = () => {
        setCurPage(prev => parseInt(prev) - 1);
    };

    const onClickIncrease = () => {
        setCurPage(prev => parseInt(prev) + 1);
    };

    return (
        <PaginationContainer>
            <PaginationWrapper>
                <PaginationButton onClick={onClickDecrease} disabled={parseInt(curPage) === 1}>
                    &lt;
                </PaginationButton>
                {Array(pageLength)
                    .fill()
                    .map((_, i) => (
                        <PaginationButton
                            key={i + 1}
                            onClick={() => setCurPage(i + 1)}
                            disabled={parseInt(curPage) === i + 1}
                        >
                            {i + 1}
                        </PaginationButton>
                    ))}
                <PaginationButton
                    onClick={onClickIncrease}
                    disabled={parseInt(curPage) === pageLength}
                >
                    &gt;
                </PaginationButton>
            </PaginationWrapper>
        </PaginationContainer>
    );
};

export default Pagination;

const PaginationContainer = styled.section`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-top: 20px;
    background-color: #eee;
    margin: 0 auto;
`;
const PaginationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
`;
const PaginationButton = styled.button`
    background-color: #fff;
    padding: 5px 15px;
    :disabled {
        background-color: #eee;
    }
`;
