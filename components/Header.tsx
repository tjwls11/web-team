'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { FiAlignJustify } from 'react-icons/fi'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 py-6 px-8 flex items-center justify-between z-30 bg-[#172d26]">
        <div className="flex items-center space-x-2 mr-auto">
          <Image
            src="/images/icon.png"
            className="w-10 h-10 "
            alt="아이콘"
            width={300}
            height={200}
          />
          <h1 className="text-white font-extrabold text-2xl">고양Hub</h1>
        </div>
        <div className="hidden lg:flex space-x-4">
          <Link
            href="/project"
            className="hover:text-green-500  transition text-white"
          >
            Project
          </Link>
          <Link
            href="/object"
            className="hover:text-green-500  transition text-white"
          >
            Object
          </Link>
          <Link
            href="/"
            className="hover:text-green-500  transition text-white"
          >
            Team
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            <FiAlignJustify size={24} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="lg:hidden bg-[#172d26] text-white mt-16 z-20 fixed top-0 left-0 right-0 ">
          <div className="flex flex-col space-y-4 p-4 text-lg font-bold ml-5">
            <Link
              href="/project"
              className="hover:text-green-500  transition"
              onClick={() => setMenuOpen(false)}
            >
              Project
            </Link>
            <Link
              href="/object"
              className="hover:text-green-500  transition"
              onClick={() => setMenuOpen(false)}
            >
              Object
            </Link>
            <Link
              href="/"
              className="hover:text-green-500 transition"
              onClick={() => setMenuOpen(false)}
            >
              Team
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
