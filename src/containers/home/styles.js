import styled from "styled-components"
export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    height: 100%;
    min-height: 100vh;
    background-color: #181A1E;
    background-repeat: no-repeat;
    background-size: auto; 

    @media screen and (max-width: 1000px){
       
        flex-direction: column;
       
    }
`;

export const ContainerText = styled.div`
   @media screen and (max-width: 375px){
     
     margin-left: 20px;
        
     }

`;

export const Title = styled.h1`
   color: rgb(119,136,153);
   font-size: 50px;
   margin-bottom: 40px;
   text-shadow: black 0.1em 0.1em 0.2em;
   
   @media screen and (max-width: 1000px){
     
     margin-top: 100px;
        
     }

   @media screen and (max-width: 375px){
     
    margin-top: 100px;
       
    }
     
`;

export const P = styled.p`
   color: rgb(119,136,153);
   font-size: 24px;
   margin-bottom: 40px;
`;

export const Button = styled.button`
    background-color:rgb(176,196,222);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    
    font-size: 20px;
    color: #1e1814;

    height: 60px;
    width: 160px;

    &:hover{
        background-color: rgb(249,250,255, 0.5);
    }

    &:active{
        background-color: rgb(249,250,255, 0.9);
    }

`;



export const Frame = styled.div`
    background-color:#111317;
    border-radius: 30px;

    height: 470px;
    width: 380px;

@media screen and (max-width: 375px){
     
    height: 370px;
    width: 280px;
        
}
`;

export const Image = styled.img`
    border-radius: 30px;
    height: 450px;
    width: 350px;

@media screen and (max-width: 375px){
     
    height: 350px;
    width: 250px;
    
        
}
`;
