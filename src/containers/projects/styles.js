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
    margin-top: 150px; 

    @media screen and (max-width: 375px){
       
        margin-top: 15px;   
    }

`

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-bottom: 30px;

    @media screen and (max-width: 1000px){
       
       flex-direction: column;  
    }
   
`;

export const BodyCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
    background-color: #111317;
    border-radius: 20px;
    height: 550px;
    width: 300px;
    
`;

export const Frame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    gap:20px;
    align-items: center;
    
    background-color: rgb(176,196,222);
    border-radius: 10px;
    margin-bottom: 10px;
    height: 350px; 
    width: 270px;

    img{
    width: 100px;
    height: 90px;
    }
`;

export const H1 = styled.h1`
    font-size: 30px;
    color: rgb(119,136,153, 1.0);
    margin-bottom: 10px;
    text-align: center;
    padding: 5px;

    
    width: 270px;
    height: 40px;   

    text-shadow: black 0.1em 0.1em 0.2em;
`;


export const Button = styled.button`
    background-color: rgb(176,196,222);
    width: 270px;
    height: 40px; 
    cursor: pointer;
    margin-bottom: 10px;
    
    font-size: 19px;
    padding: 5px;

    color:#1e1814;
    border: none;
    border-radius: 10px;

    &:hover{
        background-color: rgb(249,250,255, 0.5);
    }

    &:active{
        background-color: rgb(249,250,255, 0.9);
    }

`;