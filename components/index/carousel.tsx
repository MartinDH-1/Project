import React from 'react'
import { Carousel } from 'react-bootstrap'
import Image from 'next/image'

export default function carousel() {
  return (
    <>
      <Carousel fade interval={3000} pause="hover" touch className='shadow'>
        <Carousel.Item >
            <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/HHSv2.1/banner" alt="Bienvenido Handheld solutios" fill/>
        </Carousel.Item> 
        <Carousel.Item>
            <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/oficina" alt="Cambio de oficina" fill/>
        </Carousel.Item>
        <Carousel.Item>
            <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/barners/banner_temporada_alta" alt="Banner de promocion" fill/>
        </Carousel.Item>
    </Carousel>
    <p className='textoprincipal'>
        Hand Held Solutions cuenta con años de experiencia ofreciendo los servicios de <strong>renta, reparación y venta de Handhelds, lectores de códigos 1D y 2D, impresoras industriales, de escritorio y portátiles.</strong>  
        Contamos con los accesorios y consumibles adecuados para cada equipo.
    </p>
    </>
  
  )
}
