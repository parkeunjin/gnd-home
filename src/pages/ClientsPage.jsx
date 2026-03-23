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
      창업 이래 전방위 제조현장에서<br/>MES · QMS · PLM · AI 솔루션을 직접 구현해왔습니다
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
      <h2 className="sec-title">전방위 제조현장에서<br/>신뢰가 증명한 레퍼런스</h2>
      <p className="sec-desc">대기업부터 전문기업까지, 전방위 제조현장에서 스마트공장 구축을 실현해왔습니다</p>
    </div>

    <div className="all-clients-grid reveal" style={{transitionDelay:".06s"}}>
      <div className="ac-item"><img src="/images/clients/logo-samsung-sdi.png" alt="삼성SDI" className="limg"/><div className="ac-name">삼성SDI</div></div>
      <div className="ac-item"><img src="/images/clients/logo-samsung-heavy.png" alt="삼성중공업" className="limg"/><div className="ac-name">삼성중공업</div></div>
      <div className="ac-item"><img src="/images/clients/logo-doosan.png" alt="두산인프라코어" className="limg"/><div className="ac-name">두산인프라코어</div></div>
      <div className="ac-item"><img src="/images/clients/logo-hyundai-wia.png" alt="현대위아" className="limg"/><div className="ac-name">현대위아</div></div>
      <div className="ac-item"><img src="/images/clients/logo-hyundai-changho.png" alt="현대창호" className="limg"/><div className="ac-name">현대창호</div></div>
      <div className="ac-item"><img src="/images/clients/logo-csm-tech.png" alt="CSM Tech" className="limg"/><div className="ac-name">CSM Tech</div></div>
      <div className="ac-item"><img src="/images/clients/logo-snt.png" alt="S&amp;T중공업" className="limg"/><div className="ac-name">S&amp;T중공업</div></div>
      <div className="ac-item"><img src="/images/clients/logo-coway.png" alt="코웨이" className="limg"/><div className="ac-name">코웨이</div></div>
      <div className="ac-item"><img src="/images/clients/logo-add.png" alt="국방과학연구소" className="limg"/><div className="ac-name">국방과학연구소</div></div>
      <div className="ac-item"><img src="/images/clients/logo-daesung.png" alt="대성화학" className="limg"/><div className="ac-name">대성화학</div></div>
      <div className="ac-item"><img src="/images/clients/logo-daewon.png" alt="대원정밀" className="limg"/><div className="ac-name">대원정밀</div></div>
      <div className="ac-item"><img src="/images/clients/logo-hive.png" alt="Hive System" className="limg"/><div className="ac-name">Hive System</div></div>
      <div className="ac-item"><img src="/images/clients/logo-ket.png" alt="KET" className="limg"/><div className="ac-name">KET</div></div>
      <div className="ac-item"><img src="/images/clients/logo-vessel.png" alt="베셀" className="limg"/><div className="ac-name">베셀</div></div>
      <div className="ac-item"><img src="/images/clients/logo-changshin-official.png" alt="창신인터내셔날" className="limg"/><div className="ac-name">창신인터내셔날</div></div>
      <div className="ac-item"><img src="/images/clients/logo-neo.png" alt="네오마그네틱" className="limg"/><div className="ac-name">네오마그네틱</div></div>
      <div className="ac-item"><img src="/images/clients/logo-beeryong.png" alt="BEE-RYONG" className="limg"/><div className="ac-name">BEE-RYONG</div></div>
      <div className="ac-item"><img src="/images/clients/logo-seun.png" alt="세운산업" className="limg"/><div className="ac-name">세운산업</div></div>
      <div className="ac-item"><img src="/images/clients/logo-dongbang.png" alt="동방데이타" className="limg"/><div className="ac-name">동방데이타</div></div>
      <div className="ac-item"><img src="/images/clients/logo-moatech.png" alt="모아테크" className="limg"/><div className="ac-name">모아테크</div></div>
      <div className="ac-item"><img src="/images/clients/logo-hosan.png" alt="호산" className="limg"/><div className="ac-name">호산</div></div>
    </div>
  </div>
</section>


<section id="industry">
  <div className="container">
    <div className="sec-head-center reveal">
      <h2 className="sec-title">폭넓은 산업군 구축 경험</h2>
      <p className="sec-desc">화학·자동차·전자·방산·소비재 등<br className="pc-br"/> 전방위 제조현장에서 솔루션을 직접 구현했습니다</p>
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
