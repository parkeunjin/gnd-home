import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './../styles/pages/vmeps.css'

export default function VmepsPage() {
  useEffect(() => {
    const ro = new IntersectionObserver(es => {
      es.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target)} })
    }, { threshold: 0.06 })
    document.querySelectorAll('.reveal').forEach(el => ro.observe(el))

    const barObs = new IntersectionObserver(es => {
      es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('animated'); barObs.unobserve(e.target) } })
    }, { threshold: 0.3 })
    document.querySelectorAll('.kpi-compare-item').forEach(el => barObs.observe(el))

    return () => { ro.disconnect(); barObs.disconnect() }
  }, [])

  return (
    <>
<div className="pg-vmeps">
<div className="page-hero">
  <div className="hero-bg-img"></div>
  <div className="hero-bg-overlay"></div>
  <div className="hero-scan-lines"></div>
  <div className="grid-bg"></div>

  <div className="page-hero-inner">
    <div className="hero-left">
      <h1 className="vmeps-hero-title">
        <span className="vmeps-sub-brand">육안 검사는 이제 AI에게 맡기세요</span>
        <span className="vmeps-brand">V-MEPS</span>
        불량 · 위험, AI로 차단
      </h1>
      <p className="page-desc">
        육안 검사는 피로하고 화재는 기다려 주지 않습니다.<br/>
        V-MEPS는 YOLOv8 딥러닝 AI로 24시간 쉬지 않고<br/>
        불량 검출과 안전 감시를 동시에 수행합니다.
      </p>
      <div className="hero-btns">
        <Link to="/contact" className="btn-green">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          도입 상담 신청
        </Link>
        <a href="#features" className="btn-ghost-green">
          핵심 기능 보기
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </a>
      </div>
    </div>


    <div className="hero-right">
      <div className="hero-monitor">
        <div className="monitor-topbar">
          <div className="monitor-dots">
            <div className="m-dot m-dot-r"></div>
            <div className="m-dot m-dot-y"></div>
            <div className="m-dot m-dot-g"></div>
          </div>
          <div className="monitor-title">V-MEPS Live Monitor</div>
          <div className="monitor-status">
            <span className="status-pulse"></span>
            LIVE
          </div>
        </div>
        <div className="monitor-body">
          <div className="monitor-cam-grid">

            <div className="cam-cell">
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=60&fit=crop" alt="CAM-01"/>
              <div className="cam-overlay"></div>
              <div className="cam-label">CAM-01</div>
              <div className="cam-warn"></div>

              <div className="cam-bbox bbox-defect" style={{top:"22%",left:"18%",width:"38%",height:"40%"}}></div>
              <div className="cam-det-label det-defect">DEFECT</div>
            </div>

            <div className="cam-cell">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=60&fit=crop" alt="CAM-02"/>
              <div className="cam-overlay"></div>
              <div className="cam-label">CAM-02</div>
              <div className="cam-ok"></div>
              <div className="cam-bbox bbox-ok" style={{top:"20%",left:"25%",width:"50%",height:"50%"}}></div>
              <div className="cam-det-label det-ok">PASS</div>
            </div>

            <div className="cam-cell">
              <img src="https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&q=60&fit=crop" alt="CAM-03"/>
              <div className="cam-overlay"></div>
              <div className="cam-label">CAM-03 · SAFETY</div>
              <div className="cam-ok"></div>
              <div className="cam-det-label det-ok">SAFE</div>
            </div>

            <div className="cam-cell">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=60&fit=crop" alt="CAM-04"/>
              <div className="cam-overlay"></div>
              <div className="cam-label">CAM-04 · SAFETY</div>
              <div className="cam-ok"></div>
              <div className="cam-det-label det-ok">SAFE</div>
            </div>
          </div>
          <div className="monitor-stats">
            <div className="mstat">
              <div className="mstat-val green">95.3%</div>
              <div className="mstat-label">검출 정확도</div>
            </div>
            <div className="mstat">
              <div className="mstat-val red">1</div>
              <div className="mstat-label">불량 감지 (금일)</div>
            </div>
            <div className="mstat">
              <div className="mstat-val">0.08s</div>
              <div className="mstat-label">평균 추론 속도</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<section id="positioning">
  <div className="container">
    <div className="pos-compare reveal">


      <div className="pos-box pos-box-before">
        <div className="pos-card-header">
          <div className="pos-card-header-name">
            <span className="pos-header-dot"></span>기존 방식 (AS-IS)
          </div>
          <div className="pos-card-title">눈으로 보고, 사람이 판단합니다</div>
          <div className="pos-card-header-divider"></div>
        </div>
        <div className="pos-card-body">
          <div className="pos-items">
            <div className="pos-item">
              <span className="icon-x"></span>
              작업자 육안 검사 — 피로도에 따른 오검 발생
            </div>
            <div className="pos-item">
              <span className="icon-x"></span>
              화재·안전사고 인지 지연 — 골든타임 놓침
            </div>
            <div className="pos-item">
              <span className="icon-x"></span>
              24시간 무인 감시 불가 — 야간·심야 사각지대
            </div>
            <div className="pos-item">
              <span className="icon-x"></span>
              불량 이력 수작업 기록 — 데이터 연계 불가
            </div>
            <div className="pos-item">
              <span className="icon-x"></span>
              안전장구 미착용 미감지 — 중대재해 리스크
            </div>
          </div>
        </div>
      </div>


      <div className="pos-arrow">
        <div className="pos-arrow-track">
          <span className="pos-vs-text">VS</span>
          <span className="pos-vs-sub">V-MEPS</span>
          <div className="pos-vs-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </div>


      <div className="pos-box pos-box-after">
        <div className="pos-card-header">
          <div className="pos-card-header-name">
            <span className="pos-header-dot"></span>V-MEPS 도입 후 (TO-BE)
          </div>
          <div className="pos-card-title">AI가 보고, <span className="pos-card-title-hl">즉시 판단합니다</span></div>
          <div className="pos-card-header-divider"></div>
        </div>
        <div className="pos-card-body">
          <div className="pos-items">
            <div className="pos-item">
              <span className="icon-check"></span>
              딥러닝 AI 자동 검사 — 95%+ 정확도 24시간 유지
            </div>
            <div className="pos-item">
              <span className="icon-check"></span>
              연기·불꽃 0.1초 감지 → 3초 내 관리자 알림
            </div>
            <div className="pos-item">
              <span className="icon-check"></span>
              Edge AI 24시간 무인 감시 — 야간 완전 자동화
            </div>
            <div className="pos-item">
              <span className="icon-check"></span>
              MES·ERP 품질이력 자동 저장 — GIVAS 연동 분석
            </div>
            <div className="pos-item">
              <span className="icon-check"></span>
              안전장구 미착용 즉시 감지 — 중대재해처벌법 대응
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<section id="features">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">2대 핵심 기능 — 품질 + 안전</h2>
      <p className="sec-desc">V-MEPS는 제조 품질 검사와 안전 관제를 단일 플랫폼으로 동시 해결합니다</p>
    </div>

    <div className="features-layout">

      <div className="feature-card feature-card-quality reveal" style={{transitionDelay:".05s"}}>
        <div className="fc-header">
          <div>
            <h3 className="fc-title">불량 자동 검출</h3>
            <p className="fc-sub">Defect Detection AI</p>
          </div>
          <div className="fc-icon fc-icon-green">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><circle cx="11" cy="11" r="4"/></svg>
          </div>
        </div>
        <div className="fc-divider fc-divider-green"></div>
        <div className="fc-body">
          <ul className="fc-items">
            <li className="fc-item">
              <span className="fc-item-dot fc-item-dot-green"></span>
              <span><strong>캡핑(Capping) 상태 불량 검사</strong> — 뚜껑 체결 이상 즉시 판정</span>
            </li>
            <li className="fc-item">
              <span className="fc-item-dot fc-item-dot-green"></span>
              <span><strong>라벨 부착 불량 · 이물질 혼입 탐지</strong> — 위치·각도 편차 감지</span>
            </li>
            <li className="fc-item">
              <span className="fc-item-dot fc-item-dot-green"></span>
              <span><strong>외관 이상 · 수량 부족 자동 판정</strong> — 기존 육안 검사 대비 속도 3배 향상</span>
            </li>
            <li className="fc-item">
              <span className="fc-item-dot fc-item-dot-green"></span>
              <span>학습 데이터 <strong>라벨링 완료 5만 장 이상</strong> 기 보유</span>
            </li>
          </ul>
          <div className="fc-kpi-row">
            <div className="fc-kpi fc-kpi-green">
              <div className="fc-kpi-val fc-kpi-val-green">95%+</div>
              <div className="fc-kpi-label">검출 정확도</div>
            </div>
            <div className="fc-kpi fc-kpi-green">
              <div className="fc-kpi-val fc-kpi-val-green">3배</div>
              <div className="fc-kpi-label">육안 대비 속도</div>
            </div>
            <div className="fc-kpi fc-kpi-green">
              <div className="fc-kpi-val fc-kpi-val-green">5만+</div>
              <div className="fc-kpi-label">학습 이미지</div>
            </div>
          </div>
        </div>
      </div>


      <div className="feature-card feature-card-safety reveal" style={{transitionDelay:".1s"}}>
        <div className="fc-header">
          <div>
            <h3 className="fc-title">실시간 안전 감시</h3>
            <p className="fc-sub">Safety Monitoring AI</p>
          </div>
          <div className="fc-icon fc-icon-orange">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
        </div>
        <div className="fc-divider fc-divider-orange"></div>
        <div className="fc-body">
          <ul className="fc-items">
            <li className="fc-item">
              <span className="fc-item-dot fc-item-dot-orange"></span>
              <span><strong>연기 · 불꽃 실시간 감지</strong> — 화학 공정 화재 골든타임 확보</span>
            </li>
            <li className="fc-item">
              <span className="fc-item-dot fc-item-dot-orange"></span>
              <span><strong>작업자 쓰러짐 · 위험 행동 탐지</strong> — 즉각 경보 발동</span>
            </li>
            <li className="fc-item">
              <span className="fc-item-dot fc-item-dot-orange"></span>
              <span><strong>안전장구(안전모 등) 미착용 감지</strong> — 중대재해처벌법 대응</span>
            </li>
            <li className="fc-item">
              <span className="fc-item-dot fc-item-dot-orange"></span>
              <span><strong>위험 구역 침입 경보</strong> — 설정 Zone 진입 즉시 경광등 제어</span>
            </li>
          </ul>
          <div className="fc-kpi-row">
            <div className="fc-kpi fc-kpi-orange">
              <div className="fc-kpi-val fc-kpi-val-orange">3초</div>
              <div className="fc-kpi-label">관리자 알림</div>
            </div>
            <div className="fc-kpi fc-kpi-orange">
              <div className="fc-kpi-val fc-kpi-val-orange">24h</div>
              <div className="fc-kpi-label">무인 감시</div>
            </div>
            <div className="fc-kpi fc-kpi-orange">
              <div className="fc-kpi-val fc-kpi-val-orange">0.1s</div>
              <div className="fc-kpi-label">이벤트 감지</div>
            </div>
          </div>
        </div>
      </div>


      <div className="feature-card-full reveal" style={{transitionDelay:".15s"}}>
        <div className="ffc-left">
          <h3 className="ffc-title">0.1초 Edge 추론 + 클라우드 지속 학습</h3>
          <p className="ffc-desc">현장 Edge 박스에서 즉시 판정하고, Naver Cloud에서 모델을 지속 재학습하여 OTA로 자동 배포합니다. 네트워크 단절 시에도 온디바이스 AI가 자율 운영됩니다.</p>
          <div className="ffc-items">
            <div className="ffc-item"><span className="ffc-item-dot"></span>스마트 카메라 → Edge Box 0.1초 즉시 추론</div>
            <div className="ffc-item"><span className="ffc-item-dot"></span>경광등 · 알람 · MES 불량이력 자동 제어</div>
            <div className="ffc-item"><span className="ffc-item-dot"></span>Cloud NCP: 모델 재학습 → OTA 원격 배포</div>
            <div className="ffc-item"><span className="ffc-item-dot"></span>Cloud 전송 지연 200ms 이내 보장</div>
          </div>
        </div>
        <div className="ffc-right">
          <div className="ffc-data-table">
            <div className="ffc-row header-row">
              <div className="ffc-cell">지표</div>
              <div className="ffc-cell">기존 방식</div>
              <div className="ffc-cell">V-MEPS</div>
            </div>
            <div className="ffc-row">
              <div className="ffc-cell">판정 속도</div>
              <div className="ffc-cell red-val">수 초~분</div>
              <div className="ffc-cell green-val">0.1초</div>
            </div>
            <div className="ffc-row">
              <div className="ffc-cell">정확도</div>
              <div className="ffc-cell red-val">작업자 의존</div>
              <div className="ffc-cell green-val">95%+</div>
            </div>
            <div className="ffc-row">
              <div className="ffc-cell">야간 감시</div>
              <div className="ffc-cell red-val">불가</div>
              <div className="ffc-cell green-val">24시간</div>
            </div>
            <div className="ffc-row">
              <div className="ffc-cell">불량 이력</div>
              <div className="ffc-cell red-val">수작업</div>
              <div className="ffc-cell green-val">자동 저장</div>
            </div>
            <div className="ffc-row">
              <div className="ffc-cell">공정 불량률</div>
              <div className="ffc-cell red-val">3.2%</div>
              <div className="ffc-cell green-val">2.3%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="architecture">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">Edge-Cloud 협업형 AI 파이프라인</h2>
      <p className="sec-desc">현장 즉시 추론 + 클라우드 지속 학습으로 정확도가 계속 향상됩니다</p>
    </div>


    <div className="arch-diagram reveal" style={{transitionDelay:".05s"}}>


      <div className="arch-panel arch-panel-input">
        <div className="arch-panel-label">01 · Edge 현장</div>
        <div className="arch-panel-title">카메라 · 센서 수집</div>
        <p className="arch-panel-desc">현장 설비에 설치된 카메라와 센서가 실시간으로 영상·데이터를 수집합니다</p>
        <div className="arch-source-list">
          <div className="arch-source-item">
            <span className="arch-source-dot"></span>
            <span className="arch-source-name">스마트 카메라 · 영상 수집</span>
            <span className="arch-source-detail">품질 검사</span>
          </div>
          <div className="arch-source-item">
            <span className="arch-source-dot"></span>
            <span className="arch-source-name">NVIDIA TensorRT 즉시 추론</span>
            <span className="arch-source-detail">0.1초</span>
          </div>
          <div className="arch-source-item">
            <span className="arch-source-dot"></span>
            <span className="arch-source-name">경광등 · 알람 · MES 제어</span>
            <span className="arch-source-detail">즉시 출력</span>
          </div>
          <div className="arch-source-item">
            <span className="arch-source-dot"></span>
            <span className="arch-source-name">네트워크 단절 시 자율 운영</span>
            <span className="arch-source-detail">Offline AI</span>
          </div>
        </div>
        <div className="arch-proto-row">
          <span className="arch-proto">MQTT</span>
          <span className="arch-proto">ONNX</span>
          <span className="arch-proto">TensorRT</span>
          <span className="arch-proto">Docker</span>
        </div>
      </div>


      <div className="arch-panel arch-panel-engine">
        <div className="arch-panel-label">02 · AI 분석</div>
        <div className="arch-panel-title"><span>V-MEPS</span> AI 코어 엔진</div>
        <p className="arch-panel-desc">Naver Cloud 기반 실시간 처리 · MLOps 자동 재학습으로 정확도가 지속 향상됩니다</p>
        <div className="arch-engine-features">
          <div className="arch-engine-feat">불량 자동 검출
            <span>YOLOv8 · Vision Transformer — 95%+ 검출 정확도 · 5만장 학습 이미지</span>
          </div>
          <div className="arch-engine-feat">실시간 안전 감시
            <span>연기·불꽃·쓰러짐·안전모 미착용 — 0.1초 감지 · 3초 내 알림</span>
          </div>
          <div className="arch-engine-feat">MLOps 지속 재학습
            <span>운영 중 이미지 자동 누적 → 모델 재학습 → OTA 자동 배포</span>
          </div>
          <div className="arch-engine-feat">통합 분석 연동
            <span>MES · ERP 품질이력 자동 저장 · GIVAS 전 공정 통합 분석</span>
          </div>
        </div>
      </div>


      <div className="arch-panel arch-panel-output">
        <div className="arch-panel-label">03 · 결과 출력</div>
        <div className="arch-panel-title">현장 적용</div>
        <p className="arch-panel-desc">분석 결과를 담당자와 연계 시스템에 즉시 전달합니다</p>
        <div className="arch-output-list">
          <div className="arch-output-item">
            <div className="arch-output-name">실시간 대시보드</div>
            <div className="arch-output-tags">
              <span className="arch-output-tag">Web · Mobile</span>
              <span className="arch-output-tag">200ms 반영</span>
            </div>
          </div>
          <div className="arch-output-item">
            <div className="arch-output-name">즉시 알림</div>
            <div className="arch-output-tags">
              <span className="arch-output-tag">모바일 Push</span>
              <span className="arch-output-tag">경광등 제어</span>
            </div>
          </div>
          <div className="arch-output-item">
            <div className="arch-output-name">MES · ERP 연동</div>
            <div className="arch-output-tags">
              <span className="arch-output-tag">품질이력 자동 저장</span>
              <span className="arch-output-tag">GIVAS 연동</span>
            </div>
          </div>
        </div>
      </div>

    </div>


    <div className="arch-tech-row reveal" style={{transitionDelay:".1s"}}>
      <div className="arch-tech-card">
        <div className="arch-tech-label">AI/ML 엔진</div>
        <div className="arch-tech-items">
          <div className="arch-tech-item">YOLOv8 Object Detection</div>
          <div className="arch-tech-item">Vision Transformer (ViT)</div>
          <div className="arch-tech-item">PyTorch · TensorFlow</div>
        </div>
      </div>
      <div className="arch-tech-card">
        <div className="arch-tech-label">Edge Runtime</div>
        <div className="arch-tech-items">
          <div className="arch-tech-item">NVIDIA TensorRT 최적화</div>
          <div className="arch-tech-item">ONNX Runtime 경량화</div>
          <div className="arch-tech-item">Docker Container 배포</div>
        </div>
      </div>
      <div className="arch-tech-card">
        <div className="arch-tech-label">데이터 파이프라인</div>
        <div className="arch-tech-items">
          <div className="arch-tech-item">Kafka 이벤트 스트리밍</div>
          <div className="arch-tech-item">MQTT 경량 메시징</div>
          <div className="arch-tech-item">REST API · 자동 Cloud 적재</div>
        </div>
      </div>
      <div className="arch-tech-card">
        <div className="arch-tech-label">모니터링 · 클라우드</div>
        <div className="arch-tech-items">
          <div className="arch-tech-item">Naver Cloud Platform</div>
          <div className="arch-tech-item">Prometheus · Grafana</div>
          <div className="arch-tech-item">MLOps 자동 재학습</div>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="kpi">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">파일럿 테스트로 검증된 성능</h2>
      <p className="sec-desc">실제 제조 현장 파일럿 기반 수치 · 화학·윤활유 업종 적용 검증 완료</p>
    </div>


    <div className="kpi-hero reveal" style={{transitionDelay:".05s"}}>
      <div className="kpi-hero-card khc-green">
        <div className="kpi-hero-num">95<span className="kpi-hero-unit">%+</span></div>
        <div className="kpi-hero-label">Vision 검사 정확도</div>
        <div className="kpi-hero-sub">V-MEPS 딥러닝 불량 검출</div>
      </div>
      <div className="kpi-hero-card khc-orange">
        <div className="kpi-hero-num">3<span className="kpi-hero-unit">초</span></div>
        <div className="kpi-hero-label">안전이벤트 관리자 알림</div>
        <div className="kpi-hero-sub">화재·위험 감지 후 Push 알림</div>
      </div>
      <div className="kpi-hero-card khc-blue">
        <div className="kpi-hero-num">0.1<span className="kpi-hero-unit">s</span></div>
        <div className="kpi-hero-label">Edge 추론 속도</div>
        <div className="kpi-hero-sub">현장 즉시 불량 판정</div>
      </div>
    </div>


    <div className="kpi-speed-grid reveal" style={{transitionDelay:".1s"}}>
      <div className="kpi-speed-item">
        <div className="ksi-val">0.1초</div>
        <div className="ksi-divider"></div>
        <div>
          <div className="ksi-label">Edge 추론</div>
          <div className="ksi-sub">현장 즉시 판정</div>
        </div>
      </div>
      <div className="kpi-speed-item">
        <div className="ksi-val">200ms</div>
        <div className="ksi-divider"></div>
        <div>
          <div className="ksi-label">Cloud 전송 지연</div>
          <div className="ksi-sub">이벤트 → NCP 적재</div>
        </div>
      </div>
      <div className="kpi-speed-item">
        <div className="ksi-val">200ms</div>
        <div className="ksi-divider"></div>
        <div>
          <div className="ksi-label">대시보드 반영</div>
          <div className="ksi-sub">관리자 화면 업데이트</div>
        </div>
      </div>
    </div>


    <div className="kpi-effects reveal" style={{transitionDelay:".15s"}}>
      <div className="kpi-effects-title">도입 효과 수치 — 도입 전 · 후 비교</div>
      <div className="kpi-compare-grid">
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
          <div className="kpi-compare-sub">휴먼 에러 완전 제거 · 파일럿 현장 측정</div>
        </div>
        <div className="kpi-compare-item">
          <div className="kpi-compare-label">시간당 검사 처리량</div>
          <div className="kpi-compare-bars">
            <div className="kpi-compare-row before">
              <span className="kpi-compare-tag">전</span>
              <div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"33%"}}></div></div>
              <span className="kpi-compare-num">기준 1x</span>
            </div>
            <div className="kpi-compare-row after">
              <span className="kpi-compare-tag">후</span>
              <div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"100%"}}></div></div>
              <span className="kpi-compare-num">3배↑</span>
            </div>
          </div>
          <div className="kpi-compare-sub">동일 라인 · AI 자동화 처리량 비교</div>
        </div>
        <div className="kpi-compare-item">
          <div className="kpi-compare-label">화재 감지 대응 시간</div>
          <div className="kpi-compare-bars">
            <div className="kpi-compare-row before">
              <span className="kpi-compare-tag">전</span>
              <div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"100%"}}></div></div>
              <span className="kpi-compare-num">수 분</span>
            </div>
            <div className="kpi-compare-row after">
              <span className="kpi-compare-tag">후</span>
              <div className="kpi-compare-track"><div className="kpi-compare-fill" style={{width:"5%"}}></div></div>
              <span className="kpi-compare-num">3초</span>
            </div>
          </div>
          <div className="kpi-compare-sub">연기·불꽃 감지 → 관리자 Push 알림</div>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="effects">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">V-MEPS 도입 효과</h2>
      <p className="sec-desc">품질 · 안전 · 운영 세 가지 차원에서 실질적 변화를 만들어냅니다</p>
    </div>

    <div className="effects-grid">
      <div className="effect-card reveal" style={{transitionDelay:".05s"}}>
        <div className="effect-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <h3 className="effect-title">불량률 개선</h3>
        <p className="effect-desc">육안 검사의 휴먼 에러를 완전히 제거하고, 공정 불량률을 3.2%에서 2.3%로 개선합니다. AI는 피로도·집중력에 관계없이 동일한 성능을 유지합니다.</p>
        <span className="effect-highlight">3.2% → 2.3% 불량률</span>
      </div>
      <div className="effect-card reveal" style={{transitionDelay:".1s"}}>
        <div className="effect-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h3 className="effect-title">안전사고 예방</h3>
        <p className="effect-desc">24시간 무인 화재·안전 감시로 화학 공정 화재 골든타임을 확보합니다. 중대재해처벌법 대응 솔루션으로 법적 리스크를 선제 관리합니다.</p>
        <span className="effect-highlight">중대재해처벌법 대응</span>
      </div>
      <div className="effect-card reveal" style={{transitionDelay:".15s"}}>
        <div className="effect-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <h3 className="effect-title">인력 재배치</h3>
        <p className="effect-desc">검사 전담 인력을 라인당 1~2명 고부가 업무로 전환할 수 있습니다. 3배 빠른 검사 속도로 같은 인원으로 더 많은 물량을 처리합니다.</p>
        <span className="effect-highlight">라인당 인력 재배치 가능</span>
      </div>
      <div className="effect-card reveal" style={{transitionDelay:".2s"}}>
        <div className="effect-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        </div>
        <h3 className="effect-title">품질이력 자동화</h3>
        <p className="effect-desc">불량 판정 결과가 MES·ERP에 자동 저장되어 품질 이력 관리가 완전 자동화됩니다. 수작업 기록 오류와 누락이 완전히 없어집니다.</p>
        <span className="effect-highlight">MES · ERP 자동 연동</span>
      </div>
      <div className="effect-card reveal" style={{transitionDelay:".25s"}}>
        <div className="effect-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <h3 className="effect-title">야간 완전 자동화</h3>
        <p className="effect-desc">야간·심야 무인 운영 시에도 AI가 동일한 수준의 품질 검사와 안전 감시를 수행합니다. 심야 사각지대 문제가 완전히 해소됩니다.</p>
        <span className="effect-highlight">24시간 무인 감시</span>
      </div>
      <div className="effect-card reveal" style={{transitionDelay:".3s"}}>
        <div className="effect-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>
        </div>
        <h3 className="effect-title">지속 성능 향상</h3>
        <p className="effect-desc">운영 중 누적되는 이미지 데이터로 AI 모델이 계속 재학습됩니다. 도입 초기보다 도입 후 1~2년이 더 정확한 검사 성능을 보여줍니다.</p>
        <span className="effect-highlight">MLOps 자동 재학습</span>
      </div>
    </div>
  </div>
</section>
<div style={{height:"0"}}></div>


<section className="cta-section">
  <div className="cta-glow-right"></div>
  <div className="cta-inner reveal">
    <h2 className="cta-title">
      V-MEPS 도입이<br/><span className="cta-accent">궁금하신가요?</span>
    </h2>
    <p className="cta-desc">파일럿 테스트 완료 · 성능 검증 완료<br/>현장 실사 후 맞춤 도입 전략을 제시해 드립니다</p>
    <div className="cta-actions">
      <Link to="/contact" className="btn-cta-primary">
        V-MEPS 도입 상담 신청
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
