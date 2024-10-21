import React from 'react'

export default function VideoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
        MOVIE NOTE를 광고 동영상으로 제작하였습니다
      </h1>

      {/* 영상 1 */}
      <div className="mb-12 w-full max-w-2xl border border-gray-300 rounded-lg shadow-md p-6">
        <p className="text-lg text-gray-700 mb-4 text-center">
          1. 재미있는 요소를 추가해 광고형식으로 제작하였습니다
        </p>
        <video
          src="/images/movienote.mp4"
          controls
          className="w-full rounded-lg"
        />
        <div className="flex justify-center mt-4">
          <a
            href="https://youtu.be/LJEtyvKiSeE?si=FieAty1eOZMpJEe_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="py-2 px-4 bg-green-800 text-white rounded-lg hover:bg-green-900">
              YouTube로 놀러가기
            </button>
          </a>
        </div>
      </div>

      {/* 영상 2 */}
      <div className="w-full max-w-2xl border border-gray-300 rounded-lg shadow-md p-6">
        <p className="text-lg text-gray-700 mb-4 text-center">
          2. 공익광고형식으로 제작하였습니다
        </p>
        <video
          src="/images/movienote1.mp4"
          controls
          className="w-full rounded-lg"
        />
        <div className="flex justify-center mt-4">
          <a
            href="https://youtu.be/DBbrNpLv0U0?si=K4WICjtGb-VnHipN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="py-2 px-4 bg-green-800 text-white rounded-lg hover:bg-green-600">
              YouTube로 놀러가기
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
