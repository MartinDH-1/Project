import React from 'react'
import Image from 'next/image'
import Styles from '@/styles/scrollmove.module.css'

export default function provedores() {
	const provedores =[
        {
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Provedores/honeywell",
            "alt": "logo honeywell",
            "key":"1"
        },
        {
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Provedores/zebra",
            "alt": "logo zebra",
            "key": "2"
        },
        {
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Provedores/evolis",
            "alt": "logo evolis",
            "key": "3"
        },
        {
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Provedores/tsc",
            "alt": "logo tsc",
            "key": "4"
        },
        {
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Provedores/unitech",
            "alt": "logo unitech",
            "key": "5"
        },
        {
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Provedores/urovo",
            "alt": "logo urovo",
            "key": "6"
        },
        {
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Provedores/newland",
            "alt": "logo newland",
            "key": "7"
        },
		{
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Provedores/symbol",
            "alt": "logo symbol",
            "key": "8"
        },
		{
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Provedores/motorola",
            "alt": "logo motorola",
            "key": "9"
        },
		{
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Provedores/intermec",
            "alt": "logo intermec",
            "key": "10"
        },
		{
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Provedores/entrust",
            "alt": "logo entrust",
            "key": "11"
        },
		{
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Provedores/epson",
            "alt": "logo epson",
            "key": "12"
        },
		{
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Provedores/star",
            "alt": "logo star",
            "key": "13"
        },
		{
            "img": "https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Provedores/elo",
            "alt": "logo elo",
            "key": "14"
        },
		
    ]
  return (
    <section className={`${Styles.sliders}`}>
	<h2>Nuestros Proveedores:</h2>
    <div className={`${Styles.slider}`}>
		<div className={`${Styles.slide_track}`}>
			{provedores.map(prov=>(
				<div className={`${Styles.slide}`} key={prov.key}>
					<Image src={prov.img} alt={prov.alt} className={`${Styles.img_prov}`} width={500} height={200}/>
				</div>
			))}
            {provedores.map(prov=>(
				<div className={`${Styles.slide}`} key={prov.key}>
					<Image src={prov.img} alt={prov.alt} className={`${Styles.img_prov}`} width={500} height={200}/>
				</div>
			))}
           
		</div>
	</div>
    </section>
  )
}
