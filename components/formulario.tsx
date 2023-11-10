import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { Button, Form, Row, Col } from 'react-bootstrap';

export default function formulario() {
    const [nameUser,setName] = useState('')
    const [emailUser,setEmail] = useState('')
    const [company,setCompany] = useState('')
    const [phoneNumber,setPhone] = useState('')
    const [model,setModel] = useState('')
    const [servicio,setService] = useState('Renta')
    const [hhnumber,setCount] = useState('')
    const [message,setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [sending, setSendStatus] = useState(false)
    const [submitError,setSubmitError] = useState(false)

    const handleSubmit = async function(e:any) {
        e.preventDefault();
        setSendStatus(true);
        setSubmitError(false);
    
        let data = {
            nameUser,
            emailUser,
            message,
            company,
            phoneNumber,
            model,
            servicio,
            hhnumber,
        }
    
        emailjs.send('service_np5cn6c', 'template_k4l3zkz', data, 'user_CtXaK1GMBuQnrBLJCMxtu')
        .then((result) => {
            console.log('Response received: '+result.status)
            setSendStatus(false);
            setSubmitted(true) 
            setName('')
            setEmail('')
            setMessage('')

        }, (error) => {
            setSendStatus(false);
            setSubmitError(true);
            console.log(error.text);
        });
    }

    const SendMessage = ()=>{
        return (
            <div className="sending-message">
                <div className="loader"></div>
                    <p>Enviando...</p>
            </div>
        );
    }

    const SubmittedMessage = ()=>{
        return(
            <div className="message">
                ¡Mensaje Enviado!
            </div>
        );
    }

    const SubmittedMessageError = ()=>{
        return(
            submitError ? (
            <div className="message-error">
                No se puedo enviar el mensaje, intentelo de nuevo.
            </div>):null
        );
    }


    return(
        <Form>
             <h3>¡Contáctenos!</h3>
            <Row className=' justify-content-center align-content-center'>
                <Col xs={4}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <Form.Control type="text" placeholder="Nombre/Apellido" onChange={(e)=>{setName(e.target.value)}} />
                    </Form.Group>
                </Col>
                <Col xs={4}>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="mail" placeholder="Correo Electronico" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </Form.Group>
                    
                </Col>
                <Col xs={4}>
                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Teléfono:</Form.Label>
                        <Form.Control type="number" placeholder="(+xx) xx-xx-xx-xx-xx " onChange={(e)=>{setPhone(e.target.value)}} />
                    </Form.Group>
                   
                </Col>
                <Col xs={6}>
                    <Form.Group className="mb-3" controlId="company">
                        <Form.Label>Empresa:</Form.Label>
                        <Form.Control type="text" placeholder="Empresa proveniente" onChange={(e)=>{setCompany(e.target.value)}}/>
                    </Form.Group>
                </Col>
                <Col xs={6}>
                    <Form.Group className="mb-3" controlId="model">
                        <Form.Label>Marca ó Modelo del Equipo:</Form.Label>
                        <Form.Control type="text" placeholder="Equipo que Necesite" onChange={(e)=>{setModel(e.target.value)}} />
                    </Form.Group>
                </Col>
                <Col xs={6}>  
                    <Form.Group className="mb-3" controlId="service">
                        <Form.Label>Tipo Servicio:</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={(e)=>{setService(e.target.value)}}>
                            <option>Seleccione un Servicio</option>
                            <option value="renta">Renta</option>
                            <option value="venta">Venta</option>
                            <option value="reaparacion">Reparacion</option>
                            <option value="fundas">Fundas</option>
                            <option value="software">DSD</option>
                            <option value="accesorios">Accesorios o Consumibles</option>
                            <option value="credenciales">Credenciales</option>
                            <option value="etiquetas">Etiquetas</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={6}>
                    <Form.Group className="mb-3" controlId="count">
                        <Form.Label>Cantidad:</Form.Label>
                        <Form.Control type="number" placeholder="Cantidad Solicitada" onChange={(e)=>{setCount(e.target.value)}} min={0}/>
                    </Form.Group>
                </Col>
                <Col xs={12}>
                    <Form.Group className="mb-3" controlId="message">
                        <Form.Label>Mensaje:</Form.Label>
                        <Form.Control as="textarea" placeholder="Mensaje Adicional" rows={3} onChange={(e)=>{setMessage(e.target.value)}}/>
                    </Form.Group>
                </Col>
                {sending ?(
                    <SendMessage />
                ):(
                    <div className="form-footer">
                    {submitted ? 
                        (<SubmittedMessage/>): 
                        (
                            <div  className="form-footer">
                                <Button variant="success w-100" type="submit">Enviar</Button>
                                <SubmittedMessageError/>
                            </div>
                        )
                    }
                    </div>
                )}
            </Row>
        </Form>
    )
}
