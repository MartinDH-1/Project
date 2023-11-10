import { addHookAliases } from 'next/dist/server/require-hook'
import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import Styles from '@/styles/header.module.css'

export default function navmenu() {
  return (
    <Navbar expand="lg" className={`${Styles.nav} `}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={`${Styles.nav_icon} `} />
        <Navbar.Collapse id="basic-navbar-nav" className=''>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Renta" id="renta">
              <NavDropdown.Item href="#action/3.1">HandHeld</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Lector Códigos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Impresoras </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Venta" id="venta">
              <NavDropdown.Item href="#action/3.1">HandHeld</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Lector Códigos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Impresoras </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Reparacion" id="reparacion">
              <NavDropdown.Item href="#action/3.1">HandHeld</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Lector Códigos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Impresoras </NavDropdown.Item>
            </NavDropdown>
          
            <Nav.Link href="#home">Equipos</Nav.Link>
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <NavDropdown title="Contenido" id="contenido">
              <NavDropdown.Item href="#action/3.1">Videos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Promociones </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
