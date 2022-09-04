import styled, { css } from 'styled-components';

const CommonLabel = ({ text, color, bgColor }) => {
    return (
        <CommonLabelTemplate color={color} bgColor={bgColor}>
            {text}
        </CommonLabelTemplate>
    );
};

export default CommonLabel;

const CommonLabelTemplate = styled.span`
    display: inline-block;
    width: 80px;
    margin-left: 10px;
    font-size: 12px;
    text-align: center;
    vertical-align: middle;
    border-radius: 10px;
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
    ${props =>
        props.bgColor === '#fff'
            ? css`
                  border: 1px solid;
              `
            : null};
`;
