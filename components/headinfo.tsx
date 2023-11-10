import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/header.module.css'

export default function headinfo() {
  useEffect(()=>{
    const body = document.body;
    const sup = "scroll-up"
    const sdown = "scroll-down"

    window.addEventListener("scroll",()=>{
      const b = window.pageYOffset;
      if(b == 0){
        body.classList.remove(sdown);
      
        return;
      }else{

        body.classList.add(sdown)
      }
    })
    
  })
  return (
    <div className={`${styles.nav_info} d-none d-lg-flex navinfo`}>
        <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/HHSv2.1/logo_hhs" alt="Logo HHS" id="wp" fill />
         
        <div>
            <label>Bienvenido a HandHeld Solutions</label>
            <p>
              Calle: Heriberto Frías #249, Col. Narvarte Poniente, 
              Alcaldía: Benito Juarez C.P. 03020, CDMX México
            </p>
        </div>
         <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/HHSv2.1/logo_newland" alt="Logo Newland" id="wp" fill />
    </div>
  )
}
