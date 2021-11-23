import React from 'react'
import { 
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SideBtnWrap,
  SidebarRouter
  } from './SidebarElements';
const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle}>
          <CloseIcon></CloseIcon>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="tecnologias">
              Tecnologias
            </SidebarLink>
            <SidebarLink to="conteudo">
              Conteúdo
            </SidebarLink>
            <SidebarLink to="team">
              Sobre Nós
            </SidebarLink>
            <SidebarLink to="contato">
              Contato
            </SidebarLink>
            <SidebarLink to="signin">
              Cadastrar
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRouter to="/signin">
              Entrar
            </SidebarRouter>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  )
}

export default Sidebar