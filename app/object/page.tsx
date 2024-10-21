import React from 'react'
import Image from 'next/image'

export default function ObjectPage() {
  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center p-6">
      {/* 사진 섹션 */}
      <div className="w-full max-w-4xl bg-white p-10 rounded-lg shadow-lg mx-auto mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          <Image
            src="/images/Netflix.jpg"
            alt="넷플릭스"
            width={300}
            height={200}
            className="object-cover rounded-lg"
          />
          <Image
            src="/images/watcha.png"
            alt="왓챠"
            width={300}
            height={200}
            className="object-cover rounded-lg"
          />
          <Image
            src="/images/tving.png"
            alt="티빙"
            width={300}
            height={200}
            className="object-cover rounded-lg"
          />
          <Image
            src="/images/disnep.jpg"
            alt="디즈니플러스"
            width={300}
            height={200}
            className="object-cover rounded-lg"
          />
          <Image
            src="/images/coupang.png"
            alt="쿠팡플레이"
            width={300}
            height={200}
            className="object-cover rounded-lg"
          />
          <Image
            src="/images/unnamed.png"
            alt="웨이브"
            width={300}
            height={200}
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* 소개 섹션 */}
      <div className="w-full max-w-4xl bg-white p-10 rounded-lg shadow-lg mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">개발 목적</h2>
        <p className="text-lg text-gray-700 mb-6">
          이 영화 소개 사이트는 OTT 서비스의 활성화로 인해 언제 어디서든 다양한
          영화를 접하기 쉬워짐에 따라, 한 곳에서 쉽게 찾고, 장르별로 모아보며
          상세한 정보를 제공하는 것을 돕고자 합니다. 영화 팬들이 더욱 쉽게
          원하는 영화를 발견하고, 영화에 대한 자세한 설명, 감독 및 배우 정보를
          확인할 수 있는 플랫폼을 제공하며, 영화 기록장 등 다양한 기능으로
          영화를 더욱 깊이 있게 즐길 수 있도록 돕습니다.
        </p>
      </div>
    </div>
  )
}
