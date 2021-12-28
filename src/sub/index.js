import React, {memo, useState} from "react";

import {
    HeaderStyled,
    LogoStyled,
    MenuContentStyled,
    MenuIconStyled,
    MenuStyled
  } from './styles'

import Menu from "../assets/menu.png"

function Header() {
    const [show, setShow] = useState(false)

    const toggleMenu = () => {
        setShow(!show)
    }

    return(
        <HeaderStyled>
            <LogoStyled>
                <a  href="/">
                    <h1>Victor Duarte</h1>
                </a>
            </LogoStyled>
            <MenuContentStyled>
                <MenuIconStyled onClick={toggleMenu} src={Menu} width="60px" height="50px"/>
            </MenuContentStyled>
            <MenuStyled show = {show}>
                <li>
                    <a href="/projetos">Projetos</a>
                </li>
                <li>
                    <a href="/contatos">Contatos</a>
                </li>
            </MenuStyled>
        </HeaderStyled>
    )
}

export default memo(Header)