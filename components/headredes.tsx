import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from 'react-bootstrap/Button';
import styles from '@/styles/header.module.css'

export default function headers() {
  return (
    <div className={`${styles.nav_redes}`}>
        <Button variant="outline-light" id="telefono">
            <Image
                src="https://res.cloudinary.com/dihawqrnt/image/upload/v1691015774/HHSv2.1/banderas/bandera_mexico.png"
                alt="icono de la bandera mexico"
                id="mx"
                fill
            />
            Tel: 55 5115 6043
        </Button>
        <div className={`${styles.redes}`}>
            <Link href="https://tinyurl.com/hhsprincipal2" target='_blank'>
                <Image className={`${styles.img_redes}`} src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/HHSv2.1/Logos-redes/wp_blanco" alt="icono whatsapp" id="wp" fill />
            </Link>
            <Link href="https://tinyurl.com/fbhhsoficial" target='_blank'>
                <Image className={`${styles.img_redes}`} src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/HHSv2.1/Logos-redes/fb_blanco" alt="icono Facebook" id="fb" fill />
            </Link>
            <Link href="https://tinyurl.com/ythhsoficial" target='_blank'>
                <Image className={`${styles.img_redes}`} src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/HHSv2.1/Logos-redes/yt_blanco" alt="icono Youtube" id="yt" fill />
            </Link>
            <Link href="https://tinyurl.com/tthhsoficial" target='_blank'>
                <Image className={`${styles.img_redes}`} src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/HHSv2.1/Logos-redes/tt_blanco" alt="icono Tiktok" id="tt" fill />
            </Link>
            <Link href="https://tinyurl.com/inshhsoficial" target='_blank'>
                <Image className={`${styles.img_redes}`} src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/HHSv2.1/Logos-redes/inst_blanco" alt="icono Instagram" id="ig" fill />
            </Link>
            <Link href="https://tinyurl.com/twhhsoficial" target='_blank'>
                <Image className={`${styles.img_redes}`} src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/HHSv2.1/Logos-redes/tw_blanco" alt="icono Twitter" id="tw" fill />
            </Link>
            <Link href="https://tinyurl.com/lnhhsoficial" target='_blank'>
                <Image className={`${styles.img_redes}`} src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/HHSv2.1/Logos-redes/in_blanco" alt="icono Linkedin" id="ln" fill />
            </Link>
        </div>
        <Button variant="outline-light" id="coreo">contacto@handheldsolutions.com.mx</Button>
    </div>
  )
}
