'use client'

import Link from 'next/link'
import teamMembers from '@/components/TeamDetail'

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <div>
        <h1 className="text-center font-bold text-2xl">고양 HUb?</h1>
        <div className="mt-4"></div>
      </div>
      <hr className="my-4 border-b w-full" />
      {/* 프로젝트 진행 */}
      <div>
        <h1 className="text-center font-bold text-2xl">
          고양 HUb 프로젝트 진행방식
        </h1>
        <div className="mt-4">
          <p> 1.만들어야할 페이지를 나눠서 각자 한 페이지씩 맡아 진행</p>
          <p> 2.각자 깃허브에 올려 코드 공유</p>
          <p> 3.오류가 있는 부분 서로 도와주며 제작</p>
        </div>
      </div>

      <hr className="my-4 border-b w-full" />
      <h1 className="text-center text-4xl font-bold mb-8">고양hub</h1>

      <h1 className="text-center text-2xl">팀원소개</h1>
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
