import styled from "styled-components";

export const Container = styled.div<{isFull: boolean}>`
    display: flex;
    background-color: #16171a;
    width: 100%;
    height: 14vh;
    position: fixed; 
    z-index: 1;
    align-items: center;

    box-shadow: 0px -1px 7px #16171aa0;
    
    .musicPlayer__container {
        width: 400px;
        margin-top: 5px;
        cursor: pointer;
    }

    .test {
        width: 400px;
        display: flex;
        align-items: center;
        justify-content: end;

        input {
            appearance: none;
            border-radius: 10px;
            width: 120px;
            background-color: #494A4D;
            height: 5px;
            outline: none;
            margin-right: 15px;
        }
        input::-webkit-slider-thumb {
            appearance: none;
            height: 14px;
            width: 14px;
            background-color: #6F759A;
            border-radius: 50%;
        }
        .volumeButton {
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
        }
    }
    .playPause{
        margin: 0 5px;
    }
    .musicPlayer__albumInfo {
        display: flex;
        color: #D3D1D2;
        align-items: center;
        margin-left: 5px;

        h1 {
            font-size: 18px;
            margin-bottom: 2px;
        }
        h3 {
            margin-top: 0px;
            font-size: 14px;
            color: #b5b5b5;
        }

        div {
            margin-left: 8px;
        }
        img {
            width: 70px;
            height: 65px;
        }
    }

    .controllers {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: auto;

        button {
            border: none;
            outline: none;
            border-radius: 50%;
            background-color: transparent;
            cursor: pointer;
        }

        .randomMusicsButton {
            position: relative;
            right: 25px;
        }
    }

    .controllers__inputButtons {
        display: flex;
        flex-direction: column;      
        align-items: center;
        
    }
    .buttons {
        display: flex;
        width: 225px;
        position: relative;
        bottom: 18px;
    }
    
    .progressBar {
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;
        bottom: 8px;
        right: 10px;

        .Pduration {
            position: relative;
            left: 15px;
            color: #6F759A;
            font-size: 14px;
        }
        .PcurrentTime {
            position: relative;
            right: 10px;
            color: #6F759A;
            width: 35px;
            font-size: 14px;
            padding-right: 16px;
        }
    }
    .currentProgress {
        --seek-before-width: 0px;

        appearance: none;
        border-radius: 10px;
        width: 380px;
        margin: auto;
        background-color: #C353E6;
        height: 5px;
        outline: none;

        ::-webkit-slider-thumb {
            appearance: none;
            height: 14px;
            width: 14px;
            background-color: #6F759A;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            position: relative;
            z-index: 3;
            box-sizing: border-box;
        }
        
        :active::-webkit-slider-thumb {
            transform: scale(1.2);
        }
    }

    @media only screen and (max-width: 820px) {
        .buttons {
            top: 0;
            right: 5%;
        }
        .progressBar {
            display: flex;
            align-items: center;
            width: 88vw;
            position: relative;
            bottom: 0px;
            right: -10%;
            
            input {
                margin: 0;
            }
    }

    @media only screen and (max-width: 575px) {
        .progressBar {
            right: 30px;

    }
        .buttons {
            width: 147px;
            top: 0px;
            right: 0;
            left: ${props => props.isFull ? '-18' : '0'}%;
        }
    }
    
    `; 