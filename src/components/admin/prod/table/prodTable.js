import styled from 'styled-components';

const ProdTable = ({ type }) => {
    return (
        <TableTemplate type={type}>
            <tbody>
                <tr>
                    <td>{type === 'option' ? '1 KG' : '품목 또는 명칭'}</td>
                    <td>
                        {type === 'option'
                            ? '10,000원'
                            : '국산 강원도 화천 생 아스파라거스 1kg 2kg'}
                    </td>
                </tr>
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
        }

        & > td:last-child {
            border: 1px solid ${props => props.theme.mainColor};
            width: ${props => (props.type === 'option' ? '20%' : '60%')};
            text-align: ${props => (props.type === 'option' ? 'center' : 'left')};
            padding-left: ${props => props.type === 'origin' && '32px'};
        }
    }
`;
