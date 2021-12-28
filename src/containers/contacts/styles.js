import styled from "styled-components"

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    height: 100%;
    min-height: 100vh;
    background-color: #181A1E;
    background-repeat: no-repeat;
    background-size: auto; 
`;

export const Title = styled.h1`
    color: rgb(119,136,153);
    font-size: 50px;
    text-shadow: black 0.1em 0.1em 0.2em;
    margin-top: 100px; 

`

export const Frame = styled.div`
    width: 700px;
    height: 600px;

    border-radius: 30px;
    background-color: #111317;

    
    @media screen and (max-width: 730px){ 
        width: 600px;
        height: 500px; 
    }

    @media screen and (max-width: 630px){ 
        width: 300px;
        height: 570px; 
    }
`;

export const Body = styled.div`
    width: 670px;
    height: 570px;

    border-radius: 30px;
    background-color: rgb(176,196,222);

    display: flex;
    flex-direction: column;
    justify-content:center;
    gap:40px;
    align-items: center;

    @media screen and (max-width: 730px){ 
        width: 570px;
        height: 470px; 
    }

    @media screen and (max-width: 630px){ 
        width: 270px;
        height: 550px; 
    }

a {
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content:center;
}

a:hover{
    height: 150px;
    width: 150px;
    border-radius: 30px;
    background-color: rgb(249,250,255, 0.5);
}

a:active{
    background-color: rgb(249,250,255, 0.9)
}
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
`;




