import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './../styles/pages/givas.css'

export default function GivasPage() {
  useEffect(() => {
    // Scroll reveal
    const ro = new IntersectionObserver(es => {
      es.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target)} })
    }, { threshold: 0.06 })
    document.querySelectorAll('.reveal').forEach(el => ro.observe(el))

    // Feat accordion toggle
    window._toggleFeat = function(header) {
      var item = header.parentElement
      var isOpen = item.classList.contains('open')
      document.querySelectorAll('.feat-item.open').forEach(function(el){ el.classList.remove('open') })
      if (!isOpen) item.classList.add('open')
    }

    // KPI bar animation
    const barObs = new IntersectionObserver(es => {
      es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('animated'); barObs.unobserve(e.target) } })
    }, { threshold: 0.3 })
    document.querySelectorAll('.kpi-compare-item').forEach(el => barObs.observe(el))


    const donutObs = new IntersectionObserver(function(es) {
      es.forEach(function(e) { if(e.isIntersecting){ e.target.classList.add('animated'); donutObs.unobserve(e.target) } })
    }, { threshold: 0.3 })
    document.querySelectorAll('.kpi-radial-item').forEach(function(el){ donutObs.observe(el) })

        return () => { ro.disconnect(); donutObs.disconnect(); barObs.disconnect(); delete window._toggleFeat }
  }, [])

  return (
    <>
<div className="pg-givas">
<div className="page-hero">
  <div className="grid-bg"></div>
  <div className="page-hero-inner">
    <div className="container">
      <div className="givas-hero-layout">


        <div style={{opacity:"0",animation:"fadeUp .8s .2s ease forwards"}}>
          <h1 className="givas-hero-title">
            <span className="sub-brand">데이터를 기록하지 않습니다</span>
            <span className="brand">GIVAS</span>
            <br/>예측하고, 행동을 제안합니다
          </h1>
          <p className="givas-hero-desc">
            1초 단위 수집되는 <em>탱크 수위·온도·압력·유량 데이터</em>를 실시간 분석하고<br/>
            펌프·모터 전류 패턴을 학습하여 <em>고장 징후를 사전에 포착</em>합니다<br/>
            기존 MES가 기록만 한다면, GIVAS는 학습하고 예측합니다
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


        <div className="givas-hero-visual" style={{opacity:"0",animation:"fadeUp .8s .45s ease forwards"}}>
          <div className="hero-monitor givas-monitor">

            <div className="monitor-topbar">
              <div className="monitor-dots">
                <div className="m-dot m-dot-r"></div>
                <div className="m-dot m-dot-y"></div>
                <div className="m-dot m-dot-g"></div>
              </div>
              <div className="monitor-title">GIVAS INTELLIGENCE HUB</div>
              <div className="monitor-status">
                <span className="status-pulse"></span>
                LIVE
              </div>
            </div>

            <div className="monitor-body">
              {/* KPI 4개 */}
              <div className="givas-kpi-row">
                <div className="givas-kpi">
                  <div className="givas-kpi-val" style={{color:"var(--accent)"}}>99%</div>
                  <div className="givas-kpi-label">SPC 정확도</div>
                </div>
                <div className="givas-kpi">
                  <div className="givas-kpi-val" style={{color:"#34D399"}}>90%+</div>
                  <div className="givas-kpi-label">예지보전 탐지</div>
                </div>
                <div className="givas-kpi">
                  <div className="givas-kpi-val" style={{color:"var(--accent)"}}>37.5%</div>
                  <div className="givas-kpi-label">생산량 증가</div>
                </div>
                <div className="givas-kpi">
                  <div className="givas-kpi-val" style={{color:"#A78BFA"}}>10%</div>
                  <div className="givas-kpi-label">재고비용 절감</div>
                </div>
              </div>

              {/* 이상탐지 그래프 + AI 분석 패널 */}
              <div className="givas-panels">
                <div className="givas-panel givas-panel-main">
                  <div className="givas-panel-head">
                    <span className="givas-panel-title">이상탐지 모니터링</span>
                    <span className="givas-badge-ok">정상</span>
                  </div>
                  <div className="givas-graph">
                    {[30,45,38,52,35,60,42,55,40,70,38,52,45,80,42,58,35,65,44,72].map((h,i)=>(
                      <div key={i} className={`givas-bar ${h>65?'bar-warn':''}`}
                        style={{height:`${h}%`,opacity:0.4+(i*0.03)}}></div>
                    ))}
                  </div>
                  <div className="givas-graph-labels">
                    <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>NOW</span>
                  </div>
                </div>
                <div className="givas-panel givas-panel-sub">
                  <div className="givas-panel-head">
                    <span className="givas-panel-title">AI 분석 알림</span>
                  </div>
                  <div className="givas-alerts">
                    <div className="givas-alert alert-ok">
                      <span className="alert-dot dot-ok"></span>
                      <div>
                        <div className="alert-title">펌프 #3 — 정상</div>
                        <div className="alert-sub">진동 패턴 학습 완료</div>
                      </div>
                    </div>
                    <div className="givas-alert alert-warn">
                      <span className="alert-dot dot-warn"></span>
                      <div>
                        <div className="alert-title">온도 편차 감지</div>
                        <div className="alert-sub">3번 라인 ±2.1°C 초과</div>
                      </div>
                    </div>
                    <div className="givas-alert alert-info">
                      <span className="alert-dot dot-info"></span>
                      <div>
                        <div className="alert-title">재고 자동 발주</div>
                        <div className="alert-sub">A자재 안전재고 도달</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gen AI 질의 */}
              <div className="givas-chat">
                <div className="givas-chat-q">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                  3번 라인 불량률이 왜 올랐나요?
                </div>
                <div className="givas-chat-a">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  온도 변동(±3.2°C) 및 펌프 #3 전류 이상이 주요 원인으로 분석됩니다.
                </div>
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
          <div className="pos-card-header-name">
            <span className="pos-header-dot"></span>기존 방식 (AS-IS)
          </div>
          <div className="pos-card-title">데이터는 쌓이지만, 예측은 없습니다</div>
          <div className="pos-card-header-divider"></div>
        </div>
        <div className="pos-card-body">
          <div className="pos-items">
            <div className="pos-item">
              <span className="icon-x"></span>
              생산 실적·품질 데이터 기록만 가능
            </div>
            <div className="pos-item">
              <span className="icon-x"></span>
              고장 발생 후에야 인지 — 사후 대응
            </div>
            <div className="pos-item">
              <span className="icon-x"></span>
              분석은 전문가가 별도 작업 필요
            </div>
            <div className="pos-item">
              <span className="icon-x"></span>
              재고 관리 수작업, 과잉/부족 반복
            </div>
            <div className="pos-item">
              <span className="icon-x"></span>
              자연어 질의 불가 — 리포트 대기 필요
            </div>
          </div>
        </div>
      </div>


      <div className="pos-arrow">
        <div className="pos-arrow-track">
          <span className="pos-vs-text">VS</span>
          <span className="pos-vs-sub">GIVAS</span>
          <div className="pos-vs-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </div>


      <div className="pos-box pos-box-after">
        <div className="pos-card-header">
          <div className="pos-card-header-name">
            <span className="pos-header-dot"></span>GIVAS 도입 후 (TO-BE)
          </div>
          <div className="pos-card-title">학습하고, 예측하고, <span style={{WebkitTextFillColor:"var(--white)",color:"var(--white)"}}>행동합니다</span></div>
          <div className="pos-card-header-divider"></div>
        </div>
        <div className="pos-card-body">
          <div className="pos-items">
            <div className="pos-item">
              <span className="icon-check"></span>
              1초 단위 센서 데이터 실시간 분석
            </div>
            <div className="pos-item">
              <span className="icon-check"></span>
              고장 전 징후 AI 감지 → 예방 조치 알림
            </div>
            <div className="pos-item">
              <span className="icon-check"></span>
              현장 관리자 자연어 질의 즉시 분석
            </div>
            <div className="pos-item">
              <span className="icon-check"></span>
              안전재고 AI 계산 → 자동 발주 추천
            </div>
            <div className="pos-item">
              <span className="icon-check"></span>
              99% 불량 판정 정확도, 즉시 공정 피드백
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<section id="features" className="features-section">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">GIVAS가 해결하는 5가지 제조 현장 문제</h2>
      <p className="sec-desc">화학·윤활유 제조 공정에 특화된 5개 AI 기능으로<br/>예측·분석·자동화를 동시에 실현합니다</p>
    </div>


    <div className="feat-accordion">


      <div className="feat-item open">
        <div className="feat-header" onClick={(e) => window._toggleFeat(e.currentTarget)}>
          <span className="feat-num">01</span>
          <span className="feat-name">예지보전</span>
          <span className="feat-sub-en">Predictive Maintenance</span>
          <span className="feat-kpi-badge">90%+ 탐지정확도</span>
          <svg className="feat-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div className="feat-body">
          <div className="feat-body-left">
            <div className="fp-sub">Predictive Maintenance</div>
            <p className="fp-desc">펌프·모터의 전류·진동 데이터를 지속적으로 학습하여 고장이 발생하기 전 징후를 사전에 감지합니다. 계획되지 않은 설비 다운타임을 획기적으로 줄여 생산 연속성을 확보합니다.</p>
            <div className="fp-kpi-row">
              <div className="fp-kpi-val">90%+</div>
              <div className="fp-kpi-divider"></div>
              <div className="fp-kpi-desc">탐지 정확도 달성<br/>파일럿 테스트 기준</div>
            </div>
          </div>
          <div className="feat-body-right">
            <div className="fp-points-title">핵심 기능 상세</div>
            <ul className="fp-points">
              <li className="fp-point"><span className="fp-point-num">—</span><div className="fp-point-text">펌프·모터 전류/진동 데이터 지속 학습<span>1초 단위 수집 · 이상 패턴 자동 인식</span></div></li>
              <li className="fp-point"><span className="fp-point-num">—</span><div className="fp-point-text">고장 징후 사전 감지 후 즉시 알림 발송<span>모바일 Push · 관리자 대시보드 동시 알림</span></div></li>
              <li className="fp-point"><span className="fp-point-num">—</span><div className="fp-point-text">설비 다운타임 획기적 감소<span>비계획 정지 40%+ 감소 · 유지보수 비용 절감</span></div></li>
              <li className="fp-point"><span className="fp-point-num">—</span><div className="fp-point-text">머신러닝 기반 잔여 수명 예측 (RUL)<span>교체 시점 자동 권고 · 부품 선발주 연동</span></div></li>
            </ul>
          </div>
        </div>
      </div>


      <div className="feat-item">
        <div className="feat-header" onClick={(e) => window._toggleFeat(e.currentTarget)}>
          <span className="feat-num">02</span>
          <span className="feat-name">AI-SPC 품질 분석</span>
          <span className="feat-sub-en">Statistical Process Control</span>
          <span className="feat-kpi-badge">99% 불량판정</span>
          <svg className="feat-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div className="feat-body">
          <div className="feat-body-left">
            <div className="fp-sub">Statistical Process Control</div>
            <p className="fp-desc">자동 충진기의 중량 데이터를 실시간 수집하고 Xbar-R 산포 분석으로 불량을 예측합니다. 과충진·미충진을 사전에 탐지하여 불량을 원천 차단하고 공정 품질을 안정화합니다.</p>
            <div className="fp-kpi-row">
              <div className="fp-kpi-val">99%</div>
              <div className="fp-kpi-divider"></div>
              <div className="fp-kpi-desc">불량 판정 정확도<br/>AI-SPC 파일럿 기준</div>
            </div>
          </div>
          <div className="feat-body-right">
            <div className="fp-points-title">핵심 기능 상세</div>
            <ul className="fp-points">
              <li className="fp-point"><span className="fp-point-num">—</span><div className="fp-point-text">자동 충진기 중량 데이터 실시간 수집<span>1초 단위 데이터 수집 · 오차율 ±1% 이내</span></div></li>
              <li className="fp-point"><span className="fp-point-num">—</span><div className="fp-point-text">Xbar-R 산포 분석으로 불량 예측<span>통계적 공정 관리 · 관리 한계 자동 설정</span></div></li>
              <li className="fp-point"><span className="fp-point-num">—</span><div className="fp-point-text">과충진/미충진 사전 탐지 및 알람<span>공정 이상 발생 전 선제 대응 · 불량 원천 차단</span></div></li>
              <li className="fp-point"><span className="fp-point-num">—</span><div className="fp-point-text">공정 불량률 3.2% → 2.3% 개선<span>파일럿 적용 현장 실측 · 28.1% 불량률 감소</span></div></li>
            </ul>
          </div>
        </div>
      </div>


      <div className="feat-item">
        <div className="feat-header" onClick={(e) => window._toggleFeat(e.currentTarget)}>
          <span className="feat-num">03</span>
          <span className="feat-name">이상 탐지</span>
          <span className="feat-sub-en">Anomaly Detection</span>
          <span className="feat-kpi-badge">±1% 오차율</span>
          <svg className="feat-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div className="feat-body">
          <div className="feat-body-left">
            <div className="fp-sub">Anomaly Detection</div>
            <p className="fp-desc">배합 탱크의 온도·RPM·VOCs(유증기) 데이터를 실시간으로 감시합니다. 정상 패턴에서 벗어난 이상 신호를 자동으로 인식하고 즉시 알림을 발송하여 사고를 예방합니다.</p>
            <div className="fp-kpi-row">
              <div className="fp-kpi-val">±1%</div>
              <div className="fp-kpi-divider"></div>
              <div className="fp-kpi-desc">데이터 오차율 이내<br/>센서 수집 정밀도</div>
            </div>
          </div>
          <div className="feat-body-right">
            <div className="fp-points-title">핵심 기능 상세</div>
            <ul className="fp-points">
              <li className="fp-point"><span className="fp-point-num">—</span><div className="fp-point-text">배합 탱크 온도·RPM·VOCs 실시간 감지<span>유증기 위험물 특화 알고리즘 내장</span></div></li>
              <li className="fp-point"><span className="fp-point-num">—</span><div className="fp-point-text">실시간 이상 패턴 자동 인식<span>머신러닝 정상 패턴 학습 · 편차 자동 감지</span></div></li>
              <li className="fp-point"><span className="fp-point-num">—</span><div className="fp-point-text">알람 및 모바일 Push 즉시 발송<span>이상 발생 즉시 담당자·관리자 동시 알림</span></div></li>
              <li className="fp-point"><span className="fp-point-num">—</span><div className="fp-point-text">다변량 이상탐지 (MVA)<span>단일 변수 초과 아닌 복합 패턴 이상 포착</span></div></li>
            </ul>
          </div>
        </div>
      </div>


      <div className="feat-item">
        <div className="feat-header" onClick={(e) => window._toggleFeat(e.currentTarget)}>
          <span className="feat-num">04</span>
          <span className="feat-name">재고 최적화</span>
          <span className="feat-sub-en">Inventory Optimization</span>
          <span className="feat-kpi-badge">10% 비용절감</span>
          <svg className="feat-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div className="feat-body">
          <div className="feat-body-left">
            <div className="fp-sub">Inventory Optimization</div>
            <p className="fp-desc">원료 탱크의 수위(Level) 데이터를 분석하여 소비 패턴을 학습합니다. 안전재고 미달 예상 시 자동으로 발주를 추천하여 재고 유지 비용을 절감합니다.</p>
            <div className="fp-kpi-row">
              <div className="fp-kpi-val">10%</div>
              <div className="fp-kpi-divider"></div>
              <div className="fp-kpi-desc">재고 유지 비용 절감<br/>자동 발주 연동 기준</div>
            </div>
          </div>
          <div className="feat-body-right">
            <div className="fp-points-title">핵심 기능 상세</div>
            <ul className="fp-points">
              <li className="fp-point"><span className="fp-point-num">—</span><div className="fp-point-text">원료 탱크 수위(Level) 데이터 분석<span>소비 패턴 자동 학습 · 계절·생산 변동 반영</span></div></li>
              <li className="fp-point"><span className="fp-point-num">—</span><div className="fp-point-text">안전재고 미달 시 자동 발주 추천<span>발주 타이밍·수량 AI 계산 · ERP 자동 연동</span></div></li>
              <li className="fp-point"><span className="fp-point-num">—</span><div className="fp-point-text">과잉 재고 및 품절 동시 방지<span>최적 재고 수준 유지 · 자금 효율화</span></div></li>
              <li className="fp-point"><span className="fp-point-num">—</span><div className="fp-point-text">L↔kg 단위 환산 자동 처리<span>밀도·온도 보정 포함 · 업종 특화 알고리즘</span></div></li>
            </ul>
          </div>
        </div>
      </div>


      <div className="feat-item">
        <div className="feat-header" onClick={(e) => window._toggleFeat(e.currentTarget)}>
          <span className="feat-num">05</span>
          <span className="feat-name">Gen AI Assistant</span>
          <span className="feat-sub-en">LLM 자연어 질의 분석</span>
          <span className="feat-kpi-badge">HyperCLOVA X · GPT</span>
          <svg className="feat-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </div>
        <div className="feat-body">
          <div className="feat-body-left">
            <div className="fp-sub">LLM 기반 자연어 질의 분석</div>
            <p className="fp-desc">현장 관리자가 "이번 달 불량 원인은?"이라고 물으면 LLM이 SQL을 자동 생성하고 데이터를 요약합니다. 분석 전문가 없이 누구나 즉시 인사이트를 얻을 수 있습니다.</p>
            <div className="fp-kpi-row" style={{flexDirection:"column",alignItems:"flex-start",gap:"8px"}}>
              <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
                <span className="llm-badge">HyperCLOVA X</span>
                <span className="llm-badge">OpenAI GPT</span>
                <span className="llm-badge">LangChain</span>
              </div>
              <div style={{fontSize:"13px",color:"var(--muted)"}}>LLM SQL 자동 생성 · 자연어 분석 즉시 제공</div>
            </div>
          </div>
          <div className="feat-body-right">
            <div className="genai-chat-demo">
              <div className="chat-header">GIVAS AI Assistant — 라이브 데모</div>
              <div className="chat-bubble chat-bubble-user">이번 달 생산라인 3번의 불량 원인이 뭔가요?</div>
              <div className="chat-bubble chat-bubble-ai"><strong>분석 완료 (2025년 11월)</strong><br/>3번 라인 불량률 3.2% → 2.8% 개선되었으나, 11월 14~16일 구간 충진 중량 편차 ±2.1%로 관리 한계 초과.<br/>주요 원인: <strong>온도 변동(±3.2°C)</strong> 및 <strong>펌프 #3 전류 이상</strong>으로 추정.</div>
              <div className="chat-bubble chat-bubble-user">펌프 #3 교체 권고 시점은?</div>
              <div className="chat-bubble chat-bubble-ai">예지보전 분석 결과, <strong>2025년 12월 8일 ±3일</strong> 이내 정비 권고.<br/>현재 진동 수치: 4.7mm/s (관리 한계 5.0mm/s 대비 94%).</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<section className="arch-section">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">클라우드 네이티브 MSA 아키텍처</h2>
      <p className="sec-desc">IoT Edge에서 Cloud까지 이어지는 단일 AI 파이프라인으로<br/>전 공정 데이터를 실시간으로 분석하고 행동합니다</p>
    </div>


    <div className="arch-diagram reveal" style={{transitionDelay:".05s"}}>


      <div className="arch-panel arch-panel-input">
        <div className="arch-panel-label">01 · 데이터 수집</div>
        <div className="arch-panel-title">현장 IoT 센서</div>
        <p className="arch-panel-desc">공장 설비에 부착된 센서가 1초 단위로 데이터를 수집합니다</p>
        <div className="arch-source-list">
          <div className="arch-source-item">
            <span className="arch-source-dot"></span>
            <span className="arch-source-name">탱크 수위 · 온도 · 압력</span>
            <span className="arch-source-detail">배합 공정</span>
          </div>
          <div className="arch-source-item">
            <span className="arch-source-dot"></span>
            <span className="arch-source-name">펌프 · 모터 전류 · 진동</span>
            <span className="arch-source-detail">설비 상태</span>
          </div>
          <div className="arch-source-item">
            <span className="arch-source-dot"></span>
            <span className="arch-source-name">충진기 중량 · VOCs</span>
            <span className="arch-source-detail">품질 · 안전</span>
          </div>
          <div className="arch-source-item">
            <span className="arch-source-dot"></span>
            <span className="arch-source-name">PLC · MES 생산 데이터</span>
            <span className="arch-source-detail">공정 이력</span>
          </div>
        </div>
        <div className="arch-proto-row">
          <span className="arch-proto">OPC-UA</span>
          <span className="arch-proto">MQTT</span>
          <span className="arch-proto">Modbus</span>
          <span className="arch-proto">REST</span>
        </div>
      </div>


      <div className="arch-panel arch-panel-engine">
        <div className="arch-panel-label">02 · AI 분석</div>
        <div className="arch-panel-title"><span>GIVAS</span> AI 코어 엔진</div>
        <p className="arch-panel-desc">Naver Cloud 기반 실시간 스트리밍 처리 · MLOps 자동 재학습</p>
        <div className="arch-engine-features">
          <div className="arch-engine-feat">예지보전 · 이상탐지
            <span>머신러닝 기반 고장 사전 감지 · 진동/전류 패턴 분석</span>
          </div>
          <div className="arch-engine-feat">AI-SPC 품질 분석
            <span>Xbar-R 산포 분석 · 불량 실시간 판정 99% 정확도</span>
          </div>
          <div className="arch-engine-feat">재고 최적화
            <span>소비 패턴 학습 · 안전재고 AI 계산 · 자동 발주 추천</span>
          </div>
          <div className="arch-engine-feat">Gen AI 자연어 질의
            <span>HyperCLOVA X · OpenAI · SQL 자동 생성</span>
          </div>
        </div>
      </div>


      <div className="arch-panel arch-panel-output">
        <div className="arch-panel-label">03 · 결과 출력</div>
        <div className="arch-panel-title">현장 적용</div>
        <p className="arch-panel-desc">분석 결과를 담당자와 시스템에 즉시 전달합니다</p>
        <div className="arch-output-list">
          <div className="arch-output-item">
            <div className="arch-output-name">실시간 대시보드</div>
            <div className="arch-output-tags">
              <span className="arch-output-tag">Web (React/Vue.js)</span>
              <span className="arch-output-tag">Android · iOS</span>
            </div>
          </div>
          <div className="arch-output-item">
            <div className="arch-output-name">즉시 알림</div>
            <div className="arch-output-tags">
              <span className="arch-output-tag">모바일 Push</span>
              <span className="arch-output-tag">관리자 알람</span>
            </div>
          </div>
          <div className="arch-output-item">
            <div className="arch-output-name">MES · ERP 연동</div>
            <div className="arch-output-tags">
              <span className="arch-output-tag">품질이력 자동 저장</span>
              <span className="arch-output-tag">재고 자동 연동</span>
            </div>
          </div>
        </div>
      </div>

    </div>


    <div className="tech-stack-grid reveal" style={{transitionDelay:".1s"}}>
      <div className="tech-card">
        <div className="tech-card-label">Cloud Infra</div>
        <div className="tech-card-items">
          <div className="tech-item">Naver Cloud Platform</div>
          <div className="tech-item">VPC · Auto Scaling · Load Balancer</div>
          <div className="tech-item">KACI 클라우드 인증</div>
        </div>
      </div>
      <div className="tech-card">
        <div className="tech-card-label">AI / ML</div>
        <div className="tech-card-items">
          <div className="tech-item">Python · PyTorch · TensorFlow</div>
          <div className="tech-item">LangChain · HyperCLOVA X · GPT</div>
          <div className="tech-item">MLOps 자동 재학습</div>
        </div>
      </div>
      <div className="tech-card">
        <div className="tech-card-label">Data Pipeline</div>
        <div className="tech-card-items">
          <div className="tech-item">Kafka 실시간 스트리밍</div>
          <div className="tech-item">Apache Spark · InfluxDB</div>
          <div className="tech-item">1초 단위 실시간 수집</div>
        </div>
      </div>
      <div className="tech-card">
        <div className="tech-card-label">Backend · Frontend</div>
        <div className="tech-card-items">
          <div className="tech-item">Java Spring Boot (MSA)</div>
          <div className="tech-item">React / Vue.js · Android / iOS</div>
          <div className="tech-item">SSL VPN · VPC 망분리</div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="kpi-section">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">파일럿 테스트로 검증된 실제 수치</h2>
      <p className="sec-desc">화학·윤활유 제조 현장 파일럿 테스트 기반 실제 측정 결과입니다</p>
    </div>


    <div className="kpi-big-grid reveal" style={{transitionDelay:".05s"}}>
      <div className="kpi-big-item">
        <div className="kpi-big-val">99%</div>
        <div className="kpi-big-label">SPC 불량 판정 정확도</div>
        <div className="kpi-big-sub">AI-SPC 파일럿 기준</div>
      </div>
      <div className="kpi-big-item">
        <div className="kpi-big-val">90%+</div>
        <div className="kpi-big-label">예지보전 탐지 정확도</div>
        <div className="kpi-big-sub">펌프·모터 고장 사전 감지</div>
      </div>
      <div className="kpi-big-item">
        <div className="kpi-big-val">37.5%</div>
        <div className="kpi-big-label">생산량 증가</div>
        <div className="kpi-big-sub">80EA → 110EA/hr</div>
      </div>
      <div className="kpi-big-item">
        <div className="kpi-big-val">40%+</div>
        <div className="kpi-big-label">설비 다운타임 감소</div>
        <div className="kpi-big-sub">비계획 정지 획기적 감소</div>
      </div>
    </div>


    <div className="kpi-compare-grid reveal" style={{transitionDelay:".1s"}}>
      <div className="kpi-compare-item">
        <div className="kpi-compare-label">공정 불량률 개선</div>
        <div className="kpi-compare-bars">
          <div className="kpi-compare-row before">
            <span className="kpi-compare-tag">전</span>
            <div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"64%"}}></div></div>
            <span className="kpi-compare-num">3.2%</span>
          </div>
          <div className="kpi-compare-row after">
            <span className="kpi-compare-tag">후</span>
            <div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"46%"}}></div></div>
            <span className="kpi-compare-num">2.3%</span>
          </div>
        </div>
        <div className="kpi-compare-sub">AI-SPC 적용 · 28.1% 불량률 감소</div>
      </div>
      <div className="kpi-compare-item">
        <div className="kpi-compare-label">재고 유지 비용 절감</div>
        <div className="kpi-compare-bars">
          <div className="kpi-compare-row before">
            <span className="kpi-compare-tag">전</span>
            <div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"100%"}}></div></div>
            <span className="kpi-compare-num">기준</span>
          </div>
          <div className="kpi-compare-row after">
            <span className="kpi-compare-tag">후</span>
            <div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"90%"}}></div></div>
            <span className="kpi-compare-num">-10%</span>
          </div>
        </div>
        <div className="kpi-compare-sub">자동 발주 연동 · 과잉/부족 동시 방지</div>
      </div>
      <div className="kpi-compare-item">
        <div className="kpi-compare-label">시간당 생산량</div>
        <div className="kpi-compare-bars">
          <div className="kpi-compare-row before">
            <span className="kpi-compare-tag">전</span>
            <div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"57%"}}></div></div>
            <span className="kpi-compare-num">80EA</span>
          </div>
          <div className="kpi-compare-row after">
            <span className="kpi-compare-tag">후</span>
            <div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"79%"}}></div></div>
            <span className="kpi-compare-num">110EA</span>
          </div>
        </div>
        <div className="kpi-compare-sub">GIVAS 공정 최적화 · 시간당 30EA 증가</div>
      </div>
      <div className="kpi-compare-item">
        <div className="kpi-compare-label">데이터 수집 오차율</div>
        <div className="kpi-compare-bars">
          <div className="kpi-compare-row before">
            <span className="kpi-compare-tag">전</span>
            <div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"40%"}}></div></div>
            <span className="kpi-compare-num">±5%+</span>
          </div>
          <div className="kpi-compare-row after">
            <span className="kpi-compare-tag">후</span>
            <div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"10%"}}></div></div>
            <span className="kpi-compare-num">±1%</span>
          </div>
        </div>
        <div className="kpi-compare-sub">고정밀 센서 수집 · 실시간 보정 처리</div>
      </div>
    </div>


    <div className="sec-head-center reveal" style={{marginTop:"72px",transitionDelay:".08s"}}>
      <h2 className="sec-title">범용 AI로는 불가능한 업종 특화</h2>
      <p className="sec-desc">화학·윤활유 업종의 특수성을 이해하는 자체 알고리즘과 IoT 미들웨어</p>
    </div>
    <div className="diff-grid reveal" style={{transitionDelay:".12s"}}>
      <div className="diff-card">
        <div className="diff-card-title">화학·윤활유 특화 알고리즘</div>
        <p className="diff-card-desc">범용 AI는 "L를 kg으로 환산하라"는 업종 지식이 없습니다. GIVAS는 밀도·온도 보정을 포함한 단위 환산, 배합비 보안, 유증기(VOCs) 위험 관리를 코어 로직으로 내장합니다. 그래서 99% 정확도가 나옵니다.</p>
        <ul className="diff-card-points">
          <li>L ↔ kg 자동 환산 — 밀도·온도 보정 내장</li>
          <li>배합비(Recipe) 보안 — 핵심 기술 유출 차단</li>
          <li>VOCs 유증기 위험물 관리 로직 특화</li>
          <li>공정별 관리 한계 자동 산출</li>
        </ul>
      </div>
      <div className="diff-card">
        <div className="diff-card-title">IoT 미들웨어 자체 보유</div>
        <p className="diff-card-desc">타사 솔루션은 PLC·센서 연동에 별도 개발과 수개월의 셋업이 필요합니다. GIVAS는 OPC-UA 변환 기술을 자체 보유하여 이기종 설비와 즉시 연동합니다. 기존 설비를 교체하지 않아도 됩니다.</p>
        <ul className="diff-card-points">
          <li>OPC-UA 표준 변환 자체 보유 — 타사 의존 없음</li>
          <li>이기종 PLC · 센서 즉시 연동</li>
          <li>1초 단위 실시간 수집 · 별도 개발 불필요</li>
          <li>기존 설비 그대로 · 도입 기간 최소화</li>
        </ul>
      </div>
    </div>

  </div>
</section>


<section className="cta-section">
  <div className="cta-glow-right"></div>
  <div className="cta-inner reveal">
    <h2 className="cta-title">
      GIVAS 도입이<br/><span className="cta-accent">궁금하신가요?</span>
    </h2>
    <p className="cta-desc">현장 환경 분석부터 파일럿 테스트까지<br/>AI 전문가가 직접 안내해 드립니다</p>


    <div className="cta-actions">
      <Link to="/contact" className="btn-cta-primary">
        GIVAS 도입 상담 신청
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
