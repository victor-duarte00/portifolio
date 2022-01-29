import React from "react";

import {
  Container,
  Title,
  ContainerCard,
  BodyCard,
  Frame,
  H1,
  Button

} from './styles'

import Html from "../../assets/html.png"
import Css from "../../assets/css.png"
import JavaScript from "../../assets/javaScript.png"
import Node from "../../assets/node.png"
import Reactimg from "../../assets/react.png"

function Projetos() {
  return (
    <Container>
      <Title>Meus Projetos</Title>
      <ContainerCard>
        <BodyCard>
            <Frame>
              <img src={Reactimg}/>
            </Frame>
            <H1>Portifólio</H1>
              <a href="https://github.com/victor-duarte00/portifolio">
                <Button>GitHub</Button>
              </a>
        </BodyCard>
        <BodyCard>
            <Frame>
              <img src={Reactimg}/>
            </Frame>
            <H1>Lista</H1>
              <a href="https://github.com/victor-duarte00/react-project">
                <Button>GitHub</Button>
              </a>
        </BodyCard>
        <BodyCard>
            <Frame>
              <img src={Node}/>
            </Frame>
            <H1>API</H1>
            <a href="https://github.com/victor-duarte00/code-club-first-project-node">
              <Button>GitHub</Button>
            </a>
        </BodyCard>
      </ContainerCard>
      <ContainerCard>
        <BodyCard>
            <Frame>
              <img src={Html}/>
              <img src={JavaScript}/>
              <img src={Css}/>
            </Frame>
            <H1>Conversor</H1>
              <a href="https://victor-duarte00.github.io/ConversorDeMoedas/">
                <Button>Site</Button>
              </a>
              <a href="https://github.com/victor-duarte00/ConversorDeMoedas">
                <Button>GitHub</Button>
              </a>
        </BodyCard>
        <BodyCard>
            <Frame>
              <img src={Html}/>
              <img src={JavaScript}/>
              <img src={Css}/>
            </Frame>
            <H1>Site Pedido</H1>
              <a href="https://victor-duarte00.github.io/site-pedido/">
              <Button>Site</Button>
              </a>
              <a href="https://github.com/victor-duarte00/site-pedido">
              <Button>GitHub</Button>
              </a>
        </BodyCard>        
      </ContainerCard>
    </Container>
  );
}

export default Projetos;
