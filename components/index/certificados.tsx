import React from 'react'
import Styles from '@/styles/certificado.module.css'
import Image from 'next/image'

export default function certificados() {
  return (
    <div className={`${Styles.certificado}`}>
        <h2>Contamos con Certificados</h2>
        <div className={`${Styles.certificados}`}>
            <div className={`${Styles.dns}`}>
                <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/DUNS_sajp0u" alt="Certificad DUNS" className={`${Styles.icon_cert}`} fill/>
                <p>
                Hand Held Solutions cuenta con certificación D-U-N-S 951590903 (emitido por la institución internacional Cial Dun & Branstreet, quién evalúa la fiabilidad y estabilidad financiera de nuestra empresa para realizar un archivo de crédito comercial internacional.
                </p>
            </div>
            <div className={`${Styles.isn}`}>
                <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/HHSv2.1/Certificados/isn_contrato" alt="Certificado ISN" className={`${Styles.icon_cert}`} fill/>
                <p>
                Hand Held Solutions cuenta con certificación ISNetworld, cumpliendo requisitos internos y gubernamentales en materia de salud, seguridad, calidad y riesgo.
                </p>
            </div>
        </div>
    </div>
  )
}
