import Script from 'next/script'
import Head from 'next/head'
import { FC } from 'react'

import HeaderRedes from '../headredes'
import HeaderInfo from '../headinfo'
import Navmenu from '../navmenu'
import Footer from '../footer'

interface Props  {
    children?:  React.ReactNode
}

export const MainLayaout: FC<Props> = ({children})=>{
    return(
        <>
        <Head>
            <meta charSet='utf-8' />
            <meta name="author" content="HandHeld Solutions" />
            <meta name="description" content="Renta y Reparación de Handheld, Terminal Portátil, PDA, Fácil y Rápido. Lector de Códigos e impresoras de Etiquetas y Credenciales. Equipos Honeywell y Zebra."/>
            <title>Handheld Solutions |Renta y Reparación|Impresoras Zebra|Lectores De Códigos|Terminal Portátil Honeywell</title>
            {/* 
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="google-site-verification" content="Ez-P7Ex2HJcz7DEWL8vFMXzv8cXivMIcti4opUi2mzw" />
            
           
            <meta name="copyright" content="HandHeld Solutions" />
            <meta name="keywords" content="handheld, terminal portátil, renta, reparacion, mantenimiento, impresoras, impresoras de etiquetas, lector de codigos, impresoras móviles, alquiler, inventario, arrendamiento, impresoras de credenciales, reparacion de handheld, i-smart, intelisystems" />
            <meta property="og:image" content="https://i.ibb.co/42K3Zdn/logo-copia.png"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://www.handheldsolutions.com.mx"/>
            
            <link rel="icon" type="image/png" sizes="160x99" href="https://i.ibb.co/42K3Zdn/logo-copia.png"/> */}
        </Head>
        <header>
            <HeaderRedes />
            <HeaderInfo />
            <Navmenu />
        </header>
        <main>
         {children}
        </main>
        <Footer />
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity='sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r' crossOrigin='anonymous' />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa" crossOrigin="anonymous" />
        </>
    )
};

