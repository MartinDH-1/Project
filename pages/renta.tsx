import React from 'react'
import Equipos from '@/components/productos'
import Eq_l from '@/components/lectorCarousel'
import Eq_C from '@/components/impCCarousel'
import Eq_E from '@/components/impECarousel'
import Beneficios from '@/components/benfRenta'
import FM from '@/components/index/form'
import Styles from '@/styles/renta.module.css'
import { Button } from 'react-bootstrap'
import Image from 'next/image'
import { scroll } from "framer-motion/dom";


export default function renta() {
  
  return (
    <div className={`${Styles.renta}`}>
      <div className={`${Styles.fondo}`}>
        <video autoPlay muted loop>
          <source src='https://res.cloudinary.com/dihawqrnt/video/upload/f_auto:video,q_auto/v1/NuevaPagina/videos/renta_video' /> 
        </video>
       
        <div className={`${Styles.fondo_color}`} >
        
          
          </div>
        <div className={`${Styles.content}`}>
          <h1>Servicio de renta</h1>
          <p>Renta de handhelds, lectores de códigos, <br />impresoras de etiquetas y credenciales</p>
          <Button variant="outline-light">¡Cotizar Ahora!</Button>
          <div>
            <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/tel" alt="Icono del telefono" fill/>
            <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/wp" alt="Icono de whatsApp" fill/>
            <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/email" alt="Icono de correo" fill/>
          </div>
        </div>
          
      </div>
      <div className={`${Styles.info_renta}`}>
        <video loop muted autoPlay >
          <source src='https://res.cloudinary.com/dihawqrnt/video/upload/f_auto:video,q_auto/v1/NuevaPagina/videos/abox137vafghtc4q4oal' /> 
        </video>
        <div className={`${Styles.text_renta}`}>
          <h2>Renta de handhelds, lectores de códigos e impresoras de etiquetas</h2>
          <p>
            Rentamos handhelds, impresoras de etiquetas, lectores de códigos e impresoras de credenciales por periodos cortos y largos.
            Desde un día, semana, mes y hasta años. Rentar equipo le permitirá disponerlos de un día para otro, sin depósitos, ni trámites tardados.
            Incluyen todos los accesorios que se requieren y cuentan con póliza de reparación permanente. 
            Si un equipo falla, se repara directamente y de inmediato, sin costos adicionales, diagnósticos previos o cotizaciones costosas.
          </p>

        </div>
        
      </div>
      <h3>Conoce Nuestras Soluciones En Renta</h3>
      <section className={`${Styles.sect_carousel}`}>
        
        <Equipos />
        <Eq_l />
        <Eq_C />
        <Eq_E />
      </section>
      
      <h3>Beneficios al Rentar con Nosotros:</h3>
      <Beneficios />
      <FM />
    </div>
  )
}
