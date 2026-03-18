import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './../styles/pages/aiplatform.css'

export default function AiPlatformPage() {
  useEffect(() => {
    const ro = new IntersectionObserver(function(es) {
      es.forEach(function(e) { if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target)} })
    }, { threshold: 0.06 })
    document.querySelectorAll('.reveal').forEach(function(el){ ro.observe(el) })

    const barObserver = new IntersectionObserver(function(es) {
      es.forEach(function(e) { if(e.isIntersecting){ e.target.classList.add('animated'); barObserver.unobserve(e.target) } })
    }, { threshold: 0.3 })
    document.querySelectorAll('.kpi-bar-item').forEach(function(el){ barObserver.observe(el) })

    const donutObs = new IntersectionObserver(function(es) {
      es.forEach(function(e) { if(e.isIntersecting){ e.target.classList.add('animated'); donutObs.unobserve(e.target) } })
    }, { threshold: 0.3 })
    document.querySelectorAll('.kpi-radial-item').forEach(function(el){ donutObs.observe(el) })

    return () => { ro.disconnect(); barObserver.disconnect(); donutObs.disconnect() }
  }, [])

  return (
    <>
<div className="pg-aiplatform">
<div className="page-hero">
  <div className="grid-bg"></div>
  <div className="page-hero-inner">
    <h1 className="page-title">
      제조 현장의 <em>3가지 AI 문제</em><br/>지엔디비즈가 정확하게 해결합니다
    </h1>
    <p className="page-desc" style={{opacity:"0",animation:"fadeUp .8s .55s ease forwards"}}>
      데이터 분석 · 불량 검사 · 로봇 제어 — One Company, Full Stack
    </p>
  </div>
</div>


<section id="problems">
  <div className="container">
    <div className="ps-pairs-grid">


      <div className="ps-pair reveal" style={{transitionDelay:".05s"}}>
        <div className="ps-problem-card">
          <div className="ps-pair-num">01</div>
          <p className="problem-q">"데이터는 있는데 <span>분석이 안 된다</span>"</p>
          <p className="ps-problem-desc">ERP·MES에 데이터는 쌓이지만,<br/>예측·이상탐지·자연어 분석이 어려운 상황</p>
        </div>
        <div className="ps-arrow-wrap">
          <div className="ps-arrow-line"></div>
          <div className="ps-arrow-label">AI로 해결</div>
          <div className="ps-arrow-line"></div>
          <svg className="ps-arrow-head" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </div>
        <div className="ai-sol-card card-givas">
          <div className="card-visual">
            <img src="/images/ai/givas-thumbnail.png" alt="GIVAS" className="card-bg-img"/>
            <div className="card-img-overlay"></div>
            <div className="card-img-tint card-img-tint-blue"></div>
            <div className="card-visual-inner">
              <div className="card-role-badge">🧠 Brain — 두뇌</div>
            </div>
          </div>
          <div className="card-body">
            <div className="card-name">GIVAS</div>
            <div className="card-sub">Manufacturing Intelligence Brain</div>
            <div className="card-divider"></div>
            <ul className="card-features">
              <li>예지보전 · AI-SPC · 이상탐지</li>
              <li>Gen AI 자연어 질의 분석</li>
              <li>재고 자동 발주 최적화</li>
              <li>Naver Cloud 기반 SaaS 제공</li>
            </ul>
            <Link to="/ai/givas" className="card-btn">
              GIVAS 상세 보기
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </div>


      <div className="ps-pair reveal" style={{transitionDelay:".1s"}}>
        <div className="ps-problem-card">
          <div className="ps-pair-num">02</div>
          <p className="problem-q">"불량을 <span>놓친다</span>"</p>
          <p className="ps-problem-desc">육안 검사의 한계, 화재·안전사고<br/>실시간 대응 불가, 24시간 무인 감시 부재</p>
        </div>
        <div className="ps-arrow-wrap">
          <div className="ps-arrow-line ps-arrow-green"></div>
          <div className="ps-arrow-label">AI로 해결</div>
          <div className="ps-arrow-line ps-arrow-green"></div>
          <svg className="ps-arrow-head ps-arrow-head-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </div>
        <div className="ai-sol-card card-vmeps">
          <div className="card-visual">
            <img src="/images/ai/vmeps-thumbnail.png" alt="V-MEPS" className="card-bg-img"/>
            <div className="card-img-overlay"></div>
            <div className="card-img-tint card-img-tint-green"></div>
            <div className="card-visual-inner">
              <div className="card-role-badge">👁 Eye — 눈</div>
            </div>
          </div>
          <div className="card-body">
            <div className="card-name">V-MEPS</div>
            <div className="card-sub">Intelligent Vision &amp; Safety AI</div>
            <div className="card-divider"></div>
            <ul className="card-features">
              <li>딥러닝 불량 자동 검사</li>
              <li>화재 · 안전사고 실시간 감지</li>
              <li>0.1초 Edge 즉시 추론</li>
              <li>YOLOv8 · Vision Transformer 기반</li>
            </ul>
            <Link to="/ai/vmeps" className="card-btn">
              V-MEPS 상세 보기
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </div>


      <div className="ps-pair reveal" style={{transitionDelay:".15s"}}>
        <div className="ps-problem-card">
          <div className="ps-pair-num">03</div>
          <p className="problem-q">"로봇이 스스로 <span>판단 못한다</span>"</p>
          <p className="ps-problem-desc">공정 조건 변화 시 수동 재설정 필요,<br/>용접 품질 예측 불가, 숙련공 의존 심화</p>
        </div>
        <div className="ps-arrow-wrap">
          <div className="ps-arrow-line ps-arrow-orange"></div>
          <div className="ps-arrow-label">AI로 해결</div>
          <div className="ps-arrow-line ps-arrow-orange"></div>
          <svg className="ps-arrow-head ps-arrow-head-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </div>
        <div className="ai-sol-card card-rmeps">
          <div className="card-visual">
            <img src="/images/ai/rmeps-thumbnail.png" alt="R-MEPS" className="card-bg-img"/>
            <div className="card-img-overlay"></div>
            <div className="card-img-tint card-img-tint-orange"></div>
            <div className="card-visual-inner">
              <div className="card-role-badge">⚙️ Control — 신경계</div>
            </div>
          </div>
          <div className="card-body">
            <div className="card-name">R-MEPS</div>
            <div className="card-sub">Robot-based Adaptive Control AI</div>
            <div className="card-divider"></div>
            <ul className="card-features">
              <li>용접 품질 AI 예측 · 자동 보정</li>
              <li>적재 경로 실시간 최적화</li>
              <li>100ms 이내 즉시 제어</li>
              <li>Fanuc · Yaskawa · 현대로보틱스 연동</li>
            </ul>
            <Link to="/ai/rmeps" className="card-btn">
              R-MEPS 상세 보기
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<section id="ecosystem">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">단일 AI 파이프라인으로<br/>전 공정 상관관계를 분석합니다</h2>
      <p className="sec-desc">센서 · 영상 · 로봇 로그가 하나의 AI 플랫폼으로 통합되어<br/>공정 전체를 데이터 기반으로 관제합니다</p>
    </div>

    <div className="eco-diagram reveal">

      <div className="eco-top-row">
        <div className="eco-source-card eco-src-blue">
          <div className="eco-src-icon">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="8" width="24" height="16" rx="2"/><path d="M10 8V5M22 8V5M4 14h24"/><circle cx="10" cy="19" r="2" fill="currentColor" opacity=".4"/></svg>
          </div>
          <div className="eco-src-name">센서 · PLC</div>
          <div className="eco-src-sub">온도 · 압력 · 유량</div>
          <div className="eco-src-tag">GIVAS</div>
        </div>
        <div className="eco-source-card eco-src-green">
          <div className="eco-src-icon">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="16" cy="16" r="8"/><circle cx="16" cy="16" r="3"/><path d="M16 4v4M16 24v4M4 16h4M24 16h4"/></svg>
          </div>
          <div className="eco-src-name">스마트 카메라</div>
          <div className="eco-src-sub">영상 · 이미지 스트림</div>
          <div className="eco-src-tag eco-src-tag-green">V-MEPS</div>
        </div>
        <div className="eco-source-card eco-src-orange">
          <div className="eco-src-icon">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="16" cy="12" r="5"/><path d="M11 12H4M28 12h-7M16 7V2M16 26v-9"/><circle cx="4" cy="12" r="3"/><circle cx="28" cy="12" r="3"/><rect x="12" y="26" width="8" height="4" rx="1"/></svg>
          </div>
          <div className="eco-src-name">로봇 컨트롤러</div>
          <div className="eco-src-sub">동작 · 전류 · 토크 로그</div>
          <div className="eco-src-tag eco-src-tag-orange">R-MEPS</div>
        </div>
        <div className="eco-source-card eco-src-purple">
          <div className="eco-src-icon">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="6" width="26" height="20" rx="2"/><path d="M9 12h14M9 17h9"/><rect x="3" y="6" width="26" height="5" rx="2" fill="currentColor" opacity=".1"/></svg>
          </div>
          <div className="eco-src-name">MES · ERP</div>
          <div className="eco-src-sub">생산실적 · 재고 · 품질</div>
          <div className="eco-src-tag eco-src-tag-purple">통합</div>
        </div>
      </div>


      <div className="eco-protocol-row">
        <div className="eco-protocol-line"></div>
        <div className="eco-protocol-badges">
          <span className="eco-proto-badge">OPC-UA</span>
          <span className="eco-proto-badge">MQTT</span>
          <span className="eco-proto-badge">Modbus</span>
          <span className="eco-proto-badge">REST API</span>
        </div>
        <div className="eco-protocol-arrows">
          <div className="eco-proto-arrow"></div>
          <div className="eco-proto-arrow"></div>
          <div className="eco-proto-arrow"></div>
          <div className="eco-proto-arrow"></div>
        </div>
      </div>


      <div className="eco-engine">
        <div className="eco-engine-pulse"></div>
        <div className="eco-engine-inner">
          <div className="eco-engine-title">단일 AI 파이프라인</div>
          <div className="eco-engine-subs">
            <span>Kafka 실시간 스트리밍</span>
            <span className="eco-dot-sep">·</span>
            <span>Naver Cloud Platform</span>
            <span className="eco-dot-sep">·</span>
            <span>MLOps 자동 재학습</span>
          </div>
          <div className="eco-engine-tags">
            <span className="eco-eng-chip">전 공정 상관관계 분석</span>
            <span className="eco-eng-chip">이상 패턴 자동 감지</span>
            <span className="eco-eng-chip">AI 모델 자동 배포</span>
          </div>
        </div>
      </div>


      <div className="eco-output-row">
        <div className="eco-corr-lines">
          <svg className="eco-corr-svg" viewBox="0 0 900 80" fill="none" preserveAspectRatio="none">
            <path d="M150 10 Q450 70 450 70" stroke="rgba(96,165,250,.3)" strokeWidth="1.5" strokeDasharray="4 4"/>
            <path d="M450 10 Q450 70 450 70" stroke="rgba(96,165,250,.5)" strokeWidth="2"/>
            <path d="M750 10 Q450 70 450 70" stroke="rgba(96,165,250,.3)" strokeWidth="1.5" strokeDasharray="4 4"/>
            <circle cx="150" cy="10" r="4" fill="rgba(96,165,250,.5)"/>
            <circle cx="450" cy="10" r="4" fill="rgba(96,165,250,.5)"/>
            <circle cx="750" cy="10" r="4" fill="rgba(96,165,250,.5)"/>
            <circle cx="450" cy="70" r="5" fill="#60A5FA"/>
          </svg>
        </div>
        <div className="eco-outputs">
          <div className="eco-output eco-output-givas">
            <div className="eco-out-badge eco-badge-blue">Brain</div>
            <div className="eco-out-name">GIVAS</div>
            <div className="eco-out-items">
              <span>예지보전</span><span>AI-SPC</span><span>Gen AI 질의</span>
            </div>
          </div>
          <div className="eco-output eco-output-vmeps">
            <div className="eco-out-badge eco-badge-green">Eye</div>
            <div className="eco-out-name">V-MEPS</div>
            <div className="eco-out-items">
              <span>불량 검사</span><span>화재 감지</span><span>안전 관제</span>
            </div>
          </div>
          <div className="eco-output eco-output-rmeps">
            <div className="eco-out-badge eco-badge-orange">Control</div>
            <div className="eco-out-name">R-MEPS</div>
            <div className="eco-out-items">
              <span>적응 제어</span><span>경로 최적화</span><span>품질 예측</span>
            </div>
          </div>
        </div>
      </div>


      <div className="eco-bottom-bar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>
        MES · ERP 품질이력 자동 저장 &nbsp;·&nbsp; 모바일 Push 알림 &nbsp;·&nbsp; 통합 관리자 대시보드
      </div>
    </div>
  </div>
</section>


<section id="tech-stack">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">클라우드 네이티브 MSA 아키텍처</h2>
      <p className="sec-desc">엔터프라이즈급 보안·안정성·확장성을 갖춘 기반 위에 AI가 동작합니다</p>
    </div>
    <div className="tech-grid">
      <div className="tech-card reveal" style={{transitionDelay:".05s"}}>
        <div className="tech-card-label">Cloud Infra</div>
        <div className="tech-card-items">
          <div className="tech-item"><span className="tech-dot"></span>Naver Cloud Platform</div>
          <div className="tech-item"><span className="tech-dot"></span>VPC · Auto Scaling</div>
          <div className="tech-item"><span className="tech-dot"></span>Load Balancer</div>
          <div className="tech-item"><span className="tech-dot"></span>KACI 클라우드 인증</div>
        </div>
      </div>
      <div className="tech-card reveal" style={{transitionDelay:".1s"}}>
        <div className="tech-card-label">IoT 미들웨어</div>
        <div className="tech-card-items">
          <div className="tech-item"><span className="tech-dot"></span>OPC-UA 표준 변환 자체 보유</div>
          <div className="tech-item"><span className="tech-dot"></span>MQTT · Modbus 즉시 연동</div>
          <div className="tech-item"><span className="tech-dot"></span>이기종 PLC · 센서 지원</div>
          <div className="tech-item"><span className="tech-dot"></span>1초 단위 실시간 수집</div>
        </div>
      </div>
      <div className="tech-card reveal" style={{transitionDelay:".15s"}}>
        <div className="tech-card-label">보안 아키텍처</div>
        <div className="tech-card-items">
          <div className="tech-item"><span className="tech-dot"></span>SSL / VPN 암호화 전송</div>
          <div className="tech-item"><span className="tech-dot"></span>VPC 망분리 구조</div>
          <div className="tech-item"><span className="tech-dot"></span>접근통제 · 비식별화</div>
          <div className="tech-item"><span className="tech-dot"></span>역할 기반 권한 관리</div>
        </div>
      </div>
      <div className="tech-card reveal" style={{transitionDelay:".2s"}}>
        <div className="tech-card-label">MLOps 체계</div>
        <div className="tech-card-items">
          <div className="tech-item"><span className="tech-dot"></span>AI 모델 자동 재학습</div>
          <div className="tech-item"><span className="tech-dot"></span>Edge → Cloud 자동 배포</div>
          <div className="tech-item"><span className="tech-dot"></span>지속적 성능 개선</div>
          <div className="tech-item"><span className="tech-dot"></span>Python · PyTorch · TensorFlow</div>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="kpi">
  <div className="container">
    <div className="kpi-inner reveal">
      <h2 className="kpi-title">파일럿 테스트로 검증된 성능 KPI</h2>
      <p className="kpi-desc">실제 제조 현장 파일럿 기반 수치입니다</p>
    </div>


    <div className="kpi-radial-row reveal" style={{transitionDelay:".08s"}}>
      <div className="kpi-radial-item">
        <div className="kpi-radial-wrap">
          <svg className="kpi-donut" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="10"/>
            <circle cx="60" cy="60" r="50" fill="none" stroke="url(#grad-blue)" strokeWidth="10"
              strokeLinecap="round" strokeDasharray="314" stroke-dashoffset="3"
              transform="rotate(-90 60 60)" className="donut-ring" data-pct="99"/>
            <defs>
              <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#1A56DB"/>
                <stop offset="100%" stop-color="#60A5FA"/>
              </linearGradient>
            </defs>
          </svg>
          <div className="kpi-radial-center">
            <div className="kpi-radial-val">99%</div>
          </div>
        </div>
        <div className="kpi-radial-label">SPC 불량 판정 정확도</div>
        <div className="kpi-radial-sub">GIVAS AI-SPC</div>
      </div>
      <div className="kpi-radial-item">
        <div className="kpi-radial-wrap">
          <svg className="kpi-donut" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="10"/>
            <circle cx="60" cy="60" r="50" fill="none" stroke="url(#grad-blue2)" strokeWidth="10"
              strokeLinecap="round" strokeDasharray="314" stroke-dashoffset="16"
              transform="rotate(-90 60 60)" className="donut-ring" data-pct="95"/>
            <defs>
              <linearGradient id="grad-blue2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#1A56DB"/>
                <stop offset="100%" stop-color="#93C5FD"/>
              </linearGradient>
            </defs>
          </svg>
          <div className="kpi-radial-center">
            <div className="kpi-radial-val">95%+</div>
          </div>
        </div>
        <div className="kpi-radial-label">Vision 검사 정확도</div>
        <div className="kpi-radial-sub">V-MEPS</div>
      </div>
      <div className="kpi-radial-item">
        <div className="kpi-radial-wrap">
          <svg className="kpi-donut" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="10"/>
            <circle cx="60" cy="60" r="50" fill="none" stroke="url(#grad-blue3)" strokeWidth="10"
              strokeLinecap="round" strokeDasharray="314" stroke-dashoffset="31"
              transform="rotate(-90 60 60)" className="donut-ring" data-pct="90"/>
            <defs>
              <linearGradient id="grad-blue3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#1A3A8F"/>
                <stop offset="100%" stop-color="#60A5FA"/>
              </linearGradient>
            </defs>
          </svg>
          <div className="kpi-radial-center">
            <div className="kpi-radial-val">90%+</div>
          </div>
        </div>
        <div className="kpi-radial-label">예지보전 탐지 정확도</div>
        <div className="kpi-radial-sub">GIVAS 예지보전</div>
      </div>
    </div>


    <div className="kpi-chart reveal" style={{transitionDelay:".18s"}}>

      <div className="kpi-bar-item">
        <div className="kpi-bar-header">
          <span className="kpi-bar-label">생산량 증가</span>
          <span className="kpi-bar-value">37.5%</span>
        </div>
        <div className="kpi-bar-track">
          <div className="kpi-bar-fill" style={{width:"75%",background:"linear-gradient(90deg,#1A56DB,#60A5FA)"}}></div>
        </div>
        <span className="kpi-bar-sub">80EA → 110EA/hr · GIVAS 적용 현장 파일럿</span>
      </div>

      <div className="kpi-bar-item">
        <div className="kpi-bar-header">
          <span className="kpi-bar-label">용접 불량 검출률 향상</span>
          <span className="kpi-bar-value">+20%</span>
        </div>
        <div className="kpi-bar-track">
          <div className="kpi-bar-fill" style={{width:"55%",background:"linear-gradient(90deg,#1A3A8F,#93C5FD)"}}></div>
        </div>
        <span className="kpi-bar-sub">R-MEPS 적응 제어 · 기존 검출 대비</span>
      </div>

      <div className="kpi-bar-item">
        <div className="kpi-bar-header">
          <span className="kpi-bar-label">재고 비용 절감</span>
          <span className="kpi-bar-value">10%</span>
        </div>
        <div className="kpi-bar-track">
          <div className="kpi-bar-fill" style={{width:"30%",background:"linear-gradient(90deg,#1A56DB,#60A5FA)"}}></div>
        </div>
        <span className="kpi-bar-sub">GIVAS 재고 최적화 · 자동 발주 연동</span>
      </div>

      <div className="kpi-bar-item">
        <div className="kpi-bar-header">
          <span className="kpi-bar-label">적재 공간 활용도 향상</span>
          <span className="kpi-bar-value">+15%</span>
        </div>
        <div className="kpi-bar-track">
          <div className="kpi-bar-fill" style={{width:"45%",background:"linear-gradient(90deg,#1A3A8F,#93C5FD)"}}></div>
        </div>
        <span className="kpi-bar-sub">R-MEPS 경로 최적화 · 시뮬레이션 10만건 학습</span>
      </div>

    </div>


    <div className="kpi-speed-row reveal" style={{transitionDelay:".28s"}}>
      <div className="kpi-speed-card">
        <div className="kpi-speed-val" style={{color:"var(--white)"}}>0.1초</div>
        <div className="kpi-speed-label">V-MEPS Edge 추론</div>
        <div className="kpi-speed-sub">현장 즉시 불량 판정</div>
      </div>
      <div className="kpi-speed-divider"></div>
      <div className="kpi-speed-card">
        <div className="kpi-speed-val" style={{color:"var(--white)"}}>100ms</div>
        <div className="kpi-speed-label">R-MEPS 제어 반응</div>
        <div className="kpi-speed-sub">로봇 즉시 보정 명령</div>
      </div>
      <div className="kpi-speed-divider"></div>
      <div className="kpi-speed-card">
        <div className="kpi-speed-val" style={{color:"var(--white)"}}>3초</div>
        <div className="kpi-speed-label">안전 이벤트 알림</div>
        <div className="kpi-speed-sub">V-MEPS 관리자 Push</div>
      </div>
      <div className="kpi-speed-divider"></div>
      <div className="kpi-speed-card">
        <div className="kpi-speed-val" style={{color:"var(--white)"}}>1초</div>
        <div className="kpi-speed-label">데이터 수집 주기</div>
        <div className="kpi-speed-sub">센서 · PLC 실시간 수집</div>
      </div>
    </div>
  </div>
</section>


<section className="cta-section">
  <div className="cta-section-grid"></div>
  <div className="cta-inner reveal">
    <p className="cta-bar-title">AI 도입, <em>어디서부터</em><br/>시작해야 할지 모르시겠나요?</p>
    <p className="cta-bar-desc">현장 환경 분석부터 맞춤 AI 도입 전략까지<br/>전문가가 직접 안내해 드립니다</p>
    <div className="cta-bar-actions">
      <Link to="/contact" className="btn-primary">
        AI 솔루션 상담 신청
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
      <Link to="/faq" className="btn-ghost">
        FAQ 바로가기
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
    </div>
  </div>
</section>


</div>
    </>
  )
}
