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
    <div className="flex flex-col min-h-screen justify-center items-center p-8">
      <hr className="my-6 border-t border-gray-300 w-full" />
      <h1 className="text-5xl font-extrabold font-serif text-gray-800 mb-4">
        GoyangHub 기말 프로젝트
      </h1>
      <p className="text-3xl font-semibold mt-4 font-serif text-gray-700 mb-8">
        영화 커뮤니티: <span className="text-green-800">MOVIE NOTE</span>
      </p>

      {/* 이미지 */}
      <div className="flex justify-center mb-8 pt-5">
        <Image
          src="/images/moviepage.png"
          alt="영화 기록장"
          className="w-full max-w-2xl rounded-lg shadow-lg"
          width={400}
          height={400}
        />
      </div>
      <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl p-4 leading-relaxed max-w-xl whitespace-normal font-serif text-gray-600 mb-8">
        <span className="block font-mono font-bold sm:text-2xl text-gray-900 mb-2">
          MOVIE NOTE란?
        </span>
        영화에 대해 이야기하고 정보를 공유하는 공간입니다. 각자의 독창적인 영화
        감상을 기록할 수 있는 특별한 노트를 통해 여러분의 생각과 느낌을 나눌 수
        있습니다. 영화를 사랑하는 모든 분들이 참여할 수 있으며, 다양한 장르와
        테마에 대해 자유롭게 소통하고 서로의 의견을 존중하는 기회를 제공합니다.
      </p>

      <Link href="/object">
        <button className="mt-4 bg-green-800 text-white py-3 px-8 rounded-full hover:bg-gradient-to-l hover:bg-blue-800 transition duration-300 ease-in-out shadow-md">
          프로젝트 목적 확인하러 가기
        </button>
      </Link>

      <hr className="my-8 border-t border-gray-300 w-full" />

      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 font-serif">
        주요 기능들
      </h1>

      {/* 기능 박스 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
        {/* 기능 1: 영화 검색 */}
        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200">
          <div className="mb-4">
            <IoSearch className="text-5xl text-blue-500" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2 font-serif">
            영화 검색
          </h2>
          <p className="text-gray-600">장르별로 모아보고 검색할 수 있습니다.</p>
        </div>

        {/* 기능 2: 영화 정보 확인 */}
        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200">
          <div className="mb-4">
            <IoCheckbox className="text-5xl text-green-500" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2 font-serif">
            영화 정보 확인
          </h2>
          <p className="text-gray-600">영화의 상세정보를 확인할 수 있습니다.</p>
        </div>

        {/* 기능 3: 영화 기록장 */}
        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200">
          <div className="mb-4">
            <IoCreate className="text-5xl text-yellow-500" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2 font-serif">
            영화 기록장
          </h2>
          <p className="text-gray-600">
            영화를 보고 감상문을 작성할 수 있습니다.
          </p>
        </div>

        {/* 기능 4: 영화 커뮤니티 */}
        <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200">
          <div className="mb-4">
            <IoDesktopOutline className="text-5xl text-red-500" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2 font-serif">
            영화 커뮤니티
          </h2>
          <p className="text-gray-600">
            리뷰를 달며 영화에 대해 소통 가능합니다.
          </p>
        </div>
      </div>

      <hr className="my-8 border-t border-gray-300 w-full" />

      {/* 영상 */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-center mb-4">
          MOVIE NOTE를 광고 영상으로 만들어보았습니다
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <video
            src="/images/movienote.mp4"
            controls
            className="w-full max-w-md rounded-lg shadow-md"
          />
          <video
            src="/images/movienote1.mp4"
            controls
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>
      </div>

      <hr className="my-6 border-t border-gray-300 w-full" />
    </div>
  )
}
