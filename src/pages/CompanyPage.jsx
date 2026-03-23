import { useEffect } from 'react'
import './../styles/pages/company.css'

export default function CompanyPage() {
  useEffect(() => {
    const awardImages = [
      "/images/company/cert-01.jpg",
      "/images/company/cert-02.jpg",
      "/images/company/cert-03.jpg",
      "/images/company/cert-04.jpg",
      "/images/company/cert-05.jpg",
      "/images/company/cert-06.jpg",
      "/images/company/cert-sports-seoul.jpg",
      "/images/company/award-2018.jpg"
    ]

    // 인증서 갤러리 그리드
    const gallery = document.getElementById('cert-gallery')
    if (gallery) {
      gallery.innerHTML = ''
      awardImages.forEach((src, i) => {
        const d = document.createElement('div')
        d.className = 'cert-gallery-card'
        d.dataset.idx = String(i)
        d.innerHTML = `<img src="${src}" alt="인증서 ${i+1}" loading="lazy"/>` +
          `<div class="cert-gallery-ov">` +
          `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(96,165,250,1)" stroke-width="2">` +
          `<circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="22" y2="22"/>` +
          `<line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>` +
          `</div>`
        gallery.appendChild(d)
      })
    }

    // 라이트박스
    let lbIdx = 0
    const lb = document.getElementById('lightbox')
    const lbImg = document.getElementById('lb-img')
    const lbCnt = document.getElementById('lb-counter')
    function openLb(idx) {
      lbIdx = ((idx % awardImages.length) + awardImages.length) % awardImages.length
      if(lbImg) lbImg.src = awardImages[lbIdx]
      if(lbCnt) lbCnt.textContent = (lbIdx+1)+' / '+awardImages.length
      if(lb){lb.classList.add('open');document.body.style.overflow='hidden'}
    }
    function closeLb(){if(lb)lb.classList.remove('open');document.body.style.overflow=''}
    function moveLb(d){lbIdx=(lbIdx+d+awardImages.length)%awardImages.length;if(lbImg)lbImg.src=awardImages[lbIdx];if(lbCnt)lbCnt.textContent=(lbIdx+1)+' / '+awardImages.length}
    if(gallery) gallery.addEventListener('click', e => { const c=e.target.closest('.cert-gallery-card');if(c)openLb(+c.dataset.idx) })
    const lbClose=document.getElementById('lb-close')
    const lbPrev=document.getElementById('lb-prev')
    const lbNext=document.getElementById('lb-next')
    if(lbClose) lbClose.addEventListener('click',closeLb)
    if(lbPrev) lbPrev.addEventListener('click',()=>moveLb(-1))
    if(lbNext) lbNext.addEventListener('click',()=>moveLb(1))
    if(lb) lb.addEventListener('click',e=>{if(e.target===lb)closeLb()})
    const lbKey=e=>{if(!lb?.classList.contains('open'))return;if(e.key==='Escape')closeLb();if(e.key==='ArrowLeft')moveLb(-1);if(e.key==='ArrowRight')moveLb(1)}
    document.addEventListener('keydown',lbKey)

    // 플립북
    const fbPages=[{spread:0,side:'L'},{spread:0,side:'R'},{spread:1,side:'L'},{spread:1,side:'R'},{spread:2,side:'L'},{spread:2,side:'R'},{spread:3,side:'L'},{spread:3,side:'R'},{spread:4,side:'L'}]
    let fbSpread=0,fbMobIdx=0
    const isMob=()=>window.innerWidth<=900
    function allHide(){document.querySelectorAll('.fb-page').forEach(p=>p.style.display='none')}
    function showSpread(n){allHide();const lp=document.querySelector(`.fb-page[data-spread="${n}"][data-side="L"]`);const rp=document.querySelector(`.fb-page[data-spread="${n}"][data-side="R"]`);if(lp){lp.style.display='block';lp.style.gridColumn='1'}if(rp){rp.style.display='block';rp.style.gridColumn='2'}}
    function showMob(idx){allHide();const p=fbPages[idx];const el=document.querySelector(`.fb-page[data-spread="${p.spread}"][data-side="${p.side}"]`);if(el){el.style.display='block';el.style.gridColumn='1 / span 2'}}
    function updateDots(n){document.querySelectorAll('.fb-dot').forEach((d,i)=>d.classList.toggle('active',i===n))}
    function goTo(n){if(isMob()){fbMobIdx=Math.max(0,Math.min(fbPages.length-1,n));showMob(fbMobIdx);updateDots(Math.floor(fbMobIdx/2))}else{fbSpread=Math.max(0,Math.min(5,n));showSpread(fbSpread);updateDots(fbSpread)}}
    function fbNext(){if(isMob()){if(fbMobIdx<fbPages.length-1)goTo(fbMobIdx+1)}else{if(fbSpread<5)goTo(fbSpread+1)}}
    function fbPrev(){if(isMob()){if(fbMobIdx>0)goTo(fbMobIdx-1)}else{if(fbSpread>0)goTo(fbSpread-1)}}
    showSpread(0)
    const fcl=document.getElementById('fb-click-l');const fcr=document.getElementById('fb-click-r')
    if(fcl)fcl.addEventListener('click',fbPrev);if(fcr)fcr.addEventListener('click',fbNext)
    const fprev=document.getElementById('fb-prev');const fnext=document.getElementById('fb-next')
    if(fprev)fprev.addEventListener('click',fbPrev);if(fnext)fnext.addEventListener('click',fbNext)
    document.querySelectorAll('.fb-dot').forEach((d,i)=>d.addEventListener('click',()=>goTo(i)))
    const onResize=()=>{if(isMob())showMob(fbMobIdx);else showSpread(fbSpread)}
    window.addEventListener('resize',onResize)

    // 전체화면 플립북 — 한 페이지씩 표시
    const fbFullbtn=document.getElementById('fb-fullbtn')
    const fbOverlay=document.getElementById('fb-overlay')
    const fbOverlayBook=document.getElementById('fb-overlay-book')
    const fbOverlayClose=document.getElementById('fb-overlay-close')
    const fbOvPrev=document.getElementById('fb-ov-prev')
    const fbOvNext=document.getElementById('fb-ov-next')
    const fbOvCounter=document.getElementById('fb-ov-counter')

    // 전체 페이지 목록 (spread×side 순서대로 펼치기)
    const allPages=[
      {spread:0,side:'L'},{spread:0,side:'R'},
      {spread:1,side:'L'},{spread:1,side:'R'},
      {spread:2,side:'L'},{spread:2,side:'R'},
      {spread:3,side:'L'},{spread:3,side:'R'},
      {spread:4,side:'L'},{spread:5,side:'L'}
    ]
    let ovPageIdx=0

    function buildOverlayPages(){
      if(!fbOverlayBook)return
      fbOverlayBook.innerHTML=''
      allPages.forEach((p,i)=>{
        const orig=document.querySelector(`.fb-page[data-spread="${p.spread}"][data-side="${p.side}"]`)
        const wrap=document.createElement('div')
        wrap.className='fb-ov-single'
        wrap.dataset.idx=String(i)
        wrap.style.display='none'
        if(orig){
          const origImg=orig.querySelector('img')
          if(origImg){
            const img=document.createElement('img')
            img.src=origImg.src
            img.alt=origImg.alt||''
            img.loading='lazy'
            wrap.appendChild(img)
          } else {
            const inner=orig.querySelector('.ending-inner')
            if(inner){wrap.appendChild(inner.cloneNode(true));wrap.classList.add('fb-ov-ending')}
          }
        }
        fbOverlayBook.appendChild(wrap)
      })
    }

    function updateOvCounter(){
      if(fbOvCounter)fbOvCounter.textContent=(ovPageIdx+1)+' / '+allPages.length
    }
    function showOvPage(n){
      ovPageIdx=Math.max(0,Math.min(allPages.length-1,n))
      document.querySelectorAll('.fb-ov-single').forEach((el,i)=>{
        el.style.display=i===ovPageIdx?'flex':'none'
      })
      updateOvCounter()
      if(fbOvPrev)fbOvPrev.style.opacity=ovPageIdx===0?'0.3':'1'
      if(fbOvNext)fbOvNext.style.opacity=ovPageIdx===allPages.length-1?'0.3':'1'
    }
    function openOverlay(){
      buildOverlayPages()
      // 현재 보고 있는 spread의 첫 페이지부터 시작
      ovPageIdx=fbSpread*2
      if(fbOverlay){fbOverlay.classList.add('open');document.body.style.overflow='hidden'}
      showOvPage(ovPageIdx)
    }
    function closeOverlay(){if(fbOverlay)fbOverlay.classList.remove('open');document.body.style.overflow=''}

    // 키보드 네비게이션
    const ovKey=e=>{
      if(!fbOverlay?.classList.contains('open'))return
      if(e.key==='Escape')closeOverlay()
      if(e.key==='ArrowLeft'||e.key==='ArrowUp')showOvPage(ovPageIdx-1)
      if(e.key==='ArrowRight'||e.key==='ArrowDown')showOvPage(ovPageIdx+1)
    }
    document.addEventListener('keydown',ovKey)

    if(fbFullbtn)fbFullbtn.addEventListener('click',openOverlay)
    if(fbOverlayClose)fbOverlayClose.addEventListener('click',closeOverlay)
    if(fbOvPrev)fbOvPrev.addEventListener('click',()=>showOvPage(ovPageIdx-1))
    if(fbOvNext)fbOvNext.addEventListener('click',()=>showOvPage(ovPageIdx+1))
    if(fbOverlay)fbOverlay.addEventListener('click',e=>{if(e.target===fbOverlay)closeOverlay()})

    // 인증 아코디언
    document.querySelectorAll('.cert-ac-item').forEach(item => {
      const head = item.querySelector('.cert-ac-head')
      const toggle = item.querySelector('.cert-ac-toggle')
      if(!head) return
      head.addEventListener('click', () => {
        const isOpen = item.classList.toggle('open')
        if(toggle) toggle.textContent = isOpen ? '닫기 −' : '사진 보기 +'
      })
    })

    // Reveal
    const ro=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target)}})},{threshold:0.05})
    document.querySelectorAll('.reveal').forEach(el=>ro.observe(el))

    return()=>{document.removeEventListener('keydown',lbKey);window.removeEventListener('resize',onResize);ro.disconnect()}
  },[])

  return (
    <>
<div className="pg-company">

  {/* ── Hero (다른 페이지와 동일한 구조) ── */}
  <div className="page-hero">
    <div className="grid-bg"></div>
    <div className="page-hero-inner">
      <h1 className="page-title">
        우리는 공장 바닥을 알고,<br/><em>코드로 문제를 해결합니다</em>
      </h1>
      <p className="page-desc">
        15년 동안 대한민국 제조 현장에서 쌓은 경험은 어떤 교과서에도 없습니다.<br/>
        그 경험이 지엔디비즈의 코드 한 줄, 설계 한 장에 담겨 있습니다.
      </p>
      <div className="company-hero-pillars">
        <div className="company-hero-pillar">
          <span className="chp-word">현장</span>
          <span className="chp-desc">이론이 아닌 바닥에서 만든 솔루션</span>
        </div>
        <div className="company-hero-pillar">
          <span className="chp-word">맞춤</span>
          <span className="chp-desc">귀사 공장에만 딱 맞게 설계</span>
        </div>
        <div className="company-hero-pillar">
          <span className="chp-word">책임</span>
          <span className="chp-desc">납품 이후에도 함께하는 파트너십</span>
        </div>
        <div className="company-hero-pillar">
          <span className="chp-word">진화</span>
          <span className="chp-desc">AI로 계속 고도화되는 플랫폼</span>
        </div>
      </div>
    </div>
  </div>

  {/* ── 핵심 원칙 (PRINCIPLES) ── */}
  <section className="sec-principles">
    <div className="container">
      <div className="sec-head-center reveal">
        <h2 className="sec-title">우리가 지키는 원칙</h2>
        <p className="sec-desc">모든 프로젝트, 모든 코드, 모든 현장에서<br/>변하지 않는 지엔디비즈의 기준입니다</p>
      </div>
      <div className="principles-grid">
        <div className="principle-card reveal" style={{transitionDelay:".05s"}}>
          <div className="pc-num-big">01</div>
          <h3 className="pc-title">현장 최우선</h3>
          <p className="pc-desc">이론보다 현장을 먼저 봅니다. 도입 전 반드시 현장을 직접 방문하고, 실제 작업자의 흐름을 기반으로 시스템을 설계합니다.</p>
        </div>
        <div className="principle-card reveal" style={{transitionDelay:".1s"}}>
          <div className="pc-num-big">02</div>
          <h3 className="pc-title">책임 있는 납기</h3>
          <p className="pc-desc">약속한 일정을 지킵니다. 25년 경력 전담 QA가 직접 투입되며, 장애 발생 시 7단계 복구 프로세스로 최단 시간 내 복구를 보장합니다.</p>
        </div>
        <div className="principle-card reveal" style={{transitionDelay:".15s"}}>
          <div className="pc-num-big">03</div>
          <h3 className="pc-title">맞춤 개발 원칙</h3>
          <p className="pc-desc">범용 패키지를 강요하지 않습니다. 기업의 업종·규모·프로세스에 맞는 기능만 개발하고, 불필요한 기능으로 복잡성을 높이지 않습니다.</p>
        </div>
        <div className="principle-card reveal" style={{transitionDelay:".2s"}}>
          <div className="pc-num-big">04</div>
          <h3 className="pc-title">데이터 기반 성장</h3>
          <p className="pc-desc">감이 아닌 데이터로 판단합니다. 구축 후에도 KPI 모니터링을 통해 도입 효과를 수치로 증명하고, 지속적인 개선을 지원합니다.</p>
        </div>
      </div>
    </div>
  </section>

  {/* ── 협업 방식 (HOW WE WORK) ── */}
  <section className="sec-howwework">
    <div className="container">
      <div className="sec-head-center reveal">
        <h2 className="sec-title">우리의 협업 방식</h2>
        <p className="sec-desc">프로젝트 시작부터 운영까지,<br/>지엔디비즈는 파트너로서 함께합니다</p>
      </div>
      <div className="hww-track">
        <div className="hww-card hww-card-1 reveal" style={{transitionDelay:".05s"}}>
          <div className="hww-num">01</div>
          <div className="hww-phase">DISCOVER</div>
          <h3 className="hww-title">현장 분석 · 진단</h3>
          <p className="hww-desc">직접 현장을 방문해 생산 흐름, 데이터 구조, 병목 구간을 파악합니다. 현장 진단 리포트를 무상으로 제공합니다.</p>
        </div>
        <div className="hww-arrow reveal" style={{transitionDelay:".1s"}}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
        </div>
        <div className="hww-card hww-card-2 reveal" style={{transitionDelay:".15s"}}>
          <div className="hww-num">02</div>
          <div className="hww-phase">DESIGN</div>
          <h3 className="hww-title">맞춤 설계 · 프로토타이핑</h3>
          <p className="hww-desc">실제 현장 작업자의 동선에 맞춰 UI·UX를 설계합니다. 프로토타입 단계에서 충분한 피드백을 반영합니다.</p>
        </div>
        <div className="hww-arrow reveal" style={{transitionDelay:".2s"}}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
        </div>
        <div className="hww-card hww-card-3 reveal" style={{transitionDelay:".25s"}}>
          <div className="hww-num">03</div>
          <div className="hww-phase">BUILD</div>
          <h3 className="hww-title">개발 · 통합 · 테스트</h3>
          <p className="hww-desc">자체 개발팀과 25년 경력 QA가 함께 품질을 보장합니다. ERP·PLC·IoT 연동 전체 시스템 통합 테스트를 실시합니다.</p>
        </div>
        <div className="hww-arrow reveal" style={{transitionDelay:".3s"}}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
        </div>
        <div className="hww-card hww-card-4 reveal" style={{transitionDelay:".35s"}}>
          <div className="hww-num">04</div>
          <div className="hww-phase">GROW</div>
          <h3 className="hww-title">운영 · 고도화 · AI 전환</h3>
          <p className="hww-desc">납품으로 끝나지 않습니다. 데이터 축적 후 GIVAS AI 연동으로 예지보전·이상탐지 자동화로 진화시킵니다.</p>
        </div>
      </div>
    </div>
  </section>

  {/* ── 인증 · 수상 섹션 ── */}
  <section className="sec-cert-new">
    <div className="container">

      <div className="cert-section-head reveal">
        <h2 className="cert-section-title">인증 및 수상</h2>
        <p className="cert-section-sub">기술력이 공식으로 인정받은 기록입니다</p>
      </div>

      <div className="cert-row-list reveal" style={{transitionDelay:".08s"}}>

        <div className="cert-row-item" onClick={e=>{ const b=document.getElementById('lb-img'); const c=document.getElementById('lb-counter'); const lb=document.getElementById('lightbox'); if(b)b.src='/images/company/cert-01.jpg'; if(c)c.textContent='ISO 9001 품질경영시스템'; if(lb){lb.classList.add('open');document.body.style.overflow='hidden'} }}>
          <div className="cert-row-left">
            <span className="cert-row-cat">인증</span>
            <span className="cert-row-name">ISO 9001 품질경영시스템</span>
            <span className="cert-row-org">국제 품질경영 표준 인증</span>
          </div>
          <span className="cert-row-view">사진 보기</span>
        </div>

        <div className="cert-row-item" onClick={e=>{ const b=document.getElementById('lb-img'); const c=document.getElementById('lb-counter'); const lb=document.getElementById('lightbox'); if(b)b.src='/images/company/cert-02.jpg'; if(c)c.textContent='벤처기업 인증'; if(lb){lb.classList.add('open');document.body.style.overflow='hidden'} }}>
          <div className="cert-row-left">
            <span className="cert-row-cat">인증</span>
            <span className="cert-row-name">벤처기업 인증</span>
            <span className="cert-row-org">중소벤처기업부</span>
          </div>
          <span className="cert-row-view">사진 보기</span>
        </div>

        <div className="cert-row-item" onClick={e=>{ const b=document.getElementById('lb-img'); const c=document.getElementById('lb-counter'); const lb=document.getElementById('lightbox'); if(b)b.src='/images/company/cert-03.jpg'; if(c)c.textContent='KOSF 스마트팩토리 전문공급기업'; if(lb){lb.classList.add('open');document.body.style.overflow='hidden'} }}>
          <div className="cert-row-left">
            <span className="cert-row-cat">인증</span>
            <span className="cert-row-name">KOSF 스마트팩토리 전문공급기업</span>
            <span className="cert-row-org">스마트제조혁신추진단</span>
          </div>
          <span className="cert-row-view">사진 보기</span>
        </div>

        <div className="cert-row-item" onClick={e=>{ const b=document.getElementById('lb-img'); const c=document.getElementById('lb-counter'); const lb=document.getElementById('lightbox'); if(b)b.src='/images/company/award-2018.jpg'; if(c)c.textContent='중소벤처기업부 장관상'; if(lb){lb.classList.add('open');document.body.style.overflow='hidden'} }}>
          <div className="cert-row-left">
            <span className="cert-row-cat">수상</span>
            <span className="cert-row-name">중소벤처기업부 장관상</span>
            <span className="cert-row-org">스마트공장 보급·확산 기여</span>
          </div>
          <span className="cert-row-view">사진 보기</span>
        </div>

        <div className="cert-row-item" onClick={e=>{ const b=document.getElementById('lb-img'); const c=document.getElementById('lb-counter'); const lb=document.getElementById('lightbox'); if(b)b.src='/images/company/cert-sports-seoul.jpg'; if(c)c.textContent='서울특별시장 표창'; if(lb){lb.classList.add('open');document.body.style.overflow='hidden'} }}>
          <div className="cert-row-left">
            <span className="cert-row-cat">수상</span>
            <span className="cert-row-name">서울특별시장 표창</span>
            <span className="cert-row-org">스포츠산업 발전 기여</span>
          </div>
          <span className="cert-row-view">사진 보기</span>
        </div>

        <div className="cert-row-item" onClick={e=>{ const b=document.getElementById('lb-img'); const c=document.getElementById('lb-counter'); const lb=document.getElementById('lightbox'); if(b)b.src='/images/company/cert-04.jpg'; if(c)c.textContent='소프트웨어 저작권 — i-MEPS 시리즈'; if(lb){lb.classList.add('open');document.body.style.overflow='hidden'} }}>
          <div className="cert-row-left">
            <span className="cert-row-cat">지재권</span>
            <span className="cert-row-name">소프트웨어 저작권 — i-MEPS 시리즈</span>
            <span className="cert-row-org">제조통합솔루션 전 모듈</span>
          </div>
          <span className="cert-row-view">사진 보기</span>
        </div>

        <div className="cert-row-item" onClick={e=>{ const b=document.getElementById('lb-img'); const c=document.getElementById('lb-counter'); const lb=document.getElementById('lightbox'); if(b)b.src='/images/company/cert-05.jpg'; if(c)c.textContent='소프트웨어 저작권 — GIVAS AI'; if(lb){lb.classList.add('open');document.body.style.overflow='hidden'} }}>
          <div className="cert-row-left">
            <span className="cert-row-cat">지재권</span>
            <span className="cert-row-name">소프트웨어 저작권 — GIVAS AI</span>
            <span className="cert-row-org">제조 AI 플랫폼</span>
          </div>
          <span className="cert-row-view">사진 보기</span>
        </div>

        <div className="cert-row-item" onClick={e=>{ const b=document.getElementById('lb-img'); const c=document.getElementById('lb-counter'); const lb=document.getElementById('lightbox'); if(b)b.src='/images/company/cert-06.jpg'; if(c)c.textContent='소프트웨어 저작권 — V-MEPS · R-MEPS'; if(lb){lb.classList.add('open');document.body.style.overflow='hidden'} }}>
          <div className="cert-row-left">
            <span className="cert-row-cat">지재권</span>
            <span className="cert-row-name">소프트웨어 저작권 — V-MEPS · R-MEPS</span>
            <span className="cert-row-org">비전검사 · 로봇제어 AI</span>
          </div>
          <span className="cert-row-view">사진 보기</span>
        </div>

      </div>
    </div>
  </section>


  {/* Lightbox */}
  <div className="lightbox" id="lightbox">
    <button className="lightbox-close" id="lb-close">&#10005;</button>
    <button className="lightbox-nav lightbox-prev" id="lb-prev">&#8249;</button>
    <img className="lightbox-img" id="lb-img" src="" alt=""/>
    <button className="lightbox-nav lightbox-next" id="lb-next">&#8250;</button>
    <div className="lightbox-counter" id="lb-counter"></div>
  </div>

  {/* ── 보도자료 ── */}
  <section className="sec-press">
    <div className="container">
      <div className="sec-head-center reveal">
        <h2 className="sec-title">언론이 주목한 지엔디비즈</h2>
        <p className="sec-desc">스마트팩토리 혁신을 선도하는 지엔디비즈의<br/>주요 성과와 기술력을<br className="mob-br"/>미디어가 직접 보도한 자료들입니다</p>
      </div>
      <div className="reveal" style={{transitionDelay:".1s"}}>
        <div className="flipbook-outer">
          <div className="flipbook" id="flipbook">
            <div className="flipbook-inner">
              <div className="fb-page portrait-single" data-spread="0" data-side="L"><img src="/images/company/press-p1.jpg" alt="보도자료 p1" loading="lazy"/></div>
              <div className="fb-page portrait-single" data-spread="0" data-side="R" style={{display:"none"}}><img src="/images/company/press-p2.jpg" alt="보도자료 p2" loading="lazy"/></div>
              <div className="fb-page portrait-single" data-spread="1" data-side="L" style={{display:"none"}}><img src="/images/company/press-p3.jpg" alt="보도자료 p3" loading="lazy"/></div>
              <div className="fb-page portrait-single" data-spread="1" data-side="R" style={{display:"none"}}><img src="/images/company/press-p4.jpg" alt="보도자료 p4" loading="lazy"/></div>
              <div className="fb-page portrait-single" data-spread="2" data-side="L" style={{display:"none"}}><img src="/images/company/press-p5.jpg" alt="보도자료 p5" loading="lazy"/></div>
              <div className="fb-page portrait-single" data-spread="2" data-side="R" style={{display:"none"}}><img src="/images/company/press-p6.jpg" alt="보도자료 p6" loading="lazy"/></div>
              <div className="fb-page portrait-single" data-spread="3" data-side="L" style={{display:"none"}}><img src="/images/company/press-p7.jpg" alt="보도자료 p7" loading="lazy"/></div>
              <div className="fb-page portrait-single" data-spread="3" data-side="R" style={{display:"none"}}><img src="/images/company/press-p8.jpg" alt="보도자료 p8" loading="lazy"/></div>
              <div className="fb-page portrait-single" data-spread="4" data-side="L" style={{display:"none"}}><img src="/images/company/press-p9.jpg" alt="보도자료 p9" loading="lazy"/></div>
              <div className="fb-page fb-ending" data-spread="5" data-side="L" style={{display:"none"}}><div className="ending-inner"><div className="ending-logo"><span className="ending-logo-text">지엔디비즈</span></div><p className="ending-tagline">스마트팩토리 · AI로<br/>대한민국 제조의 내일을 설계합니다</p><div className="ending-line"></div><p className="ending-info">031-708-2997 &nbsp;|&nbsp; sbgwak@gmail.com</p><p className="ending-copy">© 지엔디비즈(GNDBIZ). All rights reserved.</p></div></div>
              <div className="fb-page fb-ending" data-spread="5" data-side="R" style={{display:"none"}}><div className="ending-inner ending-blank"></div></div>
            </div>
            <div className="fb-click-l" id="fb-click-l"></div>
            <div className="fb-click-r" id="fb-click-r"></div>
            <button className="fb-mobile-btn prev" id="fb-prev">&#8592;</button>
            <button className="fb-mobile-btn next" id="fb-next">&#8594;</button>
          </div>
          <div className="fb-controls">
            <div className="fb-dots" id="fb-dots">
              <button className="fb-dot active"></button>
              <button className="fb-dot"></button>
              <button className="fb-dot"></button>
              <button className="fb-dot"></button>
              <button className="fb-dot"></button>
              <button className="fb-dot"></button>
            </div>
            <button className="fb-fullbtn" id="fb-fullbtn">&#x26F6; 전체화면</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div className="fb-overlay" id="fb-overlay">
    <button className="fb-overlay-close" id="fb-overlay-close">&#10005;</button>
    <button className="fb-ov-prev" id="fb-ov-prev">&#8249;</button>
    <div className="fb-overlay-inner">
      <div className="fb-overlay-book" id="fb-overlay-book"></div>
    </div>
    <button className="fb-ov-next" id="fb-ov-next">&#8250;</button>
    <div className="fb-overlay-counter" id="fb-ov-counter"></div>
  </div>

  {/* ── 오시는 길 ── */}
  <section className="sec-location">
    <div className="container">
      <div className="sec-head-center reveal">
        <h2 className="sec-title">오시는 길</h2>
      </div>
      <div className="loc-body reveal" style={{transitionDelay:".1s"}}>
        <div className="loc-info">
          <div className="loc-info-title">(주)지엔디비즈</div>
          <div className="loc-row2"><span className="loc-lbl2">주소</span><span className="loc-val2">경기 성남시 분당구<br/>성남대로43번길 10<br/>(구미동, 하나EZ타워) 205, 206호</span></div>
          <div className="loc-row2"><span className="loc-lbl2">전화</span><span className="loc-val2"><a href="tel:031-708-2997">031-708-2997</a></span></div>
          <div className="loc-row2"><span className="loc-lbl2">FAX</span><span className="loc-val2">0505-902-2997</span></div>
          <div className="loc-row2"><span className="loc-lbl2">이메일</span><span className="loc-val2"><a href="mailto:sbgwak@gmail.com">sbgwak@gmail.com</a></span></div>
          <div className="loc-row2"><span className="loc-lbl2">교통</span><span className="loc-val2">수인분당선 오리역 6번 출구<br/>도보 약 1분</span></div>
        </div>
        <div className="loc-map-wrap">
          <iframe src="https://maps.google.com/maps?q=%EA%B2%BD%EA%B8%B0+%EC%84%B1%EB%82%A8%EC%8B%9C+%EB%B6%84%EB%8B%B9%EA%B5%AC+%EC%84%B1%EB%82%A8%EB%8C%80%EB%A1%9C43%EB%B2%88%EA%B8%B010&z=17&output=embed&hl=ko" allowFullScreen loading="lazy" title="지엔디비즈 위치"></iframe>
        </div>
      </div>
    </div>
  </section>

</div>
    </>
  )
}
