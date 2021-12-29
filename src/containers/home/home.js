import React from "react";

import { 
  Container, 
  ContainerText, 
  Title, 
  P, 
  Button,
  Frame, 
  Image 
  } from './styles' 

import profile from "../../assets/profile.JPG"


function Home() {
  return (
    <Container>
      <ContainerText>
        <Title>Olá, eu sou o Victor.</Title>
        <P>
          Desenvolvedor Front-end.
          <br/>
          Desenvolvo projetos do papel para a sua tela.
        </P>
        <a href="/projetos">
        <Button>Meus projetos</Button>
        </a>
      </ContainerText>
      <Frame>
        <Image src={profile}/>
      </Frame>
    </Container>
  );
}

export default Home;
