import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ReactElement } from 'react'
import { NextPage } from 'next'
import CarouselI from '@/components/index/carousel'
import IA from '@/components/index/serviciosprincipales'
import IS from '@/components/index/serviciossec'
import IE from '@/components/index/clientes'
import IEE from '@/components/index/provedores'
import IL from '@/components/index/certificados'
import FM from '@/components/index/form'


const HomePage: NextPage = () =>{
  return (
    <>
      <CarouselI />
      <IA />
      <IEE />
      <IS />
      <IE />
      <IS />
      <IL />
      <FM />  
    </>
  )
}
export default HomePage;



