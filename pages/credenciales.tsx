import React from 'react'

import Beneficios from '@/components/benCredenciales'
import FM from '@/components/index/form'
import Styles from '@/styles/credenciales.module.css'
import { Button } from 'react-bootstrap'
import Image from 'next/image'

export default function credenciales() {
  return (
    <div className={`${Styles.dsd}`}>
    <div className={`${Styles.fondo}`}>
        <div className={`${Styles.content}`}>
            <h1>Servicio de Impresion de Credenciales</h1>
            <p>Somos especialistas en la elaboración de credenciales,<br /> gafetes y tarjetas. Impresión de alta calidad fotográfica.</p>
            <Button variant="outline-light">¡Cotizar Ahora!</Button>
            <div>
                <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/tel" alt="Icono del telefono" fill/>
                <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/wp" alt="Icono de whatsApp" fill/>
                <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/email" alt="Icono de correo" fill/>
            </div>
        </div>
        <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevoSitio/imp_cred" alt="" fill />
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
                <h2>Garantizamos  </h2>
                <p>
                    Nuestras credenciales son impresas en materiales, altamente resistentes y duraderos, que le dan a cada tarjeta y gafete una larga vida de uso. 
                    Contamos con impresión en PVC, PET y policarbonato. Garantizamos una excelente calidad de impresión, tenga la seguridad de que sus credenciales
                    contarán con un holograma de seguridad para prevenir desgastes y evitar falsificaciones.
                </p>
            </div>
        </div>
    </div>
    <div className={`${Styles.list}`}>
        <div>
        <h3>Contamos con:</h3>
        <ul>
            <li>Impresión a color y monocromática!</li>
            <li>Impresión a 1 y 2 caras.</li>
            <li>Impresión de seguridad con efecto UV.</li>
            <li>Impresión con holograma de seguridad.</li>
            <li>Impresión con código QR.</li>
            <li>Impresión en tarjetas PVC blancas y  color.</li>
            <li>Tarjetas sobre banda magnética. </li>
            <li>Asesoría comercial previa sin costo.</li>
            <li>Diseño sin costo adicional.</li>
            <li>Elaboración de códigos QR sin costo adicional.</li>
        </ul>
        </div> 
        <Image src="" alt="" fill />
    </div>
    
    <h3>Beneficios al imprimir CREDENCIALES con nosotros:</h3>
    <Beneficios />
    <FM />
</div>
  )
}
