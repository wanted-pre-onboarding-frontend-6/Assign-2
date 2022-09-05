import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../assets/img/logo.png';
import { useInput } from '../../../hooks/useInupt';
import AdminUserService from '../../../services/admin/adminUserService';
import TokenService from '../../../services/tokenService';
import Button from '../../common/button/button';
import Input from '../../common/input/input';

const AdminLoginForm = () => {
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');
    const navigate = useNavigate();

    const onAdminLogin = useCallback(async () => {
        try {
            const res = await AdminUserService.login({ email, password });
            if (!res.data.message) {
                alert('아이디와 비밀번호를 다시 확인해주세요');
            } else {
                console.log(res.data.data);
                TokenService.set({ key: 'token', value: res.data.data.token });
                if (TokenService.get('token')) {
                    navigate('/admin/prodList');
                } else {
                    alert('다시 한번 시도해주세요');
                }
            }
        } catch (err) {
            console.error(err);
            throw new Error(err);
        }
    }, [email, password]);

    return (
        <LoginFromTemplate>
            <div className="logo">
                <img src={logo} />
                <p>F R U I T T E</p>
            </div>
            <div className="form">
                <p>
                    <Input
                        placeholder="ID"
                        fontSzie="12px"
                        margin="8px 0"
                        mainColor="none"
                        subColor="#000"
                        width="280px"
                        height="32px"
                        style={{ borderBottom: '1px solid #000', textAlign: 'center' }}
                        value={email}
                        onChange={onChangeEmail}
                    />
                </p>
                <p>
                    <Input
                        placeholder="PASSWORD"
                        fontSzie="12px"
                        margin="8px 0"
                        mainColor="none"
                        subColor="#000"
                        width="280px"
                        height="32px"
                        type="password"
                        style={{ borderBottom: '1px solid #000', textAlign: 'center' }}
                        value={password}
                        onChange={onChangePassword}
                    />
                </p>
                <p>
                    <Button
                        fontSzie="16px"
                        mainColor="#61CA3C"
                        padding="4px 32px"
                        margin="16px 0 0 0"
                        width="220px"
                        height="48px"
                        style={{ fontWeight: 'bold' }}
                        onClick={onAdminLogin}
                    >
                        L O G I N
                    </Button>
                </p>
            </div>
        </LoginFromTemplate>
    );
};
export default AdminLoginForm;

const LoginFromTemplate = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > .logo {
        font-size: 24px;
        font-weight: bold;
        color: ${props => props.theme.subColor};

        & > img {
            margin: 0 auto;
            margin-bottom: 8px;
            width: 64px;
            height: 64px;
        }
    }

    & > .form {
        background-color: ${props => props.theme.subColor};
        margin-top: 16px;
        padding: 32px 64px;
        border-radius: 16px;

        & > p {
            text-align: center;
        }
    }
`;
