import React from 'react'
import Form from '../formulario'
import Styles from '@/styles/contacto.module.css'

export default function form() {
  return (
    <section className={`${Styles.cont}`}>
        <div className={`${Styles.form}`}>
          <Form />
        </div>
        <div className={`${Styles.mapa}`}>
          <h3>Encuentranos en:</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.6581014688065!2d-99.16042851695263!3d19.398739180265355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffafb9495555%3A0x8e6c0e987727c382!2sHand%20Held%20Solutions!5e0!3m2!1ses-419!2smx!4v1697673302214!5m2!1ses-419!2smx"
            allowFullScreen loading="lazy" referrerPolicy='no-referrer-when-downgrade' title='Direccion Empresa'  />
        </div>
       
    </section>
  )
}
