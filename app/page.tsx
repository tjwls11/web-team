'use client'

import Link from 'next/link'
import teamMembers from '@/components/TeamDetail'

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-center text-4xl font-bold mb-8">고양hub</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-200 p-6 rounded-lg text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h2 className="text-lg font-bold">{member.name}</h2>
            <p className="mb-4">{member.description}</p>
            <Link href={`/team/${member.name}`}>
              <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                상세정보 보기
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
