import styled from "styled-components"


export const HeaderStyled = styled.header`
    height: 80px;
    width: 100%;
    background-color: #111317 ;
    z-index: 9999;
    position: fixed;
   
    
`;

export const LogoStyled = styled.div`
    position: absolute;
    height: 100%;
    display:flex;
    align-items: center;
    padding-left: 40px;

    a{
        text-decoration: none;
    }

    h1{
        margin-left: 70px;
        color: rgb(119,136,153);
        font-size: 2.4rem;
        text-shadow: black 0.1em 0.1em 0.2em;
    }
`;

export const MenuContentStyled = styled.div`
    position: absolute;
    z-index: 4px;
    width: 100%;
    padding: 10px;
    background-color: #111317; 
    overflow: hidden;
    display: none;
    

@media (max-width: 768px) {
    display: flex;
    align-items: center;
    position: fixed;
} 
`;

export const MenuIconStyled = styled.img`
    cursor: pointer;
`;

export const MenuStyled = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0 10%;
    overflow: hidden;
    font-size: 1.5rem;
    display: flex;
    justify-content: flex-end;
    align-items:center;
    margin-top: 10px;
    
    

    li a {
        display: block;
        color: #fff;
        text-align: center;
        padding: 16px;
        outline: none;
        text-decoration: none;
    }

    li:hover{
        cursor: pointer;
        background-color: #181A1E;
    }

@media (max-width: 768px) {
    display: ${({ show }) => show ? 'block' : 'none'};
    position: fixed;
    z-index: 4;
    background-color: #181A1E;
    top: 60px;
    overflow: hidden;
    height: 30%;
    width: 100%;
    padding: 0;

    li{
        width: 100%;
    }

    li:hover{
        cursor: pointer;
        background-color:#111317;
        a{
            color: #fff;
        } 
    }
}
`;