import { useEffect } from 'react';
import styled from 'styled-components';

const ProdTable = ({ type, data }) => {
    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <TableTemplate type={type}>
            <tbody>
                {data.length > 0 &&
                    data.map(v => (
                        <tr>
                            <td>{v.name}</td>
                            <td>{v.content}</td>
                        </tr>
                    ))}
            </tbody>
        </TableTemplate>
    );
};
export default ProdTable;

const TableTemplate = styled.table`
    border: 1px solid ${props => props.theme.mainColor};
    border-collapse: collapse;
    width: 100%;
    margin: 16px 0;

    & tr {
        padding: 8px 0;
        background-color: #fff;

        & > td:first-child {
            padding-left: ${props => props.type === 'option' && '32px'};
            width: ${props => (props.type === 'option' ? '80%' : '40%')};
            text-align: ${props => (props.type === 'origin' ? 'center' : 'left')};
            border: 1px solid ${props => props.theme.mainColor};
        }

        & > td:last-child {
            border: 1px solid ${props => props.theme.mainColor};
            width: ${props => (props.type === 'option' ? '20%' : '60%')};
            text-align: ${props => (props.type === 'option' ? 'center' : 'left')};
            padding-left: ${props => props.type === 'origin' && '32px'};
        }
    }
`;
