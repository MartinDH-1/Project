import React from 'react'
import Equipos from '@/components/productos'
import Eq_l from '@/components/lectorCarousel'
import Eq_C from '@/components/impCCarousel'
import Eq_E from '@/components/impECarousel'
import Beneficios from '@/components/benfRenta'
import FM from '@/components/index/form'
import Styles from '@/styles/venta.module.css'
import { Button } from 'react-bootstrap'
import Image from 'next/image'

export default function venta() {
  return (
    <div className={`${Styles.renta}`}>
        <div className={`${Styles.fondo}`}>
        <video autoPlay muted loop>
            <source src='https://res.cloudinary.com/dihawqrnt/video/upload/f_auto:video,q_auto/v1/NuevaPagina/videos/renta_video' /> 
        </video>
        <div className={`${Styles.fondo_color}`} />
        <div className={`${Styles.content}`}>
            <h1>Servicio de Venta</h1>
            <p>Venta de handhelds, lectores de códigos, <br /> impresoras de etiquetas, credenciales, <br />accesorios y consumibles.</p>
            <Button variant="outline-light">¡Cotizar Ahora!</Button>
            <div>
            <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/tel" alt="Icono del telefono" fill/>
            <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/wp" alt="Icono de whatsApp" fill/>
            <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/email" alt="Icono de correo" fill/>
            </div>
        </div>
    </div>
    <div className={`${Styles.info_venta}`}>
        <div className={`${Styles.info1}`}>
            <Image src="" alt="" fill />
            <div className={`${Styles.text_venta}`}>
                <h2>Venta de handhelds, lectores de códigos e impresoras de etiquetas </h2>
                <p>
                    Somos distribuidores autorizados de equipos como handhelds, lectores de códigos, impresoras de etiquetas e impresoras de credenciales. 
                    Ofrecemos asesoría gratuita y equipos demo para garantizar la elección adecuada. 
                    Trabajamos con fabricantes líderes y brindamos soporte completo, incluyendo preventa, postventa y garantías.
                </p>
            </div>
        </div>
    </div>
    <h3>VENDEMOS EQUIPOS COMO</h3>
    <section className={`${Styles.sect_carousel}`}>
        <Equipos />
        <Eq_l />
        <Eq_C />
        <Eq_E />
    </section>
    
    <h3>Beneficios al Vender con Nosotros:</h3>
    <Beneficios />
    <FM />
</div>
  )
}
