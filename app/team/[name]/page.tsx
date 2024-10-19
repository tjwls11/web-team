// app/team/[name]/page.tsx
'use client'

import { useParams } from 'next/navigation'
import teamMembers from '@/components/TeamDetail' // 데이터 가져오기

export default function TeamMemberPage() {
  const { name } = useParams()
  const memberName = Array.isArray(name) ? name[0] : name

  if (!memberName) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        로딩 중...
      </div>
    )
  }

  const member = teamMembers.find(
    (member) => member.name === decodeURIComponent(memberName)
  )

  if (!member) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">
          팀원 정보를 찾을 수 없습니다.
        </h1>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">{member.name}</h1>
      <img
        src={member.image}
        alt={`${member.name} 사진`}
        className="mb-4 w-64 h-64 object-cover rounded-full shadow-lg"
      />
      <p className="text-md text-center">{member.description}</p>
    </div>
  )
}
