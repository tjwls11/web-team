'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import Link from 'next/link'

const ImageSlider = () => {
  const images = [
    {
      src: '/images/project/home.png',
      alt: '영화를 목록을 볼 수 있으며 검색기능을 활용하여 원하는 영화를 검색해 보세요. \n영화를 장르별, 별점순, 이름순으로 나열 가능합니다.',
    },
    {
      src: '/images/project/review.png',
      alt: '영화에 대한 상세정보를 확인 가능합니다.\n 영화의 제목, 장르, 개봉일, 감독, 출연진, 줄거리 등 세부사항을 한눈에 볼 수 있도록 제공합니다.\n 영화에 대해 리뷰를 남겨 보며 소통이 가능해집니다.',
    },
    {
      src: '/images/project/mypage.png',
      alt: 'My profile에서는 회원 정보를 확인 가능합니다.\n"나만의 영화리스트"를 통해 영화 찜목록을 확인하고\n"나만의 영화감상문"을 통해 영화를 기록하세요.',
    },
    {
      src: '/images/project/community.png',
      alt: '영화에 대한 자신의 생각을 공유하고 소통하는 커뮤니티 페이지입니다.\n 글을 올리고 가장 많은 좋아요를 받아보세요!',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative mb-10">
      {/* 이모지 버튼과 이미지가 나란히 보이도록 flex 사용 */}
      <div className="flex justify-center items-center space-x-4">
        {/* 왼쪽 이모지 버튼 */}
        <button
          onClick={prevSlide}
          className="bg-gray-800 text-white p-3 rounded-full"
        >
          <FaAngleLeft />
        </button>

        {/* 이미지 */}
        <div className="overflow-hidden">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            width={600}
            height={400}
            className="w-full h-auto transition-transform duration-500"
          />
        </div>

        {/* 오른쪽 이모지 버튼 */}
        <button
          onClick={nextSlide}
          className="bg-gray-800 text-white p-3 rounded-full"
        >
          <FaAngleRight />
        </button>
      </div>

      {/* 텍스트가 잘 보이도록 공간 조정 및 줄바꿈 처리 */}
      <div className="text-center mt-4 px-4">
        <p className="text-lg font-semibold text-gray-800 whitespace-pre-line">
          {images[currentIndex].alt}
        </p>
      </div>
    </div>
  )
}

export default function ProjectPage() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center p-8 sm:p-10 md:p-12 lg:p-14 xl:p-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-gray-800 mb-9 text-center">
        GoyangHub 기말 프로젝트
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 mb-10 font-serif text-gray-700 text-center">
        영화 커뮤니티{' '}
        <span className="text-3xl text-green-800">MOVIE NOTE</span>
      </p>

      {/* 이미지 슬라이더 추가 */}
      <ImageSlider />

      {/* 버튼들 flex로 정렬 */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start">
        <Link href="/object">
          <button className="mt-4 bg-green-800 text-white py-3 px-6 rounded-full hover:bg-green-950 transition duration-300 ease-in-out shadow-md mr-0 sm:mr-4">
            프로젝트 목적 확인하러 가기
          </button>
        </Link>

        <Link href="/video">
          <button className="mt-4 bg-green-800 text-white py-3 px-6 rounded-full hover:bg-green-950 transition duration-300 ease-in-out shadow-md">
            광고 동영상 보러가기
          </button>
        </Link>
      </div>
    </div>
  )
}
