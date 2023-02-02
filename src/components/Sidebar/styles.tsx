import styled from "styled-components";

export const Container = styled.div<{ isSidebar: boolean }>`
    box-shadow: 0px 0px 8px #D3D1D2;
    height: 86vh;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    a {
        text-decoration: none;
    }

    a: hover {
        color: #C353E6;
    }

    .inicialSearch {
        width: 90%;
        margin: auto;
        margin-bottom: 0px;
        border-bottom: 1px solid #1A1C38;
        div {
            display: flex;
            align-items: center;
            height: 60px;
            margin-bottom: 20px;
            padding-left: 10px;
            margin-bottom: 0;
            cursor: pointer;
            font-size: 18px;

            p {
                margin-right: 5px;
            }
        }
        
    }

    .genres {
        width: 90%;
        margin: auto;
        margin-top: 15px;
        div {
            display: flex;
            align-items: center;
            height: 60px;
            margin-bottom: 20px;
            padding-left: 10px;
            margin-bottom: 0;
            cursor: pointer;
            font-size: 18px;
        }
    }
    @media only screen and (max-width: 820px) {
        position: absolute;
        z-index: 2;
        display: ${props => props.isSidebar ? 'block' : 'none'};
        background-color: #111635;
        width: 250px;

        .inicialSearch {
            margin-top: 50px;
        }
      }
    
`;