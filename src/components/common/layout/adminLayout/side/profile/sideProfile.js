import styled from 'styled-components';

const SideProfile = () => {
    return (
        <ProfileTemplate>
            <div>PROFILE</div>
            <SideInfo>
                <p>김성용 (#13579)</p>
                <p>매니저 D+365</p>
            </SideInfo>
        </ProfileTemplate>
    );
};
export default SideProfile;

const ProfileTemplate = styled.div`
    padding: 16px 32px;
    & > div:first-child {
        text-align: center;
        margin-bottom: 16px;
    }
`;

const SideInfo = styled.div`
    & > p {
        color: ${({ theme }) => theme.subColor};
    }

    & > p:first-child {
        font-size: 24px;
    }
`;
