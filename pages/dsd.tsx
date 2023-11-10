import React from 'react'
import Equipos from '@/components/productos'
import Eq_l from '@/components/lectorCarousel'
import Eq_C from '@/components/impCCarousel'
import Eq_E from '@/components/impECarousel'
import Beneficios from '@/components/benfRenta'
import FM from '@/components/index/form'
import Styles from '@/styles/dsd.module.css'
import { Button } from 'react-bootstrap'
import Image from 'next/image'


export default function dsd() {
  return (
    <div className={`${Styles.dsd}`}>
        <div className={`${Styles.fondo}`}>
            <div className={`${Styles.content}`}>
                <h1>Servicio de DSD</h1>
                <p>Software diseñado para eficientar la venta e inventario en ruta,<br /> generando reportes estadisticos, compatible con sistema Android.</p>
                <Button variant="outline-light">¡Cotizar Ahora!</Button>
                <div>
                    <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/tel" alt="Icono del telefono" fill/>
                    <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/wp" alt="Icono de whatsApp" fill/>
                    <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/email" alt="Icono de correo" fill/>
                </div>
            </div>
            <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevoSitio/dsd1" alt="" fill />
        </div>

            {/* <div className={`${Styles.fondo}`}>
        
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
        </div> */}
        <div className={`${Styles.info_venta}`}>
            <div className={`${Styles.info1}`}>
                <Image src="" alt="" fill />
                <div className={`${Styles.text_venta}`}>
                    <h2>Solución DSD para venta en ruta </h2>
                    <p>
                        Aplicación "Direct Store Delivery" (DSD), basada en tecnologías móviles, capaz de habilitar los procesos de venta abordo,
                        preventa y reparto. Herramienta que controla la fuerza de ventas y monitorea su desempeño.
                    </p>
                </div>
            </div>
        </div>
        
        <h3>Beneficios al Vender con Nosotros:</h3>
        <Beneficios />
        <FM />
    </div>
  )
}
