import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './../styles/pages/info.css'

export default function InfoPage() {
  useEffect(() => {
    const ro = new IntersectionObserver(es => {
      es.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target)} })
    }, { threshold: 0.06 })
    document.querySelectorAll('.reveal').forEach(el => ro.observe(el))
    return () => ro.disconnect()
  }, [])

  return (
    <>
<div className="pg-info">
<div className="page-hero">
  <div className="grid-bg" aria-hidden="true"></div>
  <div className="page-hero-inner">
    <h1 className="page-title">
      제조 현장, 어디서부터<br/><em>바꿔야 할지 막막하신가요?</em>
    </h1>
    <p className="page-desc">
      도입이 어렵게 느껴진다면, 시작 방법이 잘못된 겁니다.<br/>지엔디비즈의 4단계 로드맵으로 지금 있는 자리에서 바로 시작하세요.
    </p>
  </div>
</div>


<section id="roadmap" aria-labelledby="roadmap-h">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title" id="roadmap-h">단계별 진입 경로</h2>
      <p className="sec-desc">현재 상황에 맞는 단계에서 바로 시작하세요.<br/>어디서부터 시작해도 AI까지 자연스럽게 이어집니다.</p>
    </div>
    <div className="roadmap-track">
      <div className="roadmap-steps">

        <article className="roadmap-step step-current reveal" style={{transitionDelay:".05s"}}>
          <div className="step-num" aria-hidden="true">01</div>
          <div className="step-badge">현재 사업</div>
          <div className="step-card">
            <div className="step-title">데이터 기반 MES 구축</div>
            <div className="step-subtitle">i-MEPS 구축</div>
            <div className="step-items">
              <div className="step-item">센서 연결 · 실적 수집</div>
              <div className="step-item">기초 KPI 대시보드</div>
              <div className="step-item">작업지시 실시간 공유</div>
              <div className="step-item">생산분석 업무 전환</div>
            </div>
            <span className="step-tag">ERP · MES · PLM</span>
          </div>
        </article>

        <article className="roadmap-step step-current reveal" style={{transitionDelay:".1s"}}>
          <div className="step-num" aria-hidden="true">02</div>
          <div className="step-badge">현재 사업</div>
          <div className="step-card">
            <div className="step-title">자동화 연계</div>
            <div className="step-subtitle">IoT / FA 연동</div>
            <div className="step-items">
              <div className="step-item">IoT / FA 설비 연동</div>
              <div className="step-item">협동로봇 · AGV 연결</div>
              <div className="step-item">품질 데이터 연동</div>
              <div className="step-item">FOOL PROOF 개발</div>
            </div>
            <span className="step-tag">PLC · 협동로봇 · AGV</span>
          </div>
        </article>

        <article className="roadmap-step step-ai reveal" style={{transitionDelay:".15s"}}>
          <div className="step-num" aria-hidden="true">03</div>
          <div className="step-badge">AI 솔루션</div>
          <div className="step-card">
            <div className="step-title">AI 예측 분석</div>
            <div className="step-subtitle">AI 솔루션 도입</div>
            <div className="step-items">
              <div className="step-item">GIVAS 예지보전 · AI-SPC</div>
              <div className="step-item">V-MEPS Vision 검사</div>
              <div className="step-item">이상 감지 자동화</div>
              <div className="step-item">SaaS 모델 재학습 지원</div>
            </div>
            <span className="step-tag">GIVAS · V-MEPS</span>
          </div>
        </article>

        <article className="roadmap-step step-ai reveal" style={{transitionDelay:".2s"}}>
          <div className="step-num" aria-hidden="true">04</div>
          <div className="step-badge">AI 솔루션</div>
          <div className="step-card">
            <div className="step-title">자율 AI 운영</div>
            <div className="step-subtitle">Full AI 통합</div>
            <div className="step-items">
              <div className="step-item">R-MEPS 로봇 적응 제어</div>
              <div className="step-item">전 공정 AI 통합 관제</div>
              <div className="step-item">지속 모델 고도화</div>
              <div className="step-item">무중단 기능 추가</div>
            </div>
            <span className="step-tag">R-MEPS · Full Stack AI</span>
          </div>
        </article>

      </div>
    </div>
  </div>
</section>


<section id="features" aria-labelledby="features-h">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title" id="features-h">지엔디비즈와 함께해야 하는 이유</h2>
      <p className="sec-desc">단순한 솔루션 공급이 아닌,<br/>컨설팅과 구축을 병행하는 One Company 파트너십</p>
    </div>
    <div className="feat-grid reveal">

      <div className="feat-tile">
        <span className="feat-num">01</span>
        <div className="feat-title">실질적 맞춤 시스템</div>
        <div className="feat-desc">요구사항을 최대한 반영하여 현장에서 실질적으로 도움이 되는 기능을 개발합니다.<br/>책임 개발 및 품질 보증을 원칙으로 합니다.</div>
      </div>

      <div className="feat-tile">
        <span className="feat-num">02</span>
        <div className="feat-title">컨설팅 + 구축 병행</div>
        <div className="feat-desc">현장 업무 컨설팅을 함께 진행하며 통합 정보시스템 구축과 표준화 · 정형화를 동시에 이루어냅니다.</div>
      </div>

      <div className="feat-tile">
        <span className="feat-num">03</span>
        <div className="feat-title">지속 업그레이드</div>
        <div className="feat-desc">SaaS형 지속 업데이트로 AI 모델 재학습을 지원하며 무중단으로 기능을 추가합니다.<br/>7단계 복구 프로세스로 안정성을 보장합니다.</div>
      </div>

      <div className="feat-tile">
        <span className="feat-num">04</span>
        <div className="feat-title">즉시 연동 가능한 기술력</div>
        <div className="feat-desc">OPC-UA · MQTT · Modbus · REST API 등 산업 표준 프로토콜을 지원합니다.<br/>기존 PLC · 센서 · ERP · PLM과 별도 개발 없이 바로 연동 가능합니다.</div>
      </div>

    </div>
  </div>
</section>


<section id="support" aria-labelledby="support-h">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title" id="support-h">정부 지원사업으로 비용 부담을 줄이세요</h2>
      <p className="sec-desc">KOSMO 스마트팩토리 지원사업을 통해 중소기업도 부담 없이 도입할 수 있습니다</p>
    </div>
    <div className="support-wrap reveal">

      <div className="support-visual" aria-hidden="true">
        <svg viewBox="0 0 280 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="140" cy="120" r="90" fill="rgba(26,86,219,.07)"/>
          <circle cx="140" cy="120" r="64" fill="rgba(26,86,219,.09)" stroke="rgba(96,165,250,.15)" strokeWidth="1"/>
          <rect x="72" y="130" width="34" height="48" rx="3" fill="rgba(96,165,250,.12)" stroke="rgba(96,165,250,.3)" strokeWidth="1.2"/>
          <rect x="80" y="140" width="8" height="10" rx="1" fill="rgba(96,165,250,.25)"/>
          <rect x="92" y="140" width="8" height="10" rx="1" fill="rgba(96,165,250,.25)"/>
          <rect x="80" y="156" width="8" height="10" rx="1" fill="rgba(96,165,250,.25)"/>
          <rect x="92" y="156" width="8" height="10" rx="1" fill="rgba(96,165,250,.25)"/>
          <rect x="114" y="108" width="52" height="70" rx="3" fill="rgba(26,86,219,.18)" stroke="rgba(96,165,250,.4)" strokeWidth="1.2"/>
          <rect x="122" y="118" width="10" height="12" rx="1" fill="rgba(96,165,250,.35)"/>
          <rect x="136" y="118" width="10" height="12" rx="1" fill="rgba(96,165,250,.35)"/>
          <rect x="150" y="118" width="10" height="12" rx="1" fill="rgba(96,165,250,.35)"/>
          <rect x="122" y="136" width="10" height="12" rx="1" fill="rgba(96,165,250,.35)"/>
          <rect x="136" y="136" width="10" height="12" rx="1" fill="rgba(96,165,250,.35)"/>
          <rect x="150" y="136" width="10" height="12" rx="1" fill="rgba(96,165,250,.35)"/>
          <rect x="132" y="158" width="16" height="20" rx="2" fill="rgba(96,165,250,.2)" stroke="rgba(96,165,250,.4)" strokeWidth="1"/>
          <rect x="176" y="138" width="32" height="40" rx="3" fill="rgba(96,165,250,.1)" stroke="rgba(96,165,250,.25)" strokeWidth="1.2"/>
          <rect x="182" y="146" width="8" height="8" rx="1" fill="rgba(96,165,250,.25)"/>
          <rect x="194" y="146" width="8" height="8" rx="1" fill="rgba(96,165,250,.25)"/>
          <rect x="182" y="160" width="8" height="8" rx="1" fill="rgba(96,165,250,.2)"/>
          <rect x="194" y="160" width="8" height="8" rx="1" fill="rgba(96,165,250,.2)"/>
          <line x1="60" y1="178" x2="220" y2="178" stroke="rgba(96,165,250,.2)" strokeWidth="1.5"/>
          <path d="M140 42 L156 50 L156 66 Q156 76 140 82 Q124 76 124 66 L124 50 Z" fill="rgba(26,86,219,.2)" stroke="rgba(96,165,250,.5)" strokeWidth="1.5"/>
          <path d="M133 62 L138 67 L148 57" stroke="rgba(96,165,250,.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="140" y1="82" x2="140" y2="108" stroke="rgba(96,165,250,.25)" strokeWidth="1" strokeDasharray="3 3"/>
          <circle cx="58" cy="90" r="16" fill="rgba(96,165,250,.08)" stroke="rgba(96,165,250,.3)" strokeWidth="1.2"/>
          <text x="58" y="95" text-anchor="middle" font-size="14" fill="rgba(96,165,250,.7)" font-weight="700">₩</text>
          <line x1="72" y1="96" x2="88" y2="110" stroke="rgba(96,165,250,.2)" strokeWidth="1" strokeDasharray="2 2"/>
          <circle cx="222" cy="90" r="16" fill="rgba(96,165,250,.08)" stroke="rgba(96,165,250,.3)" strokeWidth="1.2"/>
          <text x="222" y="95" text-anchor="middle" font-size="11" fill="rgba(96,165,250,.7)" font-weight="700">KOSMO</text>
          <line x1="208" y1="96" x2="192" y2="110" stroke="rgba(96,165,250,.2)" strokeWidth="1" strokeDasharray="2 2"/>
          <rect x="98" y="48" width="40" height="22" rx="11" fill="rgba(26,86,219,.25)" stroke="rgba(96,165,250,.4)" strokeWidth="1"/>
          <text x="118" y="63" text-anchor="middle" font-size="10" fill="rgba(96,165,250,.95)" font-weight="700">최대 50%</text>
        </svg>
      </div>

      <div className="support-items">
        <div className="support-item">
          <div className="support-body">
            <div className="support-heading">100개 이상 구축 완료 기업</div>
            <div className="support-text">2011년 창업 이후 100개 이상의 기업에 스마트팩토리를 성공적으로 구축한 검증된 전문기업입니다.</div>
          </div>
        </div>
        <div className="support-item">
          <div className="support-body">
            <div className="support-heading">15년 이상의 현장 구축 경험</div>
            <div className="support-text">삼성SDI · 삼성중공업 · 두산 · 현대위아 등 대기업 협업 경험을 보유한 스마트팩토리 전문기업입니다.</div>
          </div>
        </div>
        <div className="support-item">
          <div className="support-body">
            <div className="support-heading">단계적 도입으로 초기 비용 최소화</div>
            <div className="support-text">처음부터 중소기업 맞춤형으로 설계된 솔루션. KOSMO 보조금 활용 가능, 단계적 도입으로 초기 투자 부담을 줄입니다.</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<div className="cta-section">
  <div className="cta-section-grid"></div>
  <div className="cta-section-inner">
    <h2 className="cta-section-title">"어디서부터 시작해야 하나"<br/><em>걱정되시나요?</em></h2>
    <p className="cta-section-desc">현장 실사 후 맞춤 도입 전략을 무료로 설계해 드립니다</p>
    <div className="cta-section-actions">
      <Link to="/contact" className="btn-primary">
        도입 상담 신청
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
      <Link to="/faq" className="btn-ghost">
        FAQ 보기
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
    </div>
  </div>
</div>


</div>
    </>
  )
}
