import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Wrapper>
            <LogoWrapper>logo</LogoWrapper>
            <GNBWrapper>
                <GNBButton>client</GNBButton>
                <GNBButton>admin</GNBButton>
            </GNBWrapper>
            <SignWrapper>
                <SignButton>login</SignButton>
                <SignButton>join</SignButton>
            </SignWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 80px;
    /* border: 1px solid black; */
`;

const LogoWrapper = styled.div`
    margin: 0 20px;
    /* border: 1px solid red; */
`;

const GNBWrapper = styled.div`
    display: flex;
    /* border: 1px solid green; */
`;

const GNBButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    margin: 10px 20px;
    /* border: 1px solid blueviolet; */
    cursor: pointer;
`;

const SignWrapper = styled.div`
    display: flex;
    /* border: 1px solid blue; */
`;

const SignButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 40px;
    margin: 0 4px;
    cursor: pointer;
`;

export default Header;
