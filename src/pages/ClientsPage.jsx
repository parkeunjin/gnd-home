import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './../styles/pages/clients.css'

export default function ClientsPage() {
  useEffect(() => {
    const ro = new IntersectionObserver(es => {
      es.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target)} })
    }, { threshold: 0.06 })
    document.querySelectorAll('.reveal').forEach(el => ro.observe(el))
    return () => ro.disconnect()
  }, [])

  return (
    <>
<div className="pg-clients">
<div className="page-hero">
  <div className="grid-bg"></div>
  <div className="page-hero-inner">
    <h1 className="page-title">
      현장에서 증명한 <em>15년</em>,<br/>국내 제조 전반을 아우르는 실전 구축 역량
    </h1>
    <p className="page-desc" style={{opacity:"0",animation:"fadeUp .8s .42s ease forwards"}}>
      창업 이래 다양한 산업군의 제조 현장 곳곳에서<br/>ERP · MES · PLM · AI 솔루션을 직접 구현해왔습니다
    </p>
    <div className="hero-facts" style={{opacity:"0",animation:"fadeUp .8s .6s ease forwards"}}>
      <div className="hero-fact"><div className="hero-fact-num">2011</div><div className="hero-fact-label">창업 연도</div></div>
      <div className="hero-fact"><div className="hero-fact-num">100+</div><div className="hero-fact-label">스마트팩토리 구축</div></div>
      <div className="hero-fact"><div className="hero-fact-num">20+</div><div className="hero-fact-label">주요 고객사</div></div>
      <div className="hero-fact"><div className="hero-fact-num">15년</div><div className="hero-fact-label">현장 구축 경험</div></div>
    </div>
  </div>
</div>


<section id="clients">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">중견기업 · 전문기업<br/>신뢰가 증명한 레퍼런스</h2>
      <p className="sec-desc">다양한 산업 전반의 제조 기업과 함께 스마트공장 구축을 실현해왔습니다</p>
    </div>


    <div className="t1-grid reveal" style={{transitionDelay:".06s"}}>
      <div className="t1-item">
        <img src="/images/clients/logo-samsung-sdi.png" alt="samsung_sdi" className="limg"/>
        <div className="t1-name">삼성SDI</div>
        <div className="t1-cat">배터리 · 전자재료</div>
      </div>
      <div className="t1-item">
        <img src="/images/clients/logo-samsung-heavy.png" alt="samsung_heavy" className="limg"/>
        <div className="t1-name">삼성중공업</div>
        <div className="t1-cat">중공업 · 조선</div>
      </div>
      <div className="t1-item">
        <img src="/images/clients/logo-doosan.png" alt="doosan" className="limg"/>
        <div className="t1-name">두산인프라코어</div>
        <div className="t1-cat">건설장비 · 기계</div>
      </div>
      <div className="t1-item">
        <img src="/images/clients/logo-hyundai-wia.png" alt="hyundai_wia" className="limg"/>
        <div className="t1-name">현대위아</div>
        <div className="t1-cat">자동차 부품</div>
      </div>
    </div>


    <div className="reveal" style={{transitionDelay:".12s"}}>
      <div className="partner-header">
        <span className="partner-title">중견·전문기업 파트너</span>
        <span className="partner-line"></span>
      </div>
      <div className="p-grid">
        <div className="p-item"><img src="/images/clients/logo-csm-tech.png" alt="csm_tech" className="limg"/><div className="p-name">CSM Tech</div><div className="p-cat">설비·시스템</div></div>
        <div className="p-item"><img src="/images/clients/logo-daesung.png" alt="daesung" className="limg"/><div className="p-name">대성화학</div><div className="p-cat">화학·윤활유</div></div>
        <div className="p-item"><img src="/images/clients/logo-snt.png" alt="snt" className="limg"/><div className="p-name">S&amp;T중공업</div><div className="p-cat">중공업·방산</div></div>
        <div className="p-item"><img src="/images/clients/logo-daewon.png" alt="daewon" className="limg"/><div className="p-name">대원정밀</div><div className="p-cat">자동차부품</div></div>
        <div className="p-item"><img src="/images/clients/logo-hive.png" alt="hive" className="limg"/><div className="p-name">Hive System</div><div className="p-cat">전자·시스템</div></div>
        <div className="p-item"><img src="/images/clients/logo-coway.png" alt="coway" className="limg"/><div className="p-name">코웨이</div><div className="p-cat">소비재·생활</div></div>
        <div className="p-item"><img src="/images/clients/logo-vessel.png" alt="vessel" className="limg"/><div className="p-name">베셀</div><div className="p-cat">소비재·유통</div></div>
        <div className="p-item"><img src="/images/clients/logo-changshin-official.png" alt="changshin" className="limg"/><div className="p-name">창신인터내셔날</div><div className="p-cat">금속·정밀</div></div>
        <div className="p-item"><img src="/images/clients/logo-add.png" alt="add" className="limg"/><div className="p-name">국방과학연구소</div><div className="p-cat">방산·연구</div></div>
        <div className="p-item"><img src="/images/clients/logo-neo.png" alt="neo" className="limg"/><div className="p-name">네오마그네틱</div><div className="p-cat">설비·자동화</div></div>
        <div className="p-item"><img src="/images/clients/logo-beeryong.png" alt="bee_ryong" className="limg"/><div className="p-name">BEE-RYONG</div><div className="p-cat">금속·가공</div></div>
        <div className="p-item"><img src="/images/clients/logo-seun.png" alt="seun" className="limg"/><div className="p-name">세운산업</div><div className="p-cat">금속·정밀</div></div>
        <div className="p-item"><img src="/images/clients/logo-hyundai-changho.png" alt="hyundai_changho" className="limg"/><div className="p-name">현대창호</div><div className="p-cat">소비재·건자재</div></div>
        <div className="p-item"><img src="/images/clients/logo-dongbang.png" alt="dongbang" className="limg"/><div className="p-name">동방데이타</div><div className="p-cat">IT·데이터</div></div>
        <div className="p-item"><img src="/images/clients/logo-moatech.png" alt="moatech" className="limg"/><div className="p-name">모아테크</div><div className="p-cat">자동화·기계</div></div>
      </div>
    </div>
  </div>
</section>


<section id="industry">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">폭넓은 산업군 구축 경험</h2>
      <p className="sec-desc">화학·자동차·전자·방산·소비재 등<br className="pc-br"/> 다양한 제조 현장에서 솔루션을 직접 구현했습니다</p>
    </div>
    <div className="industry-grid reveal" style={{transitionDelay:".06s"}}>

      <div className="industry-card">
        <div className="industry-card-bg" style={{backgroundImage:"url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&q=70&fit=crop')"}}></div>

        <svg className="industry-bg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M9 3v8L5.5 17A2 2 0 007.3 20h9.4a2 2 0 001.8-3L15 11V3"/><line x1="9" y1="3" x2="15" y2="3"/></svg>
        <div className="industry-card-content">
          <div className="industry-count">8<span className="industry-count-unit">+</span></div>
          <div className="industry-name">화학 · 윤활유</div>
          <div className="industry-clients">대성화학 등<br/>GIVAS AI 특화 적용</div>
        </div>
      </div>

      <div className="industry-card">
        <div className="industry-card-bg" style={{backgroundImage:"url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=70&fit=crop')"}}></div>
        <svg className="industry-bg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h2"/><path d="M19 17h2a2 2 0 002-2V9a2 2 0 00-2-2h-2"/><rect x="5" y="5" width="14" height="14" rx="2"/><circle cx="12" cy="12" r="3"/></svg>
        <div className="industry-card-content">
          <div className="industry-count">20<span className="industry-count-unit">+</span></div>
          <div className="industry-name">자동차 · 기계</div>
          <div className="industry-clients">현대위아 · 대원정밀<br/>ERP · MES · PLM 통합</div>
        </div>
      </div>

      <div className="industry-card">
        <div className="industry-card-bg" style={{backgroundImage:"url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=70&fit=crop')"}}></div>
        <svg className="industry-bg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 6V4M10 6V4M14 6V4M18 6V4M6 18v2M10 18v2M14 18v2M18 18v2M2 12h20"/></svg>
        <div className="industry-card-content">
          <div className="industry-count">15<span className="industry-count-unit">+</span></div>
          <div className="industry-name">전자 · 배터리</div>
          <div className="industry-clients">삼성SDI · Hive System<br/>스마트공장 고도화</div>
        </div>
      </div>

      <div className="industry-card">
        <div className="industry-card-bg" style={{backgroundImage:"url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=70&fit=crop')"}}></div>
        <svg className="industry-bg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        <div className="industry-card-content">
          <div className="industry-count">10<span className="industry-count-unit">+</span></div>
          <div className="industry-name">방산 · 중공업</div>
          <div className="industry-clients">국방과학연구소 · 두산<br/>PLM · MES 전문 구축</div>
        </div>
      </div>

      <div className="industry-card">
        <div className="industry-card-bg" style={{backgroundImage:"url('https://images.unsplash.com/photo-1565957163532-c6cebe5c62c2?w=600&q=70&fit=crop')"}}></div>
        <svg className="industry-bg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
        <div className="industry-card-content">
          <div className="industry-count">12<span className="industry-count-unit">+</span></div>
          <div className="industry-name">금속 · 정밀가공</div>
          <div className="industry-clients">서진금속 · 태선 · 창신<br/>IoT · FA 연동 시스템</div>
        </div>
      </div>

      <div className="industry-card">
        <div className="industry-card-bg" style={{backgroundImage:"url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=70&fit=crop')"}}></div>
        <svg className="industry-bg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
        <div className="industry-card-content">
          <div className="industry-count">8<span className="industry-count-unit">+</span></div>
          <div className="industry-name">소비재 · 생활용품</div>
          <div className="industry-clients">코웨이 · 베셀<br/>품질관리 · SPC 시스템</div>
        </div>
      </div>

      <div className="industry-card">
        <div className="industry-card-bg" style={{backgroundImage:"url('https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=600&q=70&fit=crop')"}}></div>
        <svg className="industry-bg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M12 2v2M12 20v2M2 12h2M20 12h2M17.66 17.66l-1.41-1.41M6.34 17.66l1.41-1.41"/></svg>
        <div className="industry-card-content">
          <div className="industry-count">10<span className="industry-count-unit">+</span></div>
          <div className="industry-name">설비 · 시스템</div>
          <div className="industry-clients">CSM Tech · 네오마그네틱<br/>설비관리 · 금형관리</div>
        </div>
      </div>

      <div className="industry-card">
        <div className="industry-card-bg" style={{backgroundImage:"url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=70&fit=crop')"}}></div>
        <svg className="industry-bg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M12 11V7"/><circle cx="12" cy="5" r="2"/><path d="M7 15h2M15 15h2M7 18h2M15 18h2"/></svg>
        <div className="industry-card-content">
          <div className="industry-count">5<span className="industry-count-unit">+</span></div>
          <div className="industry-name">로봇 · 자동화</div>
          <div className="industry-clients">협동로봇 · AGV 연동<br/>R-MEPS AI 제어 솔루션</div>
        </div>
      </div>

    </div>
  </div>
</section>


<section id="timeline">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">2011년부터 현재까지<br/>구축으로 증명한 15년의 여정</h2>
      <p className="sec-desc">스마트공장 구축에서 AI 솔루션으로 진화한 지엔디비즈의 역사</p>
    </div>

    <div className="timeline-body">


      <div className="tl-row current reveal" style={{transitionDelay:".04s"}}>
        <div className="tl-yr-col">
          <span className="tl-year">2026</span>
          <div className="tl-dot"></div>
        </div>
        <div className="tl-content">
          <div className="tl-in-progress"><span className="tl-in-progress-dot"></span>진행 중</div>
          <div className="tl-cards">
            <div className="tl-card">
              <div className="tl-txt"><strong>AI 플랫폼 통합 고도화</strong> — GIVAS · V-MEPS · R-MEPS 3개 솔루션 연동 확산 진행</div>
              <span className="tl-tag tl-tag-current">진행중</span>
            </div>
            <div className="tl-card">
              <div className="tl-txt">중소기업 디지털 전환 지원사업 파트너로 <strong>신규 고객사 지속 확장</strong></div>
              <span className="tl-tag tl-tag-default">확장</span>
            </div>
          </div>
        </div>
      </div>


      <div className="tl-row hl reveal" style={{transitionDelay:".07s"}}>
        <div className="tl-yr-col">
          <span className="tl-year">2024</span>
          <div className="tl-dot"></div>
        </div>
        <div className="tl-content">
          <div className="tl-cards">
            <div className="tl-card">
              <div className="tl-txt"><strong>R-MEPS 협동로봇·AGV 연동 AI 제어 솔루션</strong> 상용화 출시 — 로봇 자동화 신시장 진입</div>
              <span className="tl-tag tl-tag-rd">R&amp;D</span>
            </div>
            <div className="tl-card">
              <div className="tl-txt"><strong>V-MEPS 비전 품질검사 플랫폼</strong> 다수 현장 양산 적용 — 불량률 <strong>40% 이상 감소</strong> 실증</div>
              <span className="tl-tag tl-tag-rd">R&amp;D</span>
            </div>
          </div>
        </div>
      </div>


      <div className="tl-row hl2 reveal" style={{transitionDelay:".10s"}}>
        <div className="tl-yr-col">
          <span className="tl-year">2022</span>
          <div className="tl-dot"></div>
        </div>
        <div className="tl-content">
          <div className="tl-cards">
            <div className="tl-card">
              <div className="tl-txt"><strong>GIVAS AI 이상감지 플랫폼 출시</strong> — 화학·금속 업종 특화, 이상 감지 정확도 <strong>95% 이상</strong></div>
              <span className="tl-tag tl-tag-rd">R&amp;D</span>
            </div>
            <div className="tl-card">
              <div className="tl-txt">스마트공장 구축 누적 <strong>100개사 돌파</strong> — 제조 전문 SI에서 AI 솔루션 기업으로 전환</div>
              <span className="tl-tag tl-tag-milestone">마일스톤</span>
            </div>
          </div>
        </div>
      </div>


      <div className="tl-row hl reveal" style={{transitionDelay:".13s"}}>
        <div className="tl-yr-col">
          <span className="tl-year">2020</span>
          <div className="tl-dot"></div>
        </div>
        <div className="tl-content">
          <div className="tl-cards">
            <div className="tl-card">
              <div className="tl-txt"><strong>언택트 원격 구축·유지보수 체계</strong> 자체 확립 — 코로나 상황에서도 구축 무중단 유지</div>
              <span className="tl-tag tl-tag-default">혁신</span>
            </div>
            <div className="tl-card">
              <div className="tl-txt">중소벤처기업부 <strong>스마트제조혁신 지원사업</strong> 공식 파트너 선정 — 정부 보급사업 참여</div>
              <span className="tl-tag tl-tag-default">인증</span>
            </div>
          </div>
        </div>
      </div>


      <div className="tl-row hl reveal" style={{transitionDelay:".16s"}}>
        <div className="tl-yr-col">
          <span className="tl-year">2018</span>
          <div className="tl-dot"></div>
        </div>
        <div className="tl-content">
          <div className="tl-cards">
            <div className="tl-card">
              <div className="tl-txt">연간 <strong>최다 8개사 스마트공장 동시 구축</strong> 완료 — 창사 이래 역대 최다 연간 실적</div>
              <span className="tl-tag tl-tag-default">최다 실적</span>
            </div>
            <div className="tl-card">
              <div className="tl-txt"><strong>대한민국 기업대상 ICT 스마트팩토리 부문 수상</strong> — 머니투데이 주최, 기술력 공식 인정</div>
              <span className="tl-tag tl-tag-award">수상</span>
            </div>
            <div className="tl-card">
              <div className="tl-txt">KOSF <strong>스마트팩토리 전문공급기업 인증</strong> 획득 — 중소벤처기업부 공식 등록</div>
              <span className="tl-tag tl-tag-default">인증</span>
            </div>
          </div>
        </div>
      </div>


      <div className="tl-row hl reveal" style={{transitionDelay:".19s"}}>
        <div className="tl-yr-col">
          <span className="tl-year">2017</span>
          <div className="tl-dot"></div>
        </div>
        <div className="tl-content">
          <div className="tl-cards">
            <div className="tl-card">
              <div className="tl-txt"><strong>연간 10개사 스마트공장 구축</strong> — 세운산업 · 현대창호 · 동방데이타 · 대성화학 등 다양한 업종 확장</div>
              <span className="tl-tag tl-tag-default">10개사</span>
            </div>
            <div className="tl-card">
              <div className="tl-txt">IoT 센서 연동 및 <strong>실시간 데이터 수집 시스템</strong> 자체 구축 역량 확보 — 스마트공장 2단계 도입</div>
              <span className="tl-tag tl-tag-rd">기술</span>
            </div>
          </div>
        </div>
      </div>


      <div className="tl-row hl reveal" style={{transitionDelay:".22s"}}>
        <div className="tl-yr-col">
          <span className="tl-year">2016</span>
          <div className="tl-dot"></div>
        </div>
        <div className="tl-content">
          <div className="tl-cards">
            <div className="tl-card">
              <div className="tl-txt"><strong>연간 8개사 스마트공장 구축</strong> — 서진금속 · 태선 · CSM Tech · S&amp;T중공업 · 모아테크 등</div>
              <span className="tl-tag tl-tag-default">8개사</span>
            </div>
            <div className="tl-card">
              <div className="tl-txt">제조 현장 <strong>MES·ERP 완전 연동 통합 솔루션</strong> 패키지화 — 표준 구축 모델 완성</div>
              <span className="tl-tag tl-tag-rd">기술</span>
            </div>
          </div>
        </div>
      </div>


      <div className="tl-row hl reveal" style={{transitionDelay:".25s"}}>
        <div className="tl-yr-col">
          <span className="tl-year">2015</span>
          <div className="tl-dot"></div>
        </div>
        <div className="tl-content">
          <div className="tl-cards">
            <div className="tl-card">
              <div className="tl-txt"><strong>ERPDM 2.0 자체 개발</strong> 완료 — 기존 대비 처리속도 3배 향상, 모바일 연동 지원</div>
              <span className="tl-tag tl-tag-rd">R&amp;D</span>
            </div>
            <div className="tl-card">
              <div className="tl-txt">서울산업진흥원(SBA) <strong>공식 입주기업</strong> 선정 · PLM 유지보수 다수 고객사 동시 수행</div>
              <span className="tl-tag tl-tag-default">선정</span>
            </div>
          </div>
        </div>
      </div>


      <div className="tl-row hl reveal" style={{transitionDelay:".28s"}}>
        <div className="tl-yr-col">
          <span className="tl-year">2014</span>
          <div className="tl-dot"></div>
        </div>
        <div className="tl-content">
          <div className="tl-cards">
            <div className="tl-card">
              <div className="tl-txt"><strong>기업부설연구소 인증</strong> 획득 · 벤처기업 공식 등록 — R&amp;D 전문기업 토대 완성</div>
              <span className="tl-tag tl-tag-rd">R&amp;D</span>
            </div>
            <div className="tl-card">
              <div className="tl-txt"><strong>ERPDM 자체 특허 출원</strong> 완료 — 국내 유일 ERP·DM 통합 솔루션 IP 확보</div>
              <span className="tl-tag tl-tag-default">특허</span>
            </div>
            <div className="tl-card">
              <div className="tl-txt">연간 구축사 <strong>5개사 돌파</strong> — 금속·화학·전자 등 다업종 동시 수행 역량 입증</div>
              <span className="tl-tag tl-tag-default">성장</span>
            </div>
          </div>
        </div>
      </div>


      <div className="tl-row hl reveal" style={{transitionDelay:".31s"}}>
        <div className="tl-yr-col">
          <span className="tl-year">2013</span>
          <div className="tl-dot"></div>
        </div>
        <div className="tl-content">
          <div className="tl-cards">
            <div className="tl-card">
              <div className="tl-txt"><strong>국내 대형 중공업사 PLM 컨설팅</strong> 수행 · 계약 연장 성사 — 장기 파트너십 구조 확립</div>
              <span className="tl-tag tl-tag-partner">장기계약</span>
            </div>
            <div className="tl-card">
              <div className="tl-txt">배터리 제조사 PLM <strong>고도화 프로젝트</strong> 완료 — 데이터 일원화로 설계 리드타임 <strong>30% 단축</strong></div>
              <span className="tl-tag tl-tag-partner">고도화</span>
            </div>
          </div>
        </div>
      </div>


      <div className="tl-row hl reveal" style={{transitionDelay:".34s"}}>
        <div className="tl-yr-col">
          <span className="tl-year">2012</span>
          <div className="tl-dot"></div>
        </div>
        <div className="tl-content">
          <div className="tl-cards">
            <div className="tl-card">
              <div className="tl-txt"><strong>배터리·조선 분야 PLM 대규모 구축</strong> — 창업 2년차에 대형 제조사 레퍼런스 확보</div>
              <span className="tl-tag tl-tag-partner">첫 대형계약</span>
            </div>
            <div className="tl-card">
              <div className="tl-txt"><strong>자동차·건설장비 분야 ERP · MES 구축</strong> 동시 수행 — 멀티 업종 동시 대응 역량 첫 증명</div>
              <span className="tl-tag tl-tag-partner">멀티업종</span>
            </div>
          </div>
        </div>
      </div>


      <div className="tl-row hl2 reveal" style={{transitionDelay:".37s"}}>
        <div className="tl-yr-col">
          <span className="tl-year">2011</span>
          <div className="tl-dot"></div>
        </div>
        <div className="tl-content">
          <div className="tl-cards">
            <div className="tl-card">
              <div className="tl-txt"><strong>지엔디비즈 창업</strong> — 제조 현장 전문가 중심으로 설립 · 美 GRANTA Business와 MOU 체결로 글로벌 파트너십 확보</div>
              <span className="tl-tag tl-tag-default">창립</span>
            </div>
            <div className="tl-card">
              <div className="tl-txt">국내 주요 제조사 <strong>PLM 파트너</strong>로 첫 사업 시작 — 창업 첫 해 <strong>2개사 동시 구축</strong> 성공</div>
              <span className="tl-tag tl-tag-partner">첫 계약</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<section className="cta-section">
  <div className="cta-section-grid"></div>
  <div className="cta-section-inner">
    <h2 className="cta-section-title">레퍼런스가 증명하는<br/><em>현장 중심의 기술력</em></h2>
    <p className="cta-section-desc">스마트공장 구축부터 AI 솔루션 도입까지,<br/>지엔디비즈와 함께 시작하세요</p>
    <div className="cta-section-actions">
      <Link to="/contact" className="btn-primary">
        구축 상담 신청
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
      <Link to="/ai/platform" className="btn-ghost">
        AI 솔루션 보기
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
    </div>
  </div>
</section>


</div>
    </>
  )
}
