import styled from 'styled-components';
import { AdminSubject } from '../../../../styles/common';
import ImageDorpozne from './dropZone/imageDrop';

const ProdImage = () => {
    return (
        <>
            <AdminSubject>
                이미지 등록 <span>(최대 10개)</span>
            </AdminSubject>
            <InfoPreviewContainer>
                {/* {files.map((v, index) =>
                            files.length <= 10 ? ( */}
                <InfoPreviewWrapper>
                    <div>
                        <img />
                        <p>파일 삭제</p>
                    </div>
                </InfoPreviewWrapper>
                {/* ) : (
                                <div>이미지는 최대 10개까지만 등록할 수 있습니다</div>
                            ),
                        )} */}
            </InfoPreviewContainer>
            <ImageDorpozne />
        </>
    );
};
export default ProdImage;

const InfoPreviewContainer = styled.div`
    padding: 4px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`;

const InfoPreviewWrapper = styled.div`
    width: 9%;
    height: 100%;
    z-index: 9999;
    margin: 4px;
    cursor: pointer;

    :hover {
        opacity: 0.5;
    }

    & > div {
        position: relative;
        width: 100%;
        height: 100%;

        & > img {
            max-width: 100%;
            max-height: 100%;
        }

        & > p {
            font-size: 12px;
            color: #222;
            text-align: center;
            width: 100%;
            position: absolute;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
        }
    }
`;
