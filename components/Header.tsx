'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { FiAlignJustify } from 'react-icons/fi'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 py-6 px-8 flex items-center justify-between z-20 bg-[#172d26]">
        <div className="flex items-center space-x-2">
          <Image
            src="/images/icon.png"
            className="w-10 h-10"
            alt="아이콘"
            width={300}
            height={200}
          />
          <h1 className="text-white text-lg font-bold">고양HUB</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/project"
            className="hover:text-blue-100 transition text-white"
          >
            Project
          </Link>
          <Link
            href="/object"
            className="hover:text-blue-100 transition text-white"
          >
            Object
          </Link>
          <Link href="/" className="hover:text-blue-100 transition text-white">
            Team
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            <FiAlignJustify size={24} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white mt-16 z-10 fixed top-0 left-0 right-0">
          <div className="flex flex-col space-y-4 p-4 text-lg font-bold">
            <Link href="/project" className="hover:text-blue-100 transition">
              Project
            </Link>
            <Link href="/object" className="hover:text-blue-100 transition">
              Object
            </Link>
            <Link href="/" className="hover:text-blue-100 transition">
              Team
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
