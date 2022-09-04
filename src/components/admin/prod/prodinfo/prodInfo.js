import styled from 'styled-components';
import InfoDetail from './detail/infoDetial';
import InfoIamge from './image/infoImage';

const ProdInfo = () => {
    return (
        <InfoTemplate>
            <InfoIamge />
            <InfoDetail />
        </InfoTemplate>
    );
};
export default ProdInfo;

const InfoTemplate = styled.div`
    display: flex;
    align-items: center;
`;
