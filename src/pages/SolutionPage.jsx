import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './../styles/pages/solution.css'

export default function SolutionPage() {
  useEffect(() => {
    const ro = new IntersectionObserver(function(es) {
      es.forEach(function(e) { if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target)} })
    }, { threshold: 0.06 })
    document.querySelectorAll('.reveal').forEach(function(el){ ro.observe(el) })

    const barObserver = new IntersectionObserver(function(es) {
      es.forEach(function(e) { if(e.isIntersecting){ e.target.classList.add('animated') } })
    }, { threshold: 0.1 })
    document.querySelectorAll('.kpi-effect-card').forEach(function(el){ barObserver.observe(el) })

    return () => { ro.disconnect(); barObserver.disconnect() }
  }, [])

  return (
    <>
<div className="pg-solution">
<div className="page-hero">
  <div className="sol-hero-bg-overlay"></div>
  <div className="grid-bg"></div>

  <div className="page-hero-inner sol-hero-inner">

    {/* 좌측: 타이틀 + 설명 + 버튼 */}
    <div className="sol-hero-left">
      <h1 className="sol-hero-title">
        <span className="sol-hero-sub">제조통합솔루션 — 자체 개발</span>
        <span className="sol-hero-brand">i-MEPS</span>
        생산·품질·설비,<br/>하나로 통합합니다
      </h1>
      <p className="sol-hero-desc">
        Integrated Manufacturing Execution &amp; Planning System<br/>
        15년 현장 최적화 · 생산·품질·설비·공정 데이터를 하나의 플랫폼으로
      </p>
      <div className="sol-hero-btns">
        <Link to="/contact" className="sol-btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          도입 상담 신청
        </Link>
        <a href="#modules" className="sol-btn-ghost">
          핵심 기능 보기
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </a>
      </div>
    </div>

    {/* 우측: i-MEPS 대시보드 UI */}
    <div className="sol-hero-right">
      <div className="sol-dashboard">

        {/* 상단 타이틀바 */}
        <div className="sol-db-topbar">
          <div className="sol-db-dots">
            <span className="sol-db-dot dot-r"></span>
            <span className="sol-db-dot dot-y"></span>
            <span className="sol-db-dot dot-g"></span>
          </div>
          <span className="sol-db-title">i-MEPS DASHBOARD</span>
          <span className="sol-db-live"><span className="sol-db-pulse"></span>LIVE</span>
        </div>

        {/* KPI 요약 바 */}
        <div className="sol-db-kpi-row">
          <div className="sol-db-kpi">
            <div className="sol-db-kpi-val purple">98.2%</div>
            <div className="sol-db-kpi-label">생산 달성률</div>
          </div>
          <div className="sol-db-kpi">
            <div className="sol-db-kpi-val green">0.8%</div>
            <div className="sol-db-kpi-label">불량률</div>
          </div>
          <div className="sol-db-kpi">
            <div className="sol-db-kpi-val">847</div>
            <div className="sol-db-kpi-label">금일 생산수량</div>
          </div>
          <div className="sol-db-kpi">
            <div className="sol-db-kpi-val orange">2</div>
            <div className="sol-db-kpi-label">설비 이상 경보</div>
          </div>
        </div>

        {/* 모듈 그리드 */}
        <div className="sol-db-modules">
          <div className="sol-db-mod sol-db-mod-main">
            <div className="sol-db-mod-head">
              <span className="sol-db-mod-label">생산관리</span>
              <span className="sol-db-mod-status status-ok">정상</span>
            </div>
            <div className="sol-db-mod-chart">
              {[65,80,55,90,72,88,95].map((h,i) => (
                <div key={i} className="sol-db-bar" style={{height:`${h}%`, opacity: i===6?1:0.55+(i*0.06)}}></div>
              ))}
            </div>
            <div className="sol-db-mod-foot">작업지시 · 실적 · LOT 추적</div>
          </div>

          <div className="sol-db-mod">
            <div className="sol-db-mod-head">
              <span className="sol-db-mod-label">품질관리</span>
              <span className="sol-db-mod-status status-ok">정상</span>
            </div>
            <div className="sol-db-mod-items">
              <div className="sol-db-row"><span>검사 합격</span><span className="green">412건</span></div>
              <div className="sol-db-row"><span>불량 검출</span><span className="red">4건</span></div>
              <div className="sol-db-row"><span>SPC 경고</span><span className="orange">1건</span></div>
            </div>
          </div>

          <div className="sol-db-mod">
            <div className="sol-db-mod-head">
              <span className="sol-db-mod-label">설비관리</span>
              <span className="sol-db-mod-status status-warn">주의</span>
            </div>
            <div className="sol-db-mod-items">
              <div className="sol-db-row"><span>가동 설비</span><span className="green">18대</span></div>
              <div className="sol-db-row"><span>점검 필요</span><span className="orange">2대</span></div>
              <div className="sol-db-row"><span>가동률</span><span className="purple">91.2%</span></div>
            </div>
          </div>
        </div>

        {/* 하단 공정 흐름 */}
        <div className="sol-db-flow">
          {['수주','생산계획','작업지시','실적수집','품질검사','출하'].map((step, i) => (
            <div key={i} className="sol-db-flow-step">
              <div className={`sol-db-flow-node ${i<4?'node-done':i===4?'node-active':'node-pend'}`}></div>
              <span className="sol-db-flow-label">{step}</span>
              {i < 5 && <div className="sol-db-flow-line"></div>}
            </div>
          ))}
        </div>

      </div>
    </div>

  </div>
</div>


<section id="asis-tobe">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">i-MEPS 도입 전후 비교</h2>
      <p className="sec-desc">갈수록 복잡해지는 제조 환경에서 데이터가 분리되어 있다면<br/>실시간 의사결정이 불가능합니다.<br/>i-MEPS는 모든 정보를 하나의 플랫폼으로 통합합니다.</p>
    </div>

    <div className="vs-wrapper reveal" style={{transitionDelay:".1s"}}>

      <div className="vs-left">
        <div className="vs-card-header">
          <div className="vs-tag">
            <div className="vs-tag-dot vs-tag-dot-gray"></div>
            <span className="vs-tag-text vs-tag-text-gray">기존 방식 (AS-IS)</span>
          </div>
          <div className="vs-card-title vs-card-title-gray">분산된 데이터 · 수작업 의존</div>
        </div>
        <div className="vs-items">
          <div className="vs-item">
            <div className="vs-item-icon vs-icon-x">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </div>
            <div className="vs-item-text">작업지시 수작업 배포<span className="vs-dash"> —</span><br className="vs-mob-br"/> <strong>정확성 부재로 현장 혼선 발생</strong></div>
          </div>
          <div className="vs-item">
            <div className="vs-item-icon vs-icon-x">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </div>
            <div className="vs-item-text">필요 정보를 필요한 시점에 활용 불가<span className="vs-dash"> —</span><br className="vs-mob-br"/> <strong>의사결정 지연</strong></div>
          </div>
          <div className="vs-item">
            <div className="vs-item-icon vs-icon-x">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </div>
            <div className="vs-item-text">생산실적 수작업 처리<span className="vs-dash"> —</span><br className="vs-mob-br"/> <strong>생산일보 작성에 시간 낭비</strong></div>
          </div>
          <div className="vs-item">
            <div className="vs-item-icon vs-icon-x">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </div>
            <div className="vs-item-text">실물 재고·시스템 재고 차이<span className="vs-dash"> —</span><br className="vs-mob-br"/> <strong>생산 손실 지속 발생</strong></div>
          </div>
        </div>
      </div>


      <div className="vs-center">
        <div className="vs-label">VS</div>
        <div className="vs-arrow-wrap vs-arrow-down">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
        <div className="vs-name">i-MEPS</div>
      </div>


      <div className="vs-right">
        <div className="vs-card-header">
          <div className="vs-tag">
            <div className="vs-tag-dot vs-tag-dot-purple"></div>
            <span className="vs-tag-text vs-tag-text-purple">i-MEPS 도입 후 (TO-BE)</span>
          </div>
          <div className="vs-card-title vs-card-title-purple">통합 플랫폼 · 실시간 의사결정</div>
        </div>
        <div className="vs-items">
          <div className="vs-item">
            <div className="vs-item-icon vs-icon-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7"/></svg>
            </div>
            <div className="vs-item-text">작업지시 · 실적 실시간 공유<span className="vs-dash"> —</span><br className="vs-mob-br"/> <strong>현장 정확도 대폭 향상</strong></div>
          </div>
          <div className="vs-item">
            <div className="vs-item-icon vs-icon-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7"/></svg>
            </div>
            <div className="vs-item-text">자료취합 업무 제거<span className="vs-dash"> —</span><br className="vs-mob-br"/> <strong>생산분석·개선 업무로 전환</strong></div>
          </div>
          <div className="vs-item">
            <div className="vs-item-icon vs-icon-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7"/></svg>
            </div>
            <div className="vs-item-text">시스템으로 보이는 현장관리<span className="vs-dash"> —</span><br className="vs-mob-br"/> <strong>데이터 기반 의사결정</strong></div>
          </div>
          <div className="vs-item">
            <div className="vs-item-icon vs-icon-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7"/></svg>
            </div>
            <div className="vs-item-text">i-MEPS 데이터 →<br className="vs-mob-br"/> <strong>GIVAS AI 분석 엔진으로 자동 연결</strong></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="modules">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">생산·품질·설비 — 원스톱 제조통합</h2>
      <p className="sec-desc">생산관리·품질관리·공정관리·설비관리를 하나의 플랫폼에서 통합 관리합니다</p>
    </div>
    <div className="modules-grid">
      <div className="mod-card reveal" style={{transitionDelay:".05s"}}>
        <div className="mod-num">01</div>
        <div className="mod-title">인사관리 · 기준정보</div>
        <div className="mod-items">
          <div className="mod-item"><div className="mod-dot"></div>조직 · 인사 기준 데이터 관리</div>
          <div className="mod-item"><div className="mod-dot"></div>제품 · 설비 기준정보 통합</div>
          <div className="mod-item"><div className="mod-dot"></div>마스터 데이터 일원화</div>
        </div>
      </div>
      <div className="mod-card reveal" style={{transitionDelay:".1s"}}>
        <div className="mod-num">02</div>
        <div className="mod-title">영업 · 구매 · 자재</div>
        <div className="mod-items">
          <div className="mod-item"><div className="mod-dot"></div>수주 · 발주 · 재고 실시간 연동</div>
          <div className="mod-item"><div className="mod-dot"></div>공급망(SCM) 통합 관리</div>
          <div className="mod-item"><div className="mod-dot"></div>안전재고 기준 자동 경보</div>
        </div>
      </div>
      <div className="mod-card reveal" style={{transitionDelay:".15s"}}>
        <div className="mod-num">03</div>
        <div className="mod-title">생산관리 · 공정관리</div>
        <div className="mod-items">
          <div className="mod-item"><div className="mod-dot"></div>작업지시 · 실적 실시간 처리</div>
          <div className="mod-item"><div className="mod-dot"></div>LOT · 공정 이력 완전 추적</div>
          <div className="mod-item"><div className="mod-dot"></div>4M 변경관리 · SPC 연동</div>
        </div>
      </div>
      <div className="mod-card reveal" style={{transitionDelay:".2s"}}>
        <div className="mod-num">04</div>
        <div className="mod-title">설비관리 · 금형관리</div>
        <div className="mod-items">
          <div className="mod-item"><div className="mod-dot"></div>설비 이력 · 점검 자동화</div>
          <div className="mod-item"><div className="mod-dot"></div>금형 수명 · 교체 이력 관리</div>
          <div className="mod-item"><div className="mod-dot"></div>예방정비 스케줄 자동 생성</div>
        </div>
      </div>
      <div className="mod-card reveal" style={{transitionDelay:".25s"}}>
        <div className="mod-num">05</div>
        <div className="mod-title">품질관리 · SPC 관리</div>
        <div className="mod-items">
          <div className="mod-item"><div className="mod-dot"></div>초 · 중 · 종 검사 시스템</div>
          <div className="mod-item"><div className="mod-dot"></div>통계적 공정 관리(SPC)</div>
          <div className="mod-item"><div className="mod-dot"></div>불량 원인 분석 · 이력 추적</div>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="architecture">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">현장 데이터에서 AI 분석까지<br/>하나의 데이터 흐름</h2>
      <p className="sec-desc">i-MEPS가 수집한 생산·품질·설비 데이터는 GIVAS AI 엔진과 직접 연동되어<br/>스마트팩토리 구축부터 AI 전환까지 이어집니다</p>
    </div>

    <div className="arch-flow-diagram reveal" style={{transitionDelay:".1s"}}>


      <div className="afd-row afd-row-inputs">
        <div className="afd-step-label"><span>데이터 입력</span></div>
        <div className="afd-cards-4">
          <div className="afd-src-card">
            <div className="afd-src-name">PLC · 센서</div>
            <div className="afd-src-sub">설비 신호 · 공정 데이터</div>
          </div>
          <div className="afd-src-card">
            <div className="afd-src-name">작업자 단말</div>
            <div className="afd-src-sub">생산실적 · 검사 입력</div>
          </div>
          <div className="afd-src-card">
            <div className="afd-src-name">수주 · 자재관리</div>
            <div className="afd-src-sub">구매 · 재고 · SCM</div>
          </div>
          <div className="afd-src-card">
            <div className="afd-src-name">IoT · 협동로봇</div>
            <div className="afd-src-sub">AGV · FOOL PROOF</div>
          </div>
        </div>
      </div>


      <div className="afd-connector">
        <div className="afd-conn-lines">
          <div className="afd-conn-line"></div><div className="afd-conn-line"></div>
          <div className="afd-conn-line"></div><div className="afd-conn-line"></div>
        </div>
        <div className="afd-proto-strip">
          <span className="afd-proto">OPC-UA</span>
          <span className="afd-proto">MQTT</span>
          <span className="afd-proto">Modbus</span>
          <span className="afd-proto">REST API</span>
        </div>
        <div className="afd-conn-arrows">
          <div className="afd-arr"></div><div className="afd-arr"></div>
          <div className="afd-arr"></div><div className="afd-arr"></div>
        </div>
      </div>


      <div className="afd-row">
        <div className="afd-step-label"><span>통합 처리</span></div>
        <div className="afd-engine">
          <div className="afd-engine-pulse"></div>
          <div className="afd-engine-inner">
            <div className="afd-engine-title">i-MEPS 통합 플랫폼</div>
            <div className="afd-engine-sub">MES · QMS · SCM · PLM 일체형 &nbsp;|&nbsp; 15년 현장 최적화</div>
            <div className="afd-chip-row">
              <span className="afd-chip">작업지시 실시간</span>
              <span className="afd-chip">LOT 이력 추적</span>
              <span className="afd-chip">SPC 품질 분석</span>
              <span className="afd-chip">설비 자동화</span>
              <span className="afd-chip">재고 관리</span>
            </div>
          </div>
        </div>
      </div>


      <div className="afd-connector afd-connector-out">
        <div className="afd-conn-lines afd-conn-lines-3">
          <div className="afd-conn-line"></div><div className="afd-conn-line"></div><div className="afd-conn-line"></div>
        </div>
        <div className="afd-conn-arrows afd-conn-arrows-3">
          <div className="afd-arr"></div><div className="afd-arr"></div><div className="afd-arr"></div>
        </div>
      </div>


      <div className="afd-row">
        <div className="afd-step-label"><span>활용 출력</span></div>
        <div className="afd-cards-3">
          <div className="afd-out-card afd-out-purple">
            <div className="afd-out-name">통합 관리자 화면</div>
            <div className="afd-out-sub">생산 현황 · KPI · 실시간 모니터링</div>
          </div>
          <div className="afd-out-card afd-out-blue">
            <div className="afd-out-name">현장 작업자 앱</div>
            <div className="afd-out-sub">Android · iOS · 즉시 조회 / 입력</div>
          </div>
          <div className="afd-out-card afd-out-green">
            <div className="afd-out-name">GIVAS AI 엔진</div>
            <div className="afd-out-sub">예지보전 · SPC · 이상탐지 자동 전달</div>
          </div>
        </div>
      </div>

    </div>


    <div className="ai-banner-outer reveal" style={{transitionDelay:".25s"}}>
      <div className="arch-ai-banner">
        <div className="arch-ai-left">
          <div className="arch-ai-indicator"></div>
          <div>
            <div className="arch-ai-title">i-MEPS → GIVAS AI 자동 연동</div>
            <div className="arch-ai-sub">i-MEPS 기존 사용 고객은 GIVAS AI 분석 엔진과 데이터 연동이 훨씬 빠릅니다. 스마트팩토리 구축이 AI 전환의 출발점이 됩니다.</div>
          </div>
        </div>
        <div className="arch-ai-badge">AI 전환 패스트트랙</div>
      </div>
    </div>
  </div>
</section>


<section id="kpi">
  <div className="container">
    <div className="sec-head-center reveal" style={{marginBottom:"0"}}>
      <h2 className="sec-title">숫자로 증명하는 i-MEPS 도입 효과</h2>
      <p className="sec-desc">100+ 구축 현장에서 검증된 실제 수치</p>
    </div>


    <div className="kpi-grid reveal" style={{transitionDelay:".08s"}}>
      <div className="kpi-card"><div className="kpi-val">100+</div><div className="kpi-label">구축 완료 기업</div><div className="kpi-sub">2011년 창업 이래<br/>스마트팩토리 구축 실적</div></div>
      <div className="kpi-card"><div className="kpi-val">15년+</div><div className="kpi-label">현장 구축 경험</div><div className="kpi-sub">MES·QMS·PLM<br/>삼성·현대·두산 협업</div></div>
      <div className="kpi-card"><div className="kpi-val">5개</div><div className="kpi-label">핵심 관리 모듈</div><div className="kpi-sub">생산 · 품질 · 공정<br/>설비 · 자재 완전 통합</div></div>
      <div className="kpi-card"><div className="kpi-val">AI</div><div className="kpi-label">GIVAS 연동 가능</div><div className="kpi-sub">i-MEPS 데이터 →<br/>AI 예측 분석 즉시 전환</div></div>
    </div>


    <div className="kpi-effect-grid reveal" style={{marginTop:"48px",transitionDelay:".16s"}}>


      <div className="kpi-effect-card">
        <div className="kpi-eff-header">
          <div className="kpi-eff-text">
            <div className="kpi-eff-title">작업지시 처리 정확도</div>
            <div className="kpi-eff-desc">수작업 대비 실시간 자동화 처리</div>
          </div>
          <div className="kpi-eff-val kpi-eff-purple">95%+</div>
        </div>
        <div className="kpi-bar-track">
          <div className="kpi-bar-fill" style={{width:"95%",background:"linear-gradient(90deg,#8B5CF6,#C4B5FD)"}}></div>
        </div>
        <div className="kpi-bar-range"><span>0%</span><span>100%</span></div>
      </div>


      <div className="kpi-effect-card">
        <div className="kpi-eff-header">
          <div className="kpi-eff-text">
            <div className="kpi-eff-title">생산 데이터 실시간 가시성</div>
            <div className="kpi-eff-desc">전 공정 LOT 추적 · 실시간 현황판</div>
          </div>
          <div className="kpi-eff-val kpi-eff-purple">100%</div>
        </div>
        <div className="kpi-bar-track">
          <div className="kpi-bar-fill" style={{width:"100%",background:"linear-gradient(90deg,#8B5CF6,#C4B5FD)"}}></div>
        </div>
        <div className="kpi-bar-range"><span>0%</span><span>100%</span></div>
      </div>


      <div className="kpi-effect-card kpi-effect-card-compare">
        <div className="kpi-eff-compare-title">
          <div className="kpi-eff-title">재고 오차율</div>
          <div className="kpi-eff-desc">실물 재고 · 시스템 재고 차이</div>
        </div>
        <div className="kpi-compare-row">
          <div className="kpi-cmp-box kpi-cmp-before">
            <div className="kpi-cmp-label">도입 전</div>
            <div className="kpi-cmp-num">±10%↑</div>
            <div className="kpi-cmp-sub">수작업 집계<br/>오차 누적</div>
          </div>
          <div className="kpi-cmp-arrow">→</div>
          <div className="kpi-cmp-box kpi-cmp-after">
            <div className="kpi-cmp-label">도입 후</div>
            <div className="kpi-cmp-num">±1%↓</div>
            <div className="kpi-cmp-sub">시스템 자동<br/>실시간 반영</div>
          </div>
        </div>
      </div>


      <div className="kpi-effect-card kpi-effect-card-flow">
        <div className="kpi-eff-compare-title">
          <div className="kpi-eff-title">AI 전환 속도</div>
          <div className="kpi-eff-desc">GIVAS AI 연동 데이터 패스트트랙</div>
        </div>
        <div className="kpi-flow-steps">
          <div className="kpi-flow-step">
            <div className="kpi-flow-step-num">1</div>
            <div className="kpi-flow-step-txt">i-MEPS<br/>현장 구축</div>
          </div>
          <div className="kpi-flow-arrow">→</div>
          <div className="kpi-flow-step">
            <div className="kpi-flow-step-num">2</div>
            <div className="kpi-flow-step-txt">데이터<br/>자동 축적</div>
          </div>
          <div className="kpi-flow-arrow">→</div>
          <div className="kpi-flow-step kpi-flow-step-highlight">
            <div className="kpi-flow-step-num">3</div>
            <div className="kpi-flow-step-txt">GIVAS AI<br/>즉시 연동</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<section id="diff">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">왜 i-MEPS인가</h2>
      <p className="sec-desc">15년 현장 경험이 집약된 자체 개발 제조통합솔루션</p>
    </div>
    <div className="diff-grid">
      <div className="diff-card reveal" style={{transitionDelay:".05s"}}>
        <div className="diff-title">실질적 맞춤 시스템</div>
        <div className="diff-desc">요구사항 최대 반영, 현장에서 실질적으로 도움이 되는 기능만 개발합니다. 생산·품질 관리에 특화된 솔루션으로 우리 현장에 딱 맞게 제공합니다.</div>
        <div className="diff-chips"><span className="diff-chip">요구사항 반영</span><span className="diff-chip">커스터마이징</span><span className="diff-chip">현장 최적화</span></div>
      </div>
      <div className="diff-card reveal" style={{transitionDelay:".1s"}}>
        <div className="diff-title">책임 개발 · 품질 보증</div>
        <div className="diff-desc">25년 경력 전담 QA가 직접 투입됩니다. 장애 발생 시 7단계 복구 프로세스로 최단시간 내 복구를 보장하며, 이후에도 지속적인 유지보수를 책임집니다.</div>
        <div className="diff-chips"><span className="diff-chip">25년 QA 경력</span><span className="diff-chip">7단계 복구</span><span className="diff-chip">품질 보증</span></div>
      </div>
      <div className="diff-card reveal" style={{transitionDelay:".15s"}}>
        <div className="diff-title">컨설팅 + 구축 병행</div>
        <div className="diff-desc">단순 소프트웨어 납품이 아닙니다. 현장 업무 컨설팅을 병행하여 표준화와 정형화를 동시에 진행합니다. 구축자 80% 이상이 유사 경험 보유자입니다.</div>
        <div className="diff-chips"><span className="diff-chip">업무 컨설팅</span><span className="diff-chip">표준화 동시 진행</span><span className="diff-chip">구축 경험자 80%+</span></div>
      </div>
      <div className="diff-card reveal" style={{transitionDelay:".2s"}}>
        <div className="diff-title">지속 업그레이드 · AI 연결</div>
        <div className="diff-desc">SaaS형 지속 업데이트로 무중단 기능 추가가 가능합니다. i-MEPS 구축 후 GIVAS·V-MEPS·R-MEPS AI 솔루션과 자연스럽게 연결되어 AI 전환 비용을 최소화합니다.</div>
        <div className="diff-chips"><span className="diff-chip">SaaS 지속 업데이트</span><span className="diff-chip">AI 전환 연결</span><span className="diff-chip">무중단 기능 추가</span></div>
      </div>
    </div>
  </div>
</section>


<section className="cta-section">
  <div className="cta-inner reveal">
    <h2 className="cta-main-title">
      i-MEPS 도입이<br/><em>궁금하신가요?</em>
    </h2>
    <p className="cta-sub">현장 환경 분석부터 맞춤 구축 범위 설계까지<br/>제조통합 전문가가 직접 안내해 드립니다</p>

    <div className="cta-btns">
      <Link to="/contact" className="btn-cta-primary">
        i-MEPS 도입 상담 신청
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
      <a href="/ai/platform" className="btn-cta-ghost">
        AI 솔루션 전체 보기
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>


</div>
    </>
  )
}
