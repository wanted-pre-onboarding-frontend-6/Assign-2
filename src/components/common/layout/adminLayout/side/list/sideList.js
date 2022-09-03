import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faV } from '@fortawesome/free-solid-svg-icons';
import { useCallback } from 'react';

const SideList = () => {
    const [sideLst, setSideList] = useState([
        {
            subject: { name: '상품관리', state: true },
            list: [
                { name: '- 상품목록', state: true },
                { name: '- 상품등록', state: false },
            ],
        },
        {
            subject: { name: '회원관리', state: false },
        },
    ]);

    // subject click Handler
    const onSubjectClick = useCallback(
        e => {
            const index = e.currentTarget.getAttribute('data');
            const List = [...sideLst];
            List[index].subject.state === true
                ? (List[index].subject.state = false)
                : (List[index].subject.state = true);
            setSideList(List);
        },
        [sideLst],
    );

    // List click Handler
    const onListClick = useCallback(
        e => {
            const parentIndx = e.target.parentNode.getAttribute('parentData') || 0;
            const index = e.currentTarget.getAttribute('data');
            const List = [...sideLst];
            List.map(v => {
                v.list?.map(list => {
                    if (list.state) {
                        list.state = false;
                    }
                });
            });
            List[parentIndx].list[index].state = true;
            setSideList(List);
        },
        [sideLst],
    );

    // render
    return (
        <ListTemplate>
            {sideLst.map((v, index) => (
                <li key={index}>
                    <p data={index} onClick={onSubjectClick}>
                        {v.subject.name}{' '}
                        <span>
                            <FontAwesomeIcon icon={v.subject.state ? faCaretUp : faCaretDown} />
                        </span>
                    </p>
                    {v.subject.state &&
                        v.list &&
                        v.list.map((list, index) => (
                            <ListItem parentData={index} state={list.state}>
                                <li key={index} data={index} onClick={onListClick}>
                                    {list.name}
                                </li>
                            </ListItem>
                        ))}
                </li>
            ))}
        </ListTemplate>
    );
};
export default SideList;

// style

const ListTemplate = styled.ul`
    width: 100%;
    font-size: 20px;
    color: ${({ theme }) => theme.subColor};
    margin-top: 32px;

    & > li {
        margin: 24px 0;
        & > p {
            padding-left: 16px;
            & > span {
                margin-left: 8px;
            }
        }
    }
`;

const ListItem = styled.ul`
    ${props => props.state && ' background-color: #3D603A'};
    font-size: 16px;

    & > li {
        padding: 2px 32px;
    }
`;
