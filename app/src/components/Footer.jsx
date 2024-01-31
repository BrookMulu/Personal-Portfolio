import React from 'react'
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
        <div className="container p-12 flex justify-between">
            <Image src = {"/images/logo.png"} width = {75} height = {100} className='mx-auto lg:mx-12'></Image>
            <p className="text-slate-600"> &copy; 2024 Brook. All rigts Reserved</p>
        </div>
    </footer>
 )
}

export default Footer;