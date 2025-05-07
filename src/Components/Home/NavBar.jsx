import React from 'react'
import { SMlogo } from '../../assets/Logos/Logos'
import Button from '../Common/Button'
function NavBar() {
  return (
    <div className='flex justify-between items-center px-28 py-10 shadow-md w-[100%]'>
        <div className='bg-red-600'>
            <a href="#">
                <img src={SMlogo} width={200} height={100} alt="KaafiPay" />
            </a>
            </div>
        <div className='grid grid-cols-4 gap-4 text-xl'>
            <a href="#">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Help</a>
        </div>
        <div className='grid grid-cols-2 gap-4 text-xl text-white font-bold '>
            <Button value="Login" fun={()=>{}}/>
            <Button value="Sign Up" fun={()=>{}}/>
        </div>
    </div>
  )
}

export default NavBar