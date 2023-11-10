import React from 'react'
import Styles from '@/styles/scrollmove.module.css'
import Image from 'next/image'

export default function clientes() {
	const clientes =[
        {
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Clientes/tzdqip72lca3uogaa0cl",
            "alt": "logo honeywell",
            "key":"1"
        },
        {
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Clientes/quala",
            "alt": "logo quala",
            "key": "2"
        },
        {
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Clientes/sincronia_logistica",
            "alt": "logo sincronia logistica",
            "key": "3"
        },
        {
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Clientes/scorpion",
            "alt": "logo scorpion",
            "key": "4"
        },
        {
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Clientes/kavak",
            "alt": "logo kavak",
            "key": "5"
        },
        {
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Clientes/lala",
            "alt": "logo lala",
            "key": "6"
        },
        {
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Clientes/oxxo",
            "alt": "logo oxxo",
            "key": "7"
        },
		{
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Clientes/jcb8iezgu9x2mtubni4l",
            "alt": "logo symbol",
            "key": "8"
        },
		{
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Clientes/pepsico",
            "alt": "logo pepsico",
            "key": "9"
        },
		{
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Clientes/unam",
            "alt": "logo unam",
            "key": "10"
        },
		{
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Clientes/aeromexico",
            "alt": "logo aeromexico",
            "key": "11"
        },
		{
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Clientes/pantos",
            "alt": "logo pantos",
            "key": "12"
        },
		{
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Clientes/unilever",
            "alt": "logo unilever",
            "key": "13"
        },
		{
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Clientes/grupo_modelo",
            "alt": "logo grupo Modelo",
            "key": "14"
        },
		
    ]
  return (
    <section className={`${Styles.sliders}`}>
	<h2>En Hand Held Solutions <br /> creamos relaciones, no clientes</h2>
    <div className={`${Styles.slider}`}>
		<div className={`${Styles.slide_track}`}>
			{clientes.map(clien=>(
				<div className={`${Styles.slide}`} key={clien.key}>
					<Image src={clien.img} alt={clien.alt} className={`${Styles.img_cliente}`} width={300} height={150}/>
				</div>
			))}
            {clientes.map(clien=>(
				<div className={`${Styles.slide}`} key={clien.key}>
					<Image src={clien.img} alt={clien.alt} className={`${Styles.img_cliente}`} width={300} height={150}/>
				</div>
			))}
         
		</div>
	</div>
    </section>
    
  )
}
