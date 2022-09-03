import styled from 'styled-components';

const SideList = () => {
    return (
        <ListTemplate>
            <li>
                <p>
                    상품관리 <span></span>
                </p>
                <ul>
                    <li>- 상품목록</li>
                    <li>- 상품등록</li>
                </ul>
            </li>
            <li>
                <p>
                    회원관리 <span></span>
                </p>
                <span></span>
            </li>
        </ListTemplate>
    );
};
export default SideList;

const ListTemplate = styled.ul`
    width: 100%;
    font-size: 20px;
    color: ${({ theme }) => theme.subColor};
    margin-top: 32px;

    & > li {
        & > p {
            padding-left: 16px;
        }

        & > ul {
            font-size: 16px;

            & > li {
                padding: 2px 32px;
            }
        }
    }
`;
