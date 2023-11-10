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
              <NavDropdown.Item href="/renta">HandHeld</NavDropdown.Item>
              <NavDropdown.Item href="/renta">Lector Códigos</NavDropdown.Item>
              <NavDropdown.Item href="/renta">Impresoras </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Venta" id="venta">
              <NavDropdown.Item href="/venta">HandHeld</NavDropdown.Item>
              <NavDropdown.Item href="/venta">Lector Códigos</NavDropdown.Item>
              <NavDropdown.Item href="/venta">Impresoras </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Reparacion" id="reparacion">
              <NavDropdown.Item href="/reparacion">HandHeld</NavDropdown.Item>
              <NavDropdown.Item href="/reparacion">Lector Códigos</NavDropdown.Item>
              <NavDropdown.Item href="/reparacion">Impresoras </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Servicios" id="servicios">
              <NavDropdown.Item href="/credenciales">Impresion Credenciales</NavDropdown.Item>
              <NavDropdown.Item href="/etiquetas">Impresion Etiquetas</NavDropdown.Item>
              <NavDropdown.Item href="/dsd">Software DSD </NavDropdown.Item>
            </NavDropdown>
          
            <Nav.Link href="#home">Equipos</Nav.Link>
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
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
