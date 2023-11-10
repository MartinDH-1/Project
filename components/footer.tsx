import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Styles from '@/styles/footer.module.css'

export default function footer() {
  return (
    <footer className={`${Styles.footer}`}>
        <Container fluid>
            <Row>

                <Col className={`${Styles.metodo}`}>
                    <h3>Aceptamos pagos con:</h3>
                    <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/Copia_de_metodos_de_pago_500x40_1_o0jqpy" alt="Metodos de pago" fill/>
                </Col>
                <Col className={`${Styles.contacto}`}>
                    <h3>Contactos:</h3>
                    <p>
                        <strong>Tel:</strong> (+52) 55 5115 6043 <br />
                        <strong>Correo:</strong> contacto@handheldsolutions.com.mx<br />
                        <strong>Direccion:</strong> <br />Heriberto Frías # 249, Col. Narvarte Poniente, Delegación Benito Juárez,<br /> C.P. 03020, Ciudad de México.<br />
                        <strong>Horarios Atencion:</strong><br />
                        Lunes a Viernes de 9:00am a 6:00pm
                    </p>
                </Col>
            </Row>
        </Container>
       
        <div className={`${Styles.footer_sec}`}>
            HAND HELD SOLUTIONS 2023 - &copy;   Todos los derechos reservados. 
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Politicas de Privacidad</a></li>
                    <li className="breadcrumb-item"><a href="#">Terminos y Condiciones</a></li>
                    <li className="breadcrumb-item"><a href='#'>Leyes</a></li>
                </ol>
            </nav>
        </div>
    </footer>
  )
}
