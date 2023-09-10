import styled from "styled-components";

export const BrowserWrapper = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #333;
    opacity: 1;
    display: flex;
    flex-direction: column;

    .top {
        position: relative;
        height: 86px;
        .close-btn {
            position: absolute;
            top: 15px;
            right: 25px;
            cursor: pointer;
        }
    }
    .slider {
        flex: 1;
        display: flex;
        justify-content: center;

        .control {
            position: absolute;
            z-index: 1;
            left: 0;
            right: 0;
            top: 0;
            display: flex;
            justify-content: space-between;
            bottom: 0;
            color: #fff;
            .btn {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 83px;
                height: 100%;
                cursor: pointer;
            }
        }

        .picture {
            position: relative;
            height: 100%;
            overflow: hidden;
            width: 100%;
            max-width: 105vh;
            img {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0%;
                left: 0;
                margin: 0 auto;
                height: 100%;
                user-select: none;
            }
        }
    }
    .preview {
        display: flex;
        justify-content: center;
        height: 100px;
        margin-top: 10px;
        background-color: green;
    }
`;
