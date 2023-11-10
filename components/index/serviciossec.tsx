import React from 'react'
import styles from '@/styles/serviciosS.module.css'
import Image from 'next/image'
import { Button } from 'react-bootstrap'
export default function serviciossec() {
  return (
    <section className={`${styles.serviciosS}`}>
        <h2>COTIZA LA SOLUCIÓN A TU NECESIDAD</h2>
        <div className='d-flex justify-content-center'>
            <div className={`${styles.icon_cards} mt-3`}>
                <div className={`${styles.icon_cards__content}`} id="card" data-ride="carousel">
                    <div className={`${styles.icon_cards__item} align-items-center justify-content-center`} data-target=".carousel"  data-slide-to="0">
                        <h3>Impresion Credenciales</h3>
                        <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/credencial" alt="Impresiones de credenciales" fill/>
                        <Button variant="primary w-100">¡Mas informacion!</Button> 
                    </div>
                    <div className={`${styles.icon_cards__item} align-items-center justify-content-center`} data-target=".carousel"  data-slide-to="1">
                        <h3>Impresion Etiquetas</h3>
                        <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/etiqueta" alt="Impresiones de etiquetas" fill/>
                        <Button variant="primary w-100">¡Mas informacion!</Button> 
                    </div>
                    <div className={`${styles.icon_cards__item} align-items-center justify-content-center`} data-target=".carousel"  data-slide-to="2">
                        <h3>Fundas</h3>
                        <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/fundas1" alt="Venta de Fundas" fill/>
                        <Button variant="primary w-100">¡Mas informacion!</Button> 
                    </div>
                    <div className={`${styles.icon_cards__item} align-items-center justify-content-center`} data-target=".carousel"  data-slide-to="3">
                        <h3>Software DSD</h3>
                        <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/dsd" alt="Servicios DSD" fill/>
                        <Button variant="primary w-100">¡Mas información!</Button>
                    </div> 
                    <div className={`${styles.icon_cards__item} align-items-center justify-content-center`} data-target=".carousel"  data-slide-to="3">
                        <h3>Accesorios y Consumibles</h3>
                        <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/dsd" alt="Servicios DSD" fill/>
                        <Button variant="primary w-100">¡Mas información!</Button>
                    </div> 
                </div>
            </div>
        </div>
    </section>
  )
}
