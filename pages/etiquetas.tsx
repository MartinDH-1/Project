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
              <h1>Servicio de Impresion de Etiquetas</h1>
              <p>Somos especialistas en la impresión de etiquetas.<br /> Etiquetas de alta durabilidad y resistencia,<br /> adecuadas para cada giro comercial.</p>
              <Button variant="outline-light">¡Cotizar Ahora!</Button>
              <div>
                  <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/tel" alt="Icono del telefono" fill/>
                  <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/wp" alt="Icono de whatsApp" fill/>
                  <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/Icon/email" alt="Icono de correo" fill/>
              </div>
          </div>
          <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevoSitio/etq1" alt="" fill />
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
                  Somos especialistas en la impresion de etiquetas. Contamos con impresion termico directo y transferencia termica. 
                  Etiquetas de alta durabilidad y resistencia, adecuadas para cada giro comercial. Impresion de calidad en materiales sinteticos y papel.
                  </p>
              </div>
          </div>
      </div>
      <div className={`${Styles.list}`}>
          <div>
          <h3>Contamos con:</h3>
          <ul>
              <li>Impresión térmica directa y transferencia térmica.</li>
              <li>Impresión en papel, polipropileno y poliéster.</li>
              <li>Elaboración de diseño sin costo adicional.</li>
              <li>Elaboración de códigos de barras y QR.</li>
              <li>Asesoría comercial y técnica previa.</li>
              <li>Entrega sin costo adicional.</li>
          </ul>
          </div> 
          <Image src="" alt="" fill />
      </div>
      
      <h3>Beneficios al imprimir Etiquetas con nosotros:</h3>
      <Beneficios />
      <FM />
  </div>
    )
  }