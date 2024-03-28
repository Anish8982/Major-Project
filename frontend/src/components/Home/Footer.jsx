import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { IoCall } from "react-icons/io5";



function Footer() {
  return (<>
 
 <div className='flex justify-center items-center'>
  <div className='w-[70%]'>
    <div className='flex flex-row'>
      <div className='flex bg-white p-[10px] w-[33%] flex-col'>
        <img src='https://www.healwell24.com/assets/new/img/logo.svg' className='w-[220px] h-[40px]'></img>
        <div className='mt-5'>
          <TiSocialFacebook size={35} className='text-[#BDBDBD]'/>

        </div>
        <hr className="border my-4 w-[65%]" />
        <div className='flex'>
        <span><IoCall /></span>+91 89826 38955

        </div>

      </div>
      <div  className='flex bg-white p-[10px] w-[33%]'><nav>
          <ul className=' flex flex-col gap-2'>
            <h1 className=' text-2xl font-bold text-blue-700'>Company</h1>
            <li><a href="#">About Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Refer a friend</a></li>
          </ul>
        </nav></div>
      <div  className='flex bg-white p-[10px] w-[33%]'><nav>
          <ul className=' flex flex-col gap-2'>
            <h1 className=' text-2xl font-bold text-blue-700'>Services</h1>
            <li><a href="#">Online consultation</a></li>
            <li><a href="#">Lab tests</a></li>
            <li><a href="#">Doctor In-person visit</a></li>
            <li><a href="#">Corporate package</a></li>
            <li><a href="#">Covid-19 care</a></li>
            <li><a href="#">Symptoms</a></li>
            <li><a href="#">Cities </a></li>

          </ul>
        </nav></div>
        </div>
    </div>
      <div>

      </div>
      <div>
      </div>
      </div>
      </>
  )
}

export default Footer
