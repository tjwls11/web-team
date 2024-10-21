'use client'

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
    <div className="flex flex-col min-h-screen justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-gray-800 mb-4 text-center">
        GoyangHub 기말 프로젝트
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl font-semibold mt-2 font-serif text-gray-700 mb-6 text-center">
        영화 커뮤니티: <span className="text-green-800">MOVIE NOTE</span>
      </p>

      {/* 이미지 */}
      <div className="flex justify-center mb-8 w-full">
        <Image
          src="/images/moviepage.png"
          alt="영화 기록장"
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl rounded-lg shadow-lg"
          width={400}
          height={400}
        />
      </div>

      <Link href="/object">
        <button className="mt-4 bg-green-800 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-full hover:bg-gradient-to-l hover:bg-blue-800 transition duration-300 ease-in-out shadow-md">
          프로젝트 목적 확인하러 가기
        </button>
      </Link>

      <hr className="my-8 border-t border-gray-300 w-full" />

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
        주요 기능들
      </h1>

      {/* 기능 박스 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-16">
        {[
          {
            icon: (
              <IoSearch className="text-4xl sm:text-5xl text-blue-500 mb-4" />
            ),
            title: '영화 검색',
            description: '장르별로 모아보고 검색할 수 있습니다.',
          },
          {
            icon: (
              <IoCheckbox className="text-4xl sm:text-5xl text-green-500 mb-4" />
            ),
            title: '영화 정보 확인',
            description: '영화의 상세정보를 확인할 수 있습니다.',
          },
          {
            icon: (
              <IoCreate className="text-4xl sm:text-5xl text-yellow-500 mb-4" />
            ),
            title: '영화 기록장',
            description: '영화를 보고 감상문을 작성할 수 있습니다.',
          },
          {
            icon: (
              <IoDesktopOutline className="text-4xl sm:text-5xl text-red-500 mb-4" />
            ),
            title: '영화 커뮤니티',
            description: '리뷰를 달며 영화에 대해 소통 가능합니다.',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300 border border-gray-200 min-h-[220px]"
          >
            {feature.icon}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 font-serif">
              {feature.title}
            </h2>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <hr className="my-8 border-t border-gray-300 w-full" />

      {/* 영상 */}
      <div className="mb-12 flex flex-col justify-center items-center">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
          MOVIE NOTE를 광고 영상으로 만들어보았습니다
        </h1>
        <div className="flex flex-col justify-center items-center gap-6 sm:flex-row">
          <div className="flex justify-center items-center">
            <video
              src="/images/movienote.mp4"
              controls
              className="w-full max-w-xs sm:max-w-md md:max-w-lg rounded-lg shadow-lg"
            />
          </div>
          <div className="flex justify-center items-center">
            <video
              src="/images/movienote1.mp4"
              controls
              className="w-full max-w-xs sm:max-w-md md:max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
