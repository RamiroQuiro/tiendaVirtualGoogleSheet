"use client"
import Carts from '../components/Carts';
import { useCarritoCompras } from '../../context/contextStore';

export default function Cart() {

  const {isOpen,getSubtotal,items}=useCarritoCompras((state)=>({
    isOpen:state.isOpen,
    items:state.items,
    getSubtotal:state.getSubtotal(state)
}))
if (isOpen && items.length) return (
    <div className={` animate-[aparecer_.3s] z-[50] bg-gray-700/40 backdrop-blur-sm fixed w-full h-screen  top-0 left-0  `}>
        <Carts
                items={items}
         isOpen={isOpen}
         getSubtotal={getSubtotal}
        />
       
    </div>
  )
  
}
