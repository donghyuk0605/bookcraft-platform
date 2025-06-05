export default function PrivacyPage() {
  return (
    <div className="container py-8 max-w-3xl prose">
      <h1>개인정보처리방침</h1>
      <p>
        책공장은 서비스 제공을 위해 최소한의 개인정보만을 수집하며, 수집된 정보는
        회원 관리와 서비스 개선을 위해서만 사용됩니다.
      </p>
      <h2>수집 항목</h2>
      <ul>
        <li>이메일 주소</li>
        <li>비밀번호(암호화 저장)</li>
      </ul>
      <h2>보관 기간</h2>
      <p>회원 탈퇴 시 즉시 파기하며, 법령에 따라 보관이 필요한 정보는 해당 기간 동안 보관합니다.</p>
      <h2>문의</h2>
      <p>privacy@bookcraft.co 로 문의하시면 상세히 안내해 드리겠습니다.</p>
    </div>
  )
}
