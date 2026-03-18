import { useEffect, useState } from 'react'
import './../styles/pages/contact.css'

// FormSubmit 서비스를 통해 실제 메일 발송
// https://formsubmit.co — 가입 없이 이메일만으로 사용 가능
// 첫 전송 시 해당 이메일로 활성화 확인 메일 1회 발송됨

const FORMSUBMIT_EMAIL = 'sbgwak@gmail.com'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [errors, setErrors] = useState({})

  function validate() {
    const company = document.getElementById('company')?.value?.trim() || ''
    const name    = document.getElementById('name')?.value?.trim()    || ''
    const phone   = document.getElementById('phone')?.value?.trim()   || ''
    const newErr  = {}
    if (!company) newErr.company = true
    if (!name)    newErr.name    = true
    if (!phone)   newErr.phone   = true
    setErrors(newErr)
    return Object.keys(newErr).length === 0
  }

  async function handleSubmit() {
    if (!validate()) return

    const company = document.getElementById('company')?.value?.trim() || ''
    const name    = document.getElementById('name')?.value?.trim()    || ''
    const phone   = document.getElementById('phone')?.value?.trim()   || ''
    const email   = document.getElementById('email')?.value?.trim()   || ''
    const message = document.getElementById('message')?.value?.trim() || ''

    const interests = []
    document.querySelectorAll('.check-group input:checked').forEach(cb => interests.push(cb.value))

    const formData = new FormData()
    formData.append('회사명',   company)
    formData.append('담당자',   name)
    formData.append('연락처',   phone)
    formData.append('이메일',   email)
    formData.append('관심분야', interests.join(', ') || '미선택')
    formData.append('문의내용', message)
    // FormSubmit 옵션
    formData.append('_subject', `[지엔디비즈 도입상담] ${company} - ${name}`)
    formData.append('_captcha', 'false')          // 캡차 비활성화
    formData.append('_template', 'table')         // 표 형식으로 수신 (캡처화면과 동일)
    formData.append('_next',    window.location.origin + '/contact') // 리다이렉트 방지

    setSending(true)
    try {
      const res = await fetch(`https://formsubmit.co/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        body: formData,
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        alert('전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.')
      }
    } catch (err) {
      alert('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해 주세요.')
    } finally {
      setSending(false)
    }
  }

  useEffect(() => {
    const ro = new IntersectionObserver(
      es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); ro.unobserve(e.target) } }),
      { threshold: 0.05 }
    )
    document.querySelectorAll('.reveal').forEach(el => ro.observe(el))
    return () => { ro.disconnect() }
  }, [])

  return (
    <>
<div className="pg-contact">
<div className="page-hero">
  <div className="grid-bg" aria-hidden="true"></div>
  <div className="page-hero-inner">
    <h1 className="page-title">
      제조 AI 도입,<br/><em>지금 바로 시작</em>할 수 있습니다
    </h1>
    <p className="page-desc">
      15년 스마트팩토리 구축 경험과 AI 기술이 함께합니다.<br/>"데이터는 있는데 분석이 안 된다" "불량을 놓친다" "로봇이 스스로 판단 못한다"<br/>지엔디비즈 AI 솔루션이 지금 바로 해결합니다.
    </p>
  </div>
</div>

<section id="contact-form-section" aria-labelledby="form-h">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title" id="form-h">상담 신청서 작성</h2>
      <p className="sec-desc">현장 상황을 간략히 알려주시면 전문가가 맞춤 솔루션을 안내해 드립니다</p>
    </div>

    <div className="form-layout">

      <div className="contact-form reveal">
        {!submitted ? (
        <div id="form-body">
          <div className="form-subtitle">모든 * 항목은 필수 입력 사항입니다</div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="company">회사명 *</label>
              <input id="company" type="text" autoComplete="organization"
                placeholder="회사명을 입력해 주세요"
                className={`form-input${errors.company ? ' input-error' : ''}`}/>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="name">담당자명 *</label>
              <input id="name" type="text" autoComplete="name"
                placeholder="담당자 성함"
                className={`form-input${errors.name ? ' input-error' : ''}`}/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="phone">연락처 *</label>
              <input id="phone" type="tel" autoComplete="tel"
                placeholder="010-0000-0000"
                className={`form-input${errors.phone ? ' input-error' : ''}`}/>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">이메일</label>
              <input id="email" type="email" autoComplete="email"
                placeholder="email@company.com" className="form-input"/>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">관심 분야</label>
            <div className="check-group">
              <label className="check-label"><input type="checkbox" value="ai"/> AI 솔루션</label>
              <label className="check-label"><input type="checkbox" value="imeps"/> i-MEPS</label>
              <label className="check-label"><input type="checkbox" value="consulting"/> 컨설팅</label>
              <label className="check-label"><input type="checkbox" value="iot"/> IoT / FA 연동</label>
            </div>
          </div>

          <div className="form-divider" aria-hidden="true"></div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">문의 내용</label>
            <textarea id="message" rows="4" className="form-textarea"
              placeholder="현장 상황을 간략히 알려주시면 더욱 정확한 안내가 가능합니다. (예: MES 사용 여부, 직원 수, 주요 품목 등)"/>
          </div>

          <button className="form-submit" onClick={handleSubmit} type="button" disabled={sending}>
            {sending ? '전송 중...' : '상담 신청하기'}
            {!sending && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>}
          </button>
          <p className="form-notice">입력하신 정보는 상담 목적으로만 활용됩니다</p>
        </div>
        ) : (
        <div className="form-success" role="alert">
          <div className="success-icon" aria-hidden="true">
            <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30" r="28" stroke="var(--accent)" strokeWidth="2.5"/>
              <path d="M18 30l9 9 15-18" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="success-title">상담 신청이 완료되었습니다!</div>
          <div className="success-desc">빠른 시간 내에 전문 상담사가 연락드리겠습니다.<br/>궁금한 사항은 <a href="tel:031-708-2997" style={{color:"var(--accent)"}}>031-708-2997</a>로 연락해 주세요.</div>
          <button className="success-back-btn" onClick={() => setSubmitted(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            다시 문의하기
          </button>
        </div>)}
      </div>

      <div className="contact-sidebar reveal" style={{transitionDelay:".1s"}}>
        <div className="contact-info-card">
          <div className="ci-title">연락처 정보</div>
          <div className="ci-items">
            <div className="ci-item">
              <div className="ci-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></div>
              <div><div className="ci-label">대표전화</div><div className="ci-val"><a href="tel:031-708-2997" style={{letterSpacing:"0"}}>031-708-2997</a></div></div>
            </div>
            <div className="ci-item">
              <div className="ci-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
              <div><div className="ci-label">이메일</div><div className="ci-val"><a href="mailto:sbgwak@gmail.com">sbgwak@gmail.com</a></div></div>
            </div>
            <div className="ci-item">
              <div className="ci-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div>
              <div><div className="ci-label">주소</div><div className="ci-val">경기 성남시 분당구<br/>성남대로43번길 10, 205호</div></div>
            </div>
            <div className="ci-item">
              <div className="ci-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
              <div><div className="ci-label">웹사이트</div><div className="ci-val"><a href="http://www.gndbiz.com" target="_blank" rel="noopener">www.gndbiz.com</a></div></div>
            </div>
          </div>
        </div>
        <div className="contact-cert-card">
          <div className="cert-card-title">인증 및 수상</div>
          <div className="cert-badges">
            <div className="cert-badge-item"><span className="cert-dot" aria-hidden="true"></span>2018 대한민국 기업대상 ICT 스마트팩토리 부문</div>
            <div className="cert-badge-item"><span className="cert-dot" aria-hidden="true"></span>KOSF 스마트팩토리 전문공급기업</div>
            <div className="cert-badge-item"><span className="cert-dot" aria-hidden="true"></span>기업부설연구소 인증</div>
            <div className="cert-badge-item"><span className="cert-dot" aria-hidden="true"></span>벤처기업 인증</div>
            <div className="cert-badge-item"><span className="cert-dot" aria-hidden="true"></span>중소벤처기업부 등록기업</div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div style={{height:"48px"}} aria-hidden="true"></div>
</section>

</div>
    </>
  )
}
