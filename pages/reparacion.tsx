import React from 'react'
import Equipos from '@/components/productos'
import Eq_l from '@/components/lectorCarousel'
import Eq_C from '@/components/impCCarousel'
import Eq_E from '@/components/impECarousel'
import Beneficios from '@/components/benfRenta'
import FM from '@/components/index/form'
import Styles from '@/styles/reparacion.module.css'
import { Button } from 'react-bootstrap'
import Image from 'next/image'


export default function reparacion() {
  return (
    <div className={`${Styles.renta}`}>
        <div className={`${Styles.fondo}`}>
            <video autoPlay muted loop>
                <source src='https://res.cloudinary.com/dihawqrnt/video/upload/f_auto:video,q_auto/v1/NuevaPagina/videos/renta_video' /> 
            </video>
            <div className={`${Styles.fondo_color}`} />
            <div className={`${Styles.content}`}>
                <h1>Servicio de Reparación </h1>
                <p>Reparación de <strong>handhelds, lectores de códigos ,<br />impresoras de etiquetas y credenciales</strong> <br />por evento único y póliza de reparación.</p>
                <Button variant="outline-light">¡Cotizar Ahora!</Button>
                <div>
                <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/tel" alt="Icono del telefono" fill/>
                <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/wp" alt="Icono de whatsApp" fill/>
                <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/email" alt="Icono de correo" fill/>
                </div>
            </div>
        </div>
        <div className={`${Styles.info_reparacion}`}>
            <div className={`${Styles.info1}`}>
                <Image src="" alt="" fill />
                <div className={`${Styles.text_renta}`}>
                    <h2>Reparacion Por Polizas </h2>
                    <p>Contamos con pólizas anuales de reparación integral para sus handhelds e impresoras de etiquetas, 
                    que consideran reparar sus equipos en pocos días o incluso el mismo, por daños causados por uso normal y sobre todo ¡Por accidentes!
                    Las pólizas aseguran la rápida rehabilitación de sus equipos y la continuidad de su operación, evitando las pérdidas que representa tenerlos fuera de uso.
                    </p>
                </div>
            </div>
           <div className={`${Styles.info2}`}>
                <div className={`${Styles.text_renta}`}>
                    <h2>Reparacion Por Evento unico </h2>
                    <p>Si no cuenta con una póliza de reparación, sabemos que usted necesita que sus handhelds, lectores de códigos de barras e impresoras de etiquetas, se rehabiliten rápidamente, sin trámites engorrosos, así que brindamos primero repararlos y después realizar los trámites de pago. ¡Sin costo por diagnóstico y con atención en sitio!
                    </p>
                </div>
                <Image src="" alt="" fill />
           </div>
          
        </div>
        <h3>REPARACIÓN DE</h3>
        <section className={`${Styles.sect_carousel}`}>
            <Equipos />
            <Eq_l />
            <Eq_C />
            <Eq_E />
        </section>
        
        <h3>Beneficios al Reparar con Nosotros:</h3>
        <Beneficios />
        <FM />
  </div>
  )
}
