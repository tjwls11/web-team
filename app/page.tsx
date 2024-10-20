'use client'

import teamMembers from '@/components/TeamDetail'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen p-16">
      <h1 className="text-center font-bold text-4xl mb-8 text-green-900">
        고양 Hub
      </h1>
      <div className="flex flex-col sm:flex-row items-center mt-6 mb-8 shadow-lg rounded-lg bg-white p-6">
        <div className="mb-4 sm:mb-0 sm:mr-6">
          <Image
            src="/images/GoyangHub.png"
            alt="고양허브로고"
            width={200}
            height={200}
            className="rounded-full border-2 border-green-900 shadow-xl"
          />
        </div>
        <div className="text-base text-gray-700">
          <p>안녕하세요. 웹서버보안프로그래밍 1분반 고양Hub 팀입니다.</p>
          <p>
            수업시간에 사용하는 GitHub에서 영감을 받아 팀 이름을 지었습니다.
          </p>
          <p>이번 기말 프로젝트에서는 영화 커뮤니티를 제작하기로 했습니다.</p>
          <p>
            Next.js와 Tailwind CSS를 활용하고, 영화 오픈 API를 사용할
            예정입니다.
          </p>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      {/* 프로젝트 진행 */}
      <div className="mb-8">
        <h1 className="text-center font-bold text-3xl mb-4 text-green-900">
          고양 Hub 프로젝트 진행방식
        </h1>
        <div className="text-lg text-gray-700">
          <ul className="list-disc list-inside">
            <li className="mb-2">각자 한 페이지씩 맡아 진행</li>
            <li className="mb-2">깃허브를 통해 코드 공유</li>
            <li>서로 도와주며 오류 해결</li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      <h1 className="text-center text-3xl mb-6 font-bold text-green-900">
        팀원소개
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#c0d7b5] p-6 rounded-lg text-center shadow-md"
          >
            {/* 프로필 사진 */}
            <Image
              src={member.image}
              alt={member.name}
              width={100}
              height={100}
              className="mx-auto rounded-full mb-1 border-2 border-[#253038dd]"
            />
            {/* 이름 */}
            <h2 className="text-lg font-bold mb-2 text-gray-800">
              {member.name}
            </h2>
            {/* 설명 */}
            <p className="mb-4 text-gray-700">{member.description}</p>
            <div className="flex flex-col items-center">
              {/* 깃허브 링크 */}
              <a
                href={member.gitlink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-800 text-gray-200 py-2 px-4 rounded hover:bg-green-700 transition">
                  깃허브
                </button>
              </a>
              {/* 포트폴리오 링크 */}
              <a
                href={member.portfoliolink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-800 text-gray-200 py-2 px-4 mt-2 rounded hover:bg-green-700 transition">
                  포트폴리오
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
