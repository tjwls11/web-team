// app/projects/page.js
import React from 'react'
import Image from 'next/image'
import {
  IoSearch,
  IoCreate,
  IoCheckbox,
  IoDesktopOutline,
} from 'react-icons/io5'
import Link from 'next/link'

export default function ProjectPage() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <hr className="my-4 border-b w-full" />
      <h1 className="text-4xl font-bold font-serif">GoyangHub 기말 프로젝트</h1>
      <p className="text-2xl font-bold mt-4 font-serif">
        영화 커뮤니티: MOVIE NOTE
      </p>

      {/* 이미지 */}
      <div className="flex justify-center mb-8 pt-3">
        <Image
          src="/images/moviepage.png"
          alt="영화 기록장"
          className="w-full max-w-2xl rounded-lg shadow-lg"
          width={300}
          height={300}
        />
      </div>
      <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl p-4 leading-relaxed max-w-prose whitespace-normal font-serif">
        <span className="block font-mono font-bold text-lg sm:text-xl">
          MOVIE NOTE란?
        </span>
        영화에 대해 이야기하고 정보를 공유하는 공간입니다.
        <br />
        각자의 독창적인 영화 감상을 기록할 수 있는 특별한 노트를 통해 여러분의
        생각과 느낌을 나눌 수 있습니다. 영화를 사랑하는 모든 분들이 참여할 수
        있으며, 다양한 장르와 테마에 대해 자유롭게 소통하고 서로의 의견을
        존중하는 기회를 제공합니다. 함께 영화를 보고 다양한 경험을 공유하며, 더
        풍부한 영화 관람 경험을 만들어보세요.
      </p>

      <Link href="/object">
        <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition mb-4">
          프로젝트 목적 확인하러 가기
        </button>
      </Link>
      <hr className="my-4 border-b w-full" />

      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 font-serif">
        주요 기능들
      </h1>

      {/* 기능 박스 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* 기능 1: 영화 검색 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
          <div className="mb-4">
            <IoSearch className="text-4xl text-blue-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 font-serif">
            영화 검색
          </h2>
          <p className="text-gray-600 pb-3">
            장르별로 모아보고 검색할 수 있습니다
          </p>
        </div>

        {/* 기능 2: 영화 정보 확인 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
          <div className="mb-4">
            <IoCheckbox className="text-4xl text-green-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 font-serif">
            영화 정보 확인
          </h2>
          <p className="text-gray-600 pb-3">
            영화의 상세정보를 확인할 수 있습니다
          </p>
        </div>

        {/* 기능 3: 영화 기록장 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
          <div className="mb-4">
            <IoCreate className="text-4xl text-yellow-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 font-serif">
            영화 기록장
          </h2>
          <p className="text-gray-600 pb-3">
            영화를 보고 감상문을 작성할 수 있습니다
          </p>
        </div>

        {/* 기능 4: 영화 커뮤니티 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
          <div className="mb-4">
            <IoDesktopOutline className="text-4xl text-red-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 font-serif">
            영화 커뮤니티
          </h2>
          <p className="text-gray-600 pb-3">
            리뷰를 달며 영화에 대해 소통 가능합니다
          </p>
        </div>
      </div>

      <hr className="my-4 border-b w-full" />
      <div>
        <h1 className="text-2xl font-bold text-center mb-2">
          MOVIE NOTE를 광고 영상으로 만들어보았습니다
          <div className="flex flex-row gap-2 flex-wrap justify-center">
            <video
              src="/images/movienote.mp4"
              controls
              className="w-full max-w-[640px] h-auto" // 너비 및 높이 설정
            />
            <video
              src="/images/movienote1.mp4"
              controls
              className="w-full max-w-[640px] h-auto" // 너비 및 높이 설정
            />
          </div>
        </h1>
      </div>

      <hr className="my-4 border-b w-full" />
    </div>
  )
}
