import styled from 'styled-components';

const CommonButton = ({ text, color, bgColor }) => {
    console.log(color, bgColor);
    return (
        <CommonButtonTemplate color={color} bgColor={bgColor}>
            {text}
        </CommonButtonTemplate>
    );
};

export default CommonButton;

const CommonButtonTemplate = styled.button`
    box-sizing: border-box;
    margin-left: 15px;
    padding: 3px 25px;
    color: ${props => props.color};
    background-color: ${props => props.bgColor};
    border: 1px solid ${props => props.color};
`;
