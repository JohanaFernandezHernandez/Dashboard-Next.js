"use client";


import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/lib/store';
import { IoCardOutline } from 'react-icons/io5';



export const WidgetsGrid = () => {

    const count = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">

      <SimpleWidget label='Tu carrito' subtitle='Articulos en el carrito' href='/dashboard/counter' title={count} icon={<IoCardOutline size={50} className="text-blue-500"/>}/>

      </div>

  )
}
  