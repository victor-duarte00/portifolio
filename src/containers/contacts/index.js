import React from "react";

import { 
  Container,
  Title,
  Frame,
  Body,
  Image
  } from './styles' 

import Gmail from "../../assets/gmail.png";
import Linkedin from "../../assets/linkedin.png";
import GitHub from "..//../assets/gitHub.png";


function Contacts() {
  return (
    <Container>
      <Title>Contatos</Title>
      <Frame>
        <Body>
          <a href="mailto:victorduarte0500@gmail.com">
          <Image src={Gmail} />
          </a>
          <a href="https://www.linkedin.com/in/victor-de-oliveira-duarte-7a3259224">
          <Image src={Linkedin} />
          </a>
          <a href="https://github.com/victor-duarte00">
          <Image src={GitHub} />
          </a>
         </Body>
      </Frame>
    </Container>
  );
}

export default Contacts;
