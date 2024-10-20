'use client'

import teamMembers from '@/components/TeamDetail'

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-center font-bold text-3xl mb-8">고양 HUb?</h1>
      <div className="flex items-center mt-6 mb-8">
        <div className="mr-6">
          <img
            src="/images/GoyangHub.png"
            alt="고양허브로고"
            className="w-52 h-52 object-cover"
          />
        </div>
        <div>
          <p className="mt-2 ml-4 text-lg">
            안녕하세요. 웹서버보안프로그래밍 1분반 고양Hub 팀입니다. <br />
            수업시간에 사용하는 GitHub에서 영감을 받아 팀 이름을 지었습니다.{' '}
            <br />
            이번 기말 프로젝트에서는 영화 커뮤니티를 제작하기로 했습니다. <br />
            저희는 수업시간에 사용하는 Next.js와 Tailwind CSS를 활용하고, 영화
            오픈 API를 사용하여 만들 예정입니다.
          </p>
        </div>
      </div>
      <hr className="my-8 border-gray-300" />
      {/* 프로젝트 진행 */}
      <div className="mb-8">
        <h1 className="text-center font-bold text-2xl mb-4">
          고양 HUb 프로젝트 진행방식
        </h1>
        <div className="mt-4 text-lg">
          <p> 1. 만들어야 할 페이지를 나눠서 각자 한 페이지씩 맡아 진행</p>
          <p> 2. 각자 깃허브에 올려 코드 공유</p>
          <p> 3. 오류가 있는 부분 서로 도와주며 제작</p>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />
      <h1 className="text-center text-4xl font-bold mb-8">고양hub</h1>

      <h1 className="text-center text-2xl mb-6">팀원소개</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-neutral-300 p-6 rounded-lg text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h2 className="text-lg font-bold mb-2">{member.name}</h2>
            <p className="mb-4">{member.description}</p>

            <div>
              {/* 깃허브 링크 */}
              <a
                href={member.gitlink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-2 bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 transition mr-2">
                  깃허브
                </button>
              </a>

              {/* 포트폴리오 링크 */}
              <a
                href={member.portfoliolink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-2 bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700 transition">
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
