import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <nav className="bg-white p-3  sticky top-0  z-10 ">
    <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row mb-1">
       
      <h1 className="text-3xl font-bold text-black grid place-content-center mb-2 md:mb-0 ml-7">
        <Link href="/" className="text-black no-underline  font-bold ml-11">
        autowarm
        </Link>
      </h1>

      <div className="flex flex-row justify-evenly align-middle gap-6 text-[#1F1F1F] text-2xl lg:text-2xl mb-2 md:mb-0" style={{ fontFamily: 'Inter', fontSize: '18px', fontStyle: 'normal', fontWeight: 500, lineHeight: '24px', letterSpacing: '-0.64px' }}>
        <Link href="/" className="text-[#1F1F1F] no-underline mx-2">Home</Link>
        <Link href="/about" className="text-[#1F1F1F] no-underline mx-2">About</Link>
        <Link href="/pricing" className="text-[#1F1F1F] no-underline mx-2">Pricing</Link>
        <Link href="/blog" className="text-[#1F1F1F] no-underline mx-2">Blog</Link>
        <Link href="/FAQ" className="text-[#1F1F1F] no-underline mx-2">FAQ</Link>
        <Link href="/contact" className="text-[#1F1F1F] no-underline mx-2">Contact Us</Link>
      </div>

      <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 mr-18 mt-0">
        <Link href="https://www.youtube.com/@uchihagaming4747" className="text-white/90 ">
          <button className=' bg-blue-500 text-white mr-8 text-xl p-2 px-3  rounded-xl'>Contact us</button>
        </Link>
       
   
      </div>

    </div>
  </nav>
  )
}
