import styled from 'styled-components';
import logo from '../../../assets/img/logo.png';
import { useInput } from '../../../hooks/useInupt';
import Button from '../../common/button/button';
import Input from '../../common/input/input';

const AdminLoginForm = () => {
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

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
