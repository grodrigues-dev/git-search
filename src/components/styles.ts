import styled, { keyframes } from "styled-components";


export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    background: rgba(56, 53, 53, 0.8);
`;

export const UserModal = styled.div`
    display: flex;
    flex-direction: column;
    width: 35rem;
    height: 80%;
    background: #FFF;
    border-radius: 5px;
    position:relative;
    top: 2rem;
    margin: 0 auto;

    @media (max-width: 768px) {
        width: 80%;
      }

    & img {
        align-self: flex-end;
        margin: 0.5rem;
        cursor: pointer;
    }
`;

export const ModalContent = styled.p`
    text-align: center;
    font-family: Arial;
`;

export const Button = styled.button`
    text-decoration: none;
    color: #FFF;
    background: #2DA44E;
    padding: 0.3rem;
    border-radius: 5px;
    cursor: pointer;
    width: fit-content;
    align-self: center;
    padding: 0.5rem 2rem;
    border: none;
    box-shadow:  0 1px 6px 0 #20212447;
`
const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
    border: 16px solid #f3f3f3; 
    border-top: 16px solid #212529; 
    border-radius: 50%;
    width: 80px;
    height: 80px;
    animation: ${spin} 2s linear infinite;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 25%;
    left: 0;
    right: 0;
`;