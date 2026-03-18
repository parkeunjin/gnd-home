import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './../styles/pages/rmeps.css'

export default function RmepsPage() {
  useEffect(() => {
    const ro = new IntersectionObserver(es => {
      es.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target)} })
    }, { threshold: 0.06 })
    document.querySelectorAll('.reveal').forEach(el => ro.observe(el))

    window._toggleFeat = function(header) {
      const item = header.closest('.feat-item')
      const wasOpen = item.classList.contains('open')
      document.querySelectorAll('.feat-item').forEach(i => i.classList.remove('open'))
      if (!wasOpen) item.classList.add('open')
    }

    const barObs = new IntersectionObserver(es => {
      es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('animated'); barObs.unobserve(e.target) } })
    }, { threshold: 0.3 })
    document.querySelectorAll('.kpi-compare-item').forEach(el => barObs.observe(el))

    return () => { ro.disconnect(); barObs.disconnect(); delete window._toggleFeat }
  }, [])

  return (
    <>
<div className="pg-rmeps">
<div className="page-hero">
  <div className="grid-bg"></div>
  <div className="page-hero-inner">
    <div className="container">
      <div className="hero-layout">

        <div style={{opacity:"0",animation:"fadeUp .8s .2s ease forwards"}}>
          <h1 className="hero-title">
            <span className="sub-brand">기존 로봇은 명령을 실행합니다</span>
            <span className="brand">R-MEPS</span>
            <br/>스스로 판단해 최적화합니다
          </h1>
          <p className="hero-desc">
            산업용 로봇에 AI 두뇌를 탑재하여 <em>공정 조건 변화를 스스로 인식</em>하고,<br/>
            PID 파라미터를 자동 보정하며, <em>불량 발생을 사전에 차단</em>하는<br/>
            지능형 적응 제어 시스템입니다
          </p>
          <div className="hero-cta-row">
            <Link to="/contact" className="btn-primary">
              도입 상담 신청
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="#features" className="btn-ghost" onClick={() => { event.preventDefault();document.getElementById('features').scrollIntoView({behavior:'smooth'}) }}>
              핵심 기능 보기
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            </a>
          </div>
        </div>

        <div style={{opacity:"0",animation:"fadeUp .8s .45s ease forwards"}}>
          <div className="hero-card">
            <div className="hero-card-glow"></div>
            <div className="card-label">R-MEPS — 실시간 로봇 제어 현황</div>
            <div className="card-stats">
              <div className="card-stat">
                <div className="card-stat-val">+20%</div>
                <div className="card-stat-label">용접 불량 검출률</div>
              </div>
              <div className="card-stat">
                <div className="card-stat-val">+15%</div>
                <div className="card-stat-label">적재 공간 활용도</div>
              </div>
              <div className="card-stat">
                <div className="card-stat-val">100ms</div>
                <div className="card-stat-label">제어 반응 속도</div>
              </div>
              <div className="card-stat">
                <div className="card-stat-val">10만+</div>
                <div className="card-stat-label">시뮬레이션 학습 데이터</div>
              </div>
            </div>
            <div className="card-divider"></div>
            <div className="card-features">
              <div className="card-feat">
                <div className="card-feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg></div>
                적응형 제어 · 품질 예측 · 경로 최적화
              </div>
              <div className="card-feat">
                <div className="card-feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 7h6M9 12h6M9 17h4"/></svg></div>
                On-Device AI · 네트워크 단절 시 자율 운영
              </div>
              <div className="card-feat">
                <div className="card-feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>
                Fanuc · Yaskawa · 현대로보틱스 즉시 연동
              </div>
              <div className="card-feat">
                <div className="card-feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg></div>
                Cloud-Edge 하이브리드 아키텍처
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>


<section className="positioning-section">
  <div className="container">
    <div className="pos-compare reveal">

      <div className="pos-box pos-box-before">
        <div className="pos-card-header">
          <div className="pos-card-header-name"><span className="pos-header-dot"></span>기존 로봇 (AS-IS)</div>
          <div className="pos-card-title">명령을 받고 실행할 뿐, 판단하지 않습니다</div>
          <div className="pos-card-divider"></div>
        </div>
        <div className="pos-card-body">
          <div className="pos-items">
            <div className="pos-item"><span className="icon-x"></span>조건 변화에 수동 대응 — 숙련공 의존도 높음</div>
            <div className="pos-item"><span className="icon-x"></span>불량 발생 후에야 인지 — 사후 대응</div>
            <div className="pos-item"><span className="icon-x"></span>PID 파라미터 수동 조정 필요</div>
            <div className="pos-item"><span className="icon-x"></span>다품종 혼합 적재 — 경로 최적화 불가</div>
            <div className="pos-item"><span className="icon-x"></span>네트워크 단절 시 운영 중단</div>
          </div>
        </div>
      </div>

      <div className="pos-arrow">
        <div className="pos-arrow-track">
          <span className="pos-vs-text">VS</span>
          <span className="pos-vs-sub">R-MEPS</span>
          <div className="pos-vs-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
        </div>
      </div>

      <div className="pos-box pos-box-after">
        <div className="pos-card-header">
          <div className="pos-card-header-name"><span className="pos-header-dot"></span>R-MEPS 도입 후 (TO-BE)</div>
          <div className="pos-card-title">상황을 판단하고, 스스로 최적화합니다</div>
          <div className="pos-card-divider"></div>
        </div>
        <div className="pos-card-body">
          <div className="pos-items">
            <div className="pos-item"><span className="icon-check"></span>공정 변화 자동 감지 · PID 파라미터 실시간 보정</div>
            <div className="pos-item"><span className="icon-check"></span>불량 전 징후 AI 감지 → 즉시 공정 중단 · 예방</div>
            <div className="pos-item"><span className="icon-check"></span>초보 작업자도 숙련공 수준의 균일한 품질</div>
            <div className="pos-item"><span className="icon-check"></span>AI 경로 최적화 · 공간 활용도 15% 향상</div>
            <div className="pos-item"><span className="icon-check"></span>On-Device AI · 네트워크 단절 시에도 자율 운영</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<section id="features" className="features-section">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">R-MEPS가 해결하는 3가지 로봇 현장 문제</h2>
      <p className="sec-desc">적응형 제어 · 품질 예측 · 경로 최적화 — 로봇 AI의 세 가지 핵심 능력으로<br/>숙련공 의존도 없이 균일한 품질 공정 운영을 실현합니다</p>
    </div>
    <div className="feat-accordion">


      <div className="feat-item open">
        <div className="feat-header" onClick={(e) => window._toggleFeat(e.currentTarget)}>
          <span className="feat-num">01</span>
          <span className="feat-name">적응형 제어</span>
          <span className="feat-sub-en">AI-based Process Adaptive Control</span>
          <svg className="feat-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div className="feat-body">
          <div className="feat-body-left">
            <span className="fp-sub">Adaptive Control</span>
            <p className="fp-desc">공정 조건(재질·온습도) 변화를 실시간으로 자동 감지하고, 로봇 PID 파라미터를 즉시 보정합니다. 불량 예측 시 공정을 즉시 중단하여 설비 손상을 예방하며, 네트워크 단절 시에도 On-Device AI로 자율 운영을 보장합니다.</p>
            <div className="fp-kpi-row">
              <span className="fp-kpi-val">100ms</span>
              <div className="fp-kpi-divider"></div>
              <span className="fp-kpi-desc">Edge Agent 즉시 보정 명령<br/>msec 단위 초저지연 제어</span>
            </div>
          </div>
          <div className="feat-body-right">
            <p className="fp-points-title">핵심 기능 포인트</p>
            <ul className="fp-points">
              <li className="fp-point">
                <span className="fp-point-num">01</span>
                <span className="fp-point-text">공정 조건 자동 감지<span>재질·온습도 변화 실시간 인식 · 이상 패턴 즉시 포착</span></span>
              </li>
              <li className="fp-point">
                <span className="fp-point-num">02</span>
                <span className="fp-point-text">PID 파라미터 자동 보정<span>변화 감지 즉시 제어 파라미터 최적화 · 무중단 운영</span></span>
              </li>
              <li className="fp-point">
                <span className="fp-point-num">03</span>
                <span className="fp-point-text">불량 예측 즉시 차단<span>불량 발생 전 공정 중단 · 설비 손상 사전 예방</span></span>
              </li>
              <li className="fp-point">
                <span className="fp-point-num">04</span>
                <span className="fp-point-text">On-Device 자율 운영<span>Docker Container 경량 배포 · 네트워크 단절 시에도 지속</span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="feat-item">
        <div className="feat-header" onClick={(e) => window._toggleFeat(e.currentTarget)}>
          <span className="feat-num">02</span>
          <span className="feat-name">품질 예측</span>
          <span className="feat-sub-en">AI-driven Weld &amp; Process Quality Prediction</span>
          <svg className="feat-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div className="feat-body">
          <div className="feat-body-left">
            <span className="fp-sub">Predictive Quality</span>
            <p className="fp-desc">용접 전류·전압·토치 각도 데이터를 AI가 학습하여 비파괴 방식으로 실시간 품질을 예측합니다. 숙련공의 경험적 노하우를 AI 모델로 자산화하여 초보 작업자도 균일한 고품질 공정 운영이 가능합니다.</p>
            <div className="fp-kpi-row">
              <span className="fp-kpi-val">+20%</span>
              <div className="fp-kpi-divider"></div>
              <span className="fp-kpi-desc">용접 불량 검출률 향상<br/>기존 시스템 대비 파일럿 검증</span>
            </div>
          </div>
          <div className="feat-body-right">
            <p className="fp-points-title">핵심 기능 포인트</p>
            <ul className="fp-points">
              <li className="fp-point">
                <span className="fp-point-num">01</span>
                <span className="fp-point-text">용접 데이터 AI 학습<span>전류·전압·토치 각도 실시간 수집 · 패턴 모델 구축</span></span>
              </li>
              <li className="fp-point">
                <span className="fp-point-num">02</span>
                <span className="fp-point-text">비파괴 실시간 품질 예측<span>공정 중 즉시 품질 판정 · 불량 징후 즉시 알림 발송</span></span>
              </li>
              <li className="fp-point">
                <span className="fp-point-num">03</span>
                <span className="fp-point-text">과검출(False Alarm) 최소화<span>오경보 최소화 설계 검증 완료 · 신뢰성 확보</span></span>
              </li>
              <li className="fp-point">
                <span className="fp-point-num">04</span>
                <span className="fp-point-text">숙련공 노하우 AI 자산화<span>경험적 지식을 모델로 보존 · 초보 작업자 고품질 운영</span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="feat-item">
        <div className="feat-header" onClick={(e) => window._toggleFeat(e.currentTarget)}>
          <span className="feat-num">03</span>
          <span className="feat-name">경로 최적화</span>
          <span className="feat-sub-en">AI-based Palletizing &amp; Path Optimization</span>
          <svg className="feat-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div className="feat-body">
          <div className="feat-body-left">
            <span className="fp-sub">Path Optimization</span>
            <p className="fp-desc">다품종 혼합 적재 패턴을 AI가 실시간으로 계산하고, 로봇 이동 경로를 최적화하여 사이클 타임을 단축합니다. 10만 건 이상의 시뮬레이션 학습 데이터로 공간 활용도를 15% 향상시킨 것이 파일럿으로 검증되었습니다.</p>
            <div className="fp-kpi-row">
              <span className="fp-kpi-val">+15%</span>
              <div className="fp-kpi-divider"></div>
              <span className="fp-kpi-desc">적재 공간 활용도 향상<br/>10만 건 학습 데이터 · 파일럿 검증</span>
            </div>
          </div>
          <div className="feat-body-right">
            <p className="fp-points-title">핵심 기능 포인트</p>
            <ul className="fp-points">
              <li className="fp-point">
                <span className="fp-point-num">01</span>
                <span className="fp-point-text">혼합 적재 패턴 AI 계산<span>다품종 혼합 환경 실시간 최적 배치 자동 산출</span></span>
              </li>
              <li className="fp-point">
                <span className="fp-point-num">02</span>
                <span className="fp-point-text">이동 경로 실시간 최적화<span>로봇 동선 최단 경로 계산 · 사이클 타임 단축</span></span>
              </li>
              <li className="fp-point">
                <span className="fp-point-num">03</span>
                <span className="fp-point-text">10만 건 시뮬레이션 학습<span>대용량 시뮬레이션 데이터 기반 고정밀 모델 구축</span></span>
              </li>
              <li className="fp-point">
                <span className="fp-point-num">04</span>
                <span className="fp-point-text">공간 활용도 파일럿 검증<span>15% 향상 실증 완료 · 현장 즉시 적용 가능</span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<section id="architecture" className="arch-section">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">Cloud-Edge 하이브리드 아키텍처</h2>
      <p className="sec-desc">현장 Edge에서 msec 즉시 제어, Cloud에서 AI 모델 지속 고도화<br/>두 계층이 유기적으로 협업하는 완전한 AI 시스템</p>
    </div>
    <div className="arch-diagram reveal" style={{transitionDelay:".06s"}}>

      <div className="arch-panel arch-panel-input">
        <div className="arch-panel-label">Data Source</div>
        <div className="arch-panel-title">현장 로봇 · 센서</div>
        <div className="arch-panel-desc">Fanuc · Yaskawa · 현대로보틱스 등 주요 브랜드와 표준 프로토콜로 즉시 연동</div>
        <div className="arch-source-list">
          <div className="arch-source-item"><span className="arch-source-dot"></span><span className="arch-source-name">로봇 컨트롤러</span><span className="arch-source-detail">OPC-UA</span></div>
          <div className="arch-source-item"><span className="arch-source-dot"></span><span className="arch-source-name">용접 전류·전압 센서</span><span className="arch-source-detail">실시간</span></div>
          <div className="arch-source-item"><span className="arch-source-dot"></span><span className="arch-source-name">토치 각도 · 온습도</span><span className="arch-source-detail">IoT</span></div>
          <div className="arch-source-item"><span className="arch-source-dot"></span><span className="arch-source-name">적재 패턴 · 경로 데이터</span><span className="arch-source-detail">Modbus</span></div>
        </div>
        <div className="arch-proto-row">
          <span className="arch-proto">OPC-UA</span>
          <span className="arch-proto">Modbus TCP</span>
          <span className="arch-proto">별도 개발 불필요</span>
        </div>
      </div>

      <div className="arch-panel arch-panel-engine">
        <div className="arch-panel-label">AI Engine</div>
        <div className="arch-panel-title"><span>R-MEPS</span> 핵심 엔진</div>
        <div className="arch-panel-desc">Edge와 Cloud가 유기적으로 협업하는 이중 레이어 AI 구조</div>
        <div className="arch-engine-features">
          <div className="arch-engine-feat">Edge Layer — On-Device AI<span>msec 즉시 제어 · 네트워크 단절 시에도 자율 운영</span></div>
          <div className="arch-engine-feat">Cloud Layer — MLOps<span>AI 모델 지속 재학습 · OTA 자동 파라미터 배포</span></div>
          <div className="arch-engine-feat">적응형 제어 엔진<span>PID 자동 보정 · 공정 이상 사전 차단</span></div>
          <div className="arch-engine-feat">품질 예측 엔진<span>용접 품질 AI 판정 · 불량 검출률 +20%</span></div>
          <div className="arch-engine-feat">경로 최적화 엔진<span>10만 건 학습 · 공간 활용도 +15%</span></div>
        </div>
      </div>

      <div className="arch-panel arch-panel-output">
        <div className="arch-panel-label">Output</div>
        <div className="arch-panel-title">연동 및 출력</div>
        <div className="arch-panel-desc">MES · GIVAS · 대시보드 등 전 공정 통합 관제 시스템으로 자동 연동</div>
        <div className="arch-output-list">
          <div className="arch-output-item"><div className="arch-output-name">MES 품질이력 자동 저장</div><div className="arch-output-tags"><span className="arch-output-tag">자동화</span><span className="arch-output-tag">실시간</span></div></div>
          <div className="arch-output-item"><div className="arch-output-name">GIVAS AI 분석 연동</div><div className="arch-output-tags"><span className="arch-output-tag">i-MEPS 연동</span><span className="arch-output-tag">전공정</span></div></div>
          <div className="arch-output-item"><div className="arch-output-name">관리자 Push 알림</div><div className="arch-output-tags"><span className="arch-output-tag">즉시 알림</span><span className="arch-output-tag">모바일</span></div></div>
          <div className="arch-output-item"><div className="arch-output-name">모니터링 대시보드</div><div className="arch-output-tags"><span className="arch-output-tag">Naver Cloud</span><span className="arch-output-tag">SaaS</span></div></div>
        </div>
      </div>

    </div>
    <div className="tech-stack-grid reveal" style={{transitionDelay:".1s"}}>
      <div className="tech-card"><div className="tech-card-label">Edge Infrastructure</div><div className="tech-card-items"><span className="tech-item">Docker Container</span><span className="tech-item">On-Device AI 추론</span><span className="tech-item">OPC-UA · Modbus TCP</span><span className="tech-item">100ms 저지연 제어</span></div></div>
      <div className="tech-card"><div className="tech-card-label">Cloud / MLOps</div><div className="tech-card-items"><span className="tech-item">Naver Cloud Platform</span><span className="tech-item">MLOps 자동 재학습</span><span className="tech-item">PostgreSQL · Kafka · Redis</span><span className="tech-item">OTA 파라미터 배포</span></div></div>
      <div className="tech-card"><div className="tech-card-label">AI / ML</div><div className="tech-card-items"><span className="tech-item">적응형 PID 제어</span><span className="tech-item">용접 품질 예측 모델</span><span className="tech-item">경로 최적화 AI</span><span className="tech-item">10만 건 시뮬레이션</span></div></div>
      <div className="tech-card"><div className="tech-card-label">Security</div><div className="tech-card-items"><span className="tech-item">SSL VPN 보안</span><span className="tech-item">VPC 망분리</span><span className="tech-item">데이터 암호화</span><span className="tech-item">접근 권한 관리</span></div></div>
    </div>
  </div>
</section>


<section id="kpi" className="kpi-section">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">파일럿 테스트로 검증된 실제 수치</h2>
      <p className="sec-desc">실제 제조 현장 파일럿 기반 · 검증 완료 데이터</p>
    </div>
    <div className="kpi-big-grid reveal" style={{transitionDelay:".05s"}}>
      <div className="kpi-big-item"><div className="kpi-big-val">+20%</div><div className="kpi-big-label">용접 불량 검출률 향상</div><div className="kpi-big-sub">기존 검출 대비 · 파일럿 검증</div></div>
      <div className="kpi-big-item"><div className="kpi-big-val">+15%</div><div className="kpi-big-label">적재 공간 활용도 향상</div><div className="kpi-big-sub">경로 최적화 AI · 다품종 혼합</div></div>
      <div className="kpi-big-item"><div className="kpi-big-val">100ms</div><div className="kpi-big-label">제어 반응 속도</div><div className="kpi-big-sub">Edge Agent 즉시 보정 명령</div></div>
      <div className="kpi-big-item"><div className="kpi-big-val">10만+</div><div className="kpi-big-label">시뮬레이션 학습 데이터</div><div className="kpi-big-sub">경로 최적화 AI 학습 기반</div></div>
    </div>
    <div className="kpi-compare-grid reveal" style={{transitionDelay:".1s"}}>
      <div className="kpi-compare-item">
        <div className="kpi-compare-label">용접 불량 검출률</div>
        <div className="kpi-compare-bars">
          <div className="kpi-compare-row before"><span className="kpi-compare-tag">전</span><div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"60%"}}></div></div><span className="kpi-compare-num">기준</span></div>
          <div className="kpi-compare-row after"><span className="kpi-compare-tag">후</span><div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"100%"}}></div></div><span className="kpi-compare-num">+20%</span></div>
        </div>
        <div className="kpi-compare-sub">R-MEPS 품질 예측 AI · 기존 대비 20% 이상 향상</div>
      </div>
      <div className="kpi-compare-item">
        <div className="kpi-compare-label">적재 공간 활용도</div>
        <div className="kpi-compare-bars">
          <div className="kpi-compare-row before"><span className="kpi-compare-tag">전</span><div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"75%"}}></div></div><span className="kpi-compare-num">기준</span></div>
          <div className="kpi-compare-row after"><span className="kpi-compare-tag">후</span><div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"100%"}}></div></div><span className="kpi-compare-num">+15%</span></div>
        </div>
        <div className="kpi-compare-sub">경로 최적화 AI · 10만 건 시뮬레이션 학습 기반</div>
      </div>
      <div className="kpi-compare-item">
        <div className="kpi-compare-label">제어 반응 속도</div>
        <div className="kpi-compare-bars">
          <div className="kpi-compare-row before"><span className="kpi-compare-tag">전</span><div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"30%"}}></div></div><span className="kpi-compare-num">수초</span></div>
          <div className="kpi-compare-row after"><span className="kpi-compare-tag">후</span><div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"100%"}}></div></div><span className="kpi-compare-num">100ms</span></div>
        </div>
        <div className="kpi-compare-sub">Edge Agent 즉시 보정 명령 · msec 단위 제어</div>
      </div>
      <div className="kpi-compare-item">
        <div className="kpi-compare-label">MLOps 모델 재학습</div>
        <div className="kpi-compare-bars">
          <div className="kpi-compare-row before"><span className="kpi-compare-tag">전</span><div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"20%"}}></div></div><span className="kpi-compare-num">수동</span></div>
          <div className="kpi-compare-row after"><span className="kpi-compare-tag">후</span><div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"100%"}}></div></div><span className="kpi-compare-num">Auto</span></div>
        </div>
        <div className="kpi-compare-sub">MLOps 파이프라인 · 지속적 성능 고도화</div>
      </div>
    </div>


    <div className="diff-section-head reveal" style={{transitionDelay:".08s"}}>
      <h2 className="sec-title">범용 로봇 솔루션으로는 불가능한 현장 특화</h2>
      <p className="sec-desc">기존 로봇 브랜드와 별도 개발 없이 즉시 연동되는 자체 미들웨어와<br/>숙련공 노하우를 AI로 자산화하는 독자 기술</p>
    </div>
    <div className="diff-grid reveal" style={{transitionDelay:".12s"}}>
      <div className="diff-card">
        <div className="diff-card-title">즉시 연동 — 별도 개발 불필요</div>
        <p className="diff-card-desc">Fanuc · Yaskawa · 현대로보틱스 등 주요 브랜드와 OPC-UA · Modbus TCP 표준 프로토콜로 즉시 연동합니다. 기존 로봇 교체 없이 현장에 바로 AI 두뇌를 탑재할 수 있습니다.</p>
        <ul className="diff-card-points">
          <li>OPC-UA · Modbus TCP 표준 프로토콜 완전 지원</li>
          <li>Fanuc · Yaskawa · 현대로보틱스 즉시 연동</li>
          <li>기존 설비 그대로 · 별도 개발 기간 없음</li>
          <li>파일럿 연동 검증 완료 · 현장 즉시 적용 가능</li>
        </ul>
      </div>
      <div className="diff-card">
        <div className="diff-card-title">숙련공 노하우의 AI 자산화</div>
        <p className="diff-card-desc">용접 전류·전압·토치 각도 등 숙련공의 경험적 노하우를 AI 모델로 학습하여 지식 자산으로 보존합니다. 초보 작업자도 숙련공 수준의 균일한 품질 공정 운영이 가능합니다.</p>
        <ul className="diff-card-points">
          <li>숙련공 용접 노하우 AI 학습 모델로 보존</li>
          <li>초보 작업자도 균일한 고품질 공정 운영</li>
          <li>지식 이탈 · 퇴직 리스크 해소</li>
          <li>i-MEPS · GIVAS 연동으로 전 공정 통합 관제</li>
        </ul>
      </div>
    </div>
  </div>
</section>


<section className="cta-section">
  <div className="cta-glow-right"></div>
  <div className="cta-inner reveal">
    <h2 className="cta-title">R-MEPS 도입이<br/><span className="cta-accent">궁금하신가요?</span></h2>
    <p className="cta-desc">기존 로봇 브랜드 확인 후 즉시 연동 가능 여부를<br/>현장 전문가가 직접 분석해 드립니다</p>
    <div className="cta-actions">
      <Link to="/contact" className="btn-cta-primary">
        R-MEPS 도입 상담 신청
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
      <a href="/ai/platform" className="btn-cta-ghost">
        AI 플랫폼 전체 보기
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>


</div>
    </>
  )
}
