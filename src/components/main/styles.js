import styled from 'styled-components';
import background from '../../assets/bg.jpg';
import toggleProp from '../../util/style-guide';

export const Container = styled.div` 
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    text-align: center;
    background: url(${background});
    background-size: cover;
    button, img {
         visibility: ${toggleProp('loading', 'hidden', 'visible')}; 
    }
`;

export const Cards = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 55px;
    margin-bottom: 10px;    
    opacity: ${toggleProp('loading', '0.8', '1')}; 
`;

export const Button = styled.button` 
    width: 200px;
    height: 50px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 10px;
    font-size: 14px;
    transition: background 0.3s ease;
    &:focus { outline: none; }
    &:hover { background: #bac7dd; }
`;

export const Logo = styled.img` 
    animation: App-logo-spin infinite 20s linear;
    height: 16vmin;
    top: 0;
    background: ${(props) => props.logoBgColor};
    border-radius: 50%;
    margin-bottom: 15px;
    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const Error = styled.div` 
    width: 100%;
    height: 50px;
    position: absolute;
    bottom: 30px;
`;

export const Loader = styled.div` 
    position: absolute;
    display: ${toggleProp('visible', 'block', 'none')}; 
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
