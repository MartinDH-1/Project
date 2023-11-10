import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import Styles from "@/styles/ventajas.module.css"
import Image from "next/image";

const show = {
    opacity: 1,
    display: "block",
  
  
  };
    
  const hide = {
    opacity: 0,
    transitionEnd: {
        display: "none"
    }
  };
  
export default function BenfRenta() {
    
    const [isOpen, setIsOpen] = useState(false);
    const [isV, setIsV] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isV1, setIsV1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false);

  useEffect(()=>{
    scroll((progress)=>{console.log(progress)})
  })    
    return (
    <section className={`${Styles.beneficios}`}>
        <motion.div
            layout
            data-isOpen={isOpen}
            className={`${Styles.parent} shadow-lg`}
            onHoverStart={() => {setIsOpen(true), setIsV(true)}}
            onHoverEnd={() => {setIsOpen(false),  setIsV(false)}}>
                <motion.p animate={isV ? show: hide}>
                    En Hand Held Solutions le otorgamos facilidades y contamos con diferentes esquemas de financiamiento.
                </motion.p>
            
            <motion.div layout  className={`${Styles.child}`}>
           
                <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/icon-beneficios/credito_esquema" alt="Respaldo de equipos" fill />
            </motion.div>
        </motion.div>
        <motion.div
            layout
            data-isOpen={isOpen1}
            className={`${Styles.parent} shadow-lg`}
            onHoverStart={() => {setIsOpen1(true), setIsV1(true)}}
            onHoverEnd={() => {setIsOpen1(false), setIsV1(false)}}>
                <motion.p animate={isV1 ? show: hide}>
                    Le otorgamos sin costo equipo de respaldo, en caso de que alguno de los equipos que está rentando o mande a reparación con nosotros, presente algún problema.
                </motion.p>
            <motion.div layout  className={`${Styles.child}`}>
                <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/icon-beneficios/respaldo_equipo" alt="Respaldo de equipos" fill />
            </motion.div>
        </motion.div>
        <motion.div
            layout
            data-isOpen={isOpen2}
            className={`${Styles.parent} shadow-lg`}
            onHoverStart={() => setIsOpen2(true)}
            onHoverEnd={() => setIsOpen2(false)}>

            <motion.div layout  className={`${Styles.child}`}>
                <Image src="https://res.cloudinary.com/dihawqrnt/image/upload/f_auto,q_auto/v1/NuevaPagina/icon-beneficios/poliza_reparacion" alt="Poliza reparacion" fill />
            </motion.div>
        </motion.div>
    </section>
  );
}