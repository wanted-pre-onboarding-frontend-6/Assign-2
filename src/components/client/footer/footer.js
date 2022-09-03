import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Wrapper>
            <TopFooter>
                <div>A</div>
                <div>B</div>
                <div>C</div>
            </TopFooter>
            <BottomFooter>
                <IconWrapper>아이콘들</IconWrapper>
                <TopInfo>
                    <div>상호명: Local & Life Inc. | 대표: 홍인기 | 전화번호: 010-8828-0472 </div>
                    <div>사업자번호: 625-81-01879 | 통신판매허가번호: 2020-서울동대문-1110</div>
                    <div>주소: 서울시 동대문구 회기로85 한국과학기술원 9호관 9402호</div>
                    <div>호스팅 제공자 : (주)아임웹</div>
                </TopInfo>
                <BottomInfo>
                    <div>이용약관</div>
                    <div>개인정보처리방침</div>
                </BottomInfo>
                <div>Copyright ⓒ 2022 프루떼-오늘도프룻해! All rights reserved.</div>
            </BottomFooter>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    /* border: 1px solid black; */
`;

const TopFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 60px;
    /* border: 1px solid pink; */
`;

const BottomFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    /* border: 1px solid orange; */
`;

const IconWrapper = styled.div`
    margin: 10px 0;
`;

const TopInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
`;

const BottomInfo = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

export default Footer;
