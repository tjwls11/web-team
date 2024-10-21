'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import Link from 'next/link'

const images = [
  {
    src: '/images/project/home.png',
    alt: '영화를 목록을 볼 수 있으며 \n 검색기능을 활용하여 원하는 영화를 검색해 보세요. \n 영화를 장르별, 별점순, 이름순으로 나열 가능합니다.',
  },
  {
    src: '/images/project/review.png',
    alt: '영화에 대한 상세정보를 확인 가능합니다.\n 영화의 제목, 장르, 개봉일, 감독, 평점, 출연진, 줄거리 등\n 세부사항을 한눈에 볼 수 있도록 제공합니다.',
  },
  {
    src: '/images/project/mypage.png',
    alt: 'My profile에서는 회원 정보를 확인 가능합니다.\n"나만의 영화리스트"를 통해 영화 찜목록을 확인하고\n"나만의 영화감상문"을 통해 영화를 기록하세요.',
  },
  {
    src: '/images/project/community.png',
    alt: '영화에 대한 자신의 생각을 공유하고 \n 소통하는 커뮤니티 페이지입니다.\n 글을 올리고 가장 많은 좋아요를 받아보세요!',
  },
]

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const changeSlide = (direction: number) => {
    setCurrentIndex(
      (prev) => (prev + direction + images.length) % images.length
    )
  }

  return (
    <div className="relative mb-10 p-16 text-center">
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={() => changeSlide(-1)}
          className="bg-gray-800 text-white p-3 rounded-full"
        >
          <FaAngleLeft />
        </button>

        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={600}
          height={400}
          className="w-full h-auto transition-transform duration-500"
        />

        <button
          onClick={() => changeSlide(1)}
          className="bg-gray-800 text-white p-3 rounded-full"
        >
          <FaAngleRight />
        </button>
      </div>

      <p className="text-lg font-semibold text-gray-800 mt-4 px-4 whitespace-pre-line">
        {images[currentIndex].alt}
      </p>
    </div>
  )
}

export default function ProjectPage() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center p-8 sm:p-10 md:p-12 lg:p-14 xl:p-16">
      <div className="flex text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold font-serif text-gray-800">
          GoyangHub 프로젝트 :{' '}
          <span className="text-green-900">MOVIE NOTE</span>
        </h1>
      </div>

      <ImageSlider />

      <div className="flex flex-col sm:flex-row justify-center items-center mt-4">
        <Link href="/object">
          <button className="bg-green-800 text-white py-3 px-6 rounded-full hover:bg-green-950 transition duration-300 ease-in-out shadow-md sm:mr-4">
            프로젝트 목적 확인하러 가기
          </button>
        </Link>

        <Link href="/video">
          <button className="bg-green-800 text-white py-3 px-6 rounded-full hover:bg-green-950 transition duration-300 ease-in-out shadow-md mt-4 sm:mt-0">
            광고 동영상 보러가기
          </button>
        </Link>
      </div>
    </div>
  )
}
