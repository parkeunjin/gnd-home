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

    // 인증서 슬라이더
    const track = document.getElementById('cert-track')
    if (track) {
      track.innerHTML = ''
      ;[...awardImages, ...awardImages].forEach((src, i) => {
        const d = document.createElement('div')
        d.className = 'cert-card'
        d.dataset.idx = String(i % awardImages.length)
        d.innerHTML = `<img src="${src}" alt="인증서" loading="lazy"/>` +
          `<div class="cert-card-ov"><div class="cert-zoom">` +
          `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/>` +
          `<line x1="16.5" y1="16.5" x2="22" y2="22"/>` +
          `<line x1="11" y1="8" x2="11" y2="14"/>` +
          `<line x1="8" y1="11" x2="14" y2="11"/></svg></div></div>`
        track.appendChild(d)
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
    if(track) track.addEventListener('click', e => { const c=e.target.closest('.cert-card');if(c)openLb(+c.dataset.idx) })
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

    // Reveal
    const ro=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target)}})},{threshold:0.05})
    document.querySelectorAll('.reveal').forEach(el=>ro.observe(el))

    return()=>{document.removeEventListener('keydown',lbKey);window.removeEventListener('resize',onResize);ro.disconnect()}
  },[])

  return (
    <>
<div className="pg-company">

  {/* ── Hero ── */}
  <div className="page-hero">
    <div className="container page-hero-inner">
      <h1 className="page-title">제조 혁신의 시작,<br/><em>지엔디비즈입니다</em></h1>
      <p className="page-desc">15년간 대기업·중견기업 현장을 함께한 경험으로<br/>스마트팩토리와 AI 기술로 중소기업의 내일을 설계합니다</p>
    </div>
  </div>

  {/* ── CEO 인사말 ── */}
  <section className="sec-ceo">
    <div className="container">
      <div className="reveal greeting-wrap">

        <div className="greeting-left">
          <span className="greeting-badge">대표인사말</span>
          <p className="greeting-body">저희 지엔디비즈는 ERP · MES · PLM을 15년 이상 대기업과 중견기업을 대상으로 개발한 풍부한 현장 경험을 바탕으로 2011년에 창업하였습니다.</p>
          <p className="greeting-body">현재는 스마트팩토리 구축을 넘어 AI 예측 · Vision 검사 · 로봇 지능 제어까지 제조 AI 풀스택 기술을 보유하고 있으며, KOSF 전문공급기업으로 100개사 이상의 현장에 솔루션을 공급하였습니다.</p>
          <div className="greeting-stats">
            <div className="gstat"><span className="gstat-num">2011</span><span className="gstat-label">창업</span></div>
            <div className="gstat-divider"></div>
            <div className="gstat"><span className="gstat-num">15<em>년+</em></span><span className="gstat-label">현장경험</span></div>
            <div className="gstat-divider"></div>
            <div className="gstat"><span className="gstat-num">100<em>+</em></span><span className="gstat-label">구축기업</span></div>
            <div className="gstat-divider"></div>
            <div className="gstat"><span className="gstat-num">7<em>개</em></span><span className="gstat-label">핵심솔루션</span></div>
          </div>
        </div>

        <div className="greeting-right">
          <div className="gqc">
            <div className="gqc-mark">&ldquo;</div>
            <p className="gqc-text">4차 산업 변화의 물결은 시작되었습니다.<br/>그 변화의 시작에 <em>책임있는 ICT 기술력</em>과<br/>품질로 함께 하고 싶습니다.</p>
            <div className="gqc-footer">
              <span className="gqc-role">대표이사 · CEO</span>
              <span className="gqc-name">곽 승 범</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/* ── 인증 슬라이더 ── */}
  <div className="sec-cert">
    <div className="container">
      <div className="reveal" style={{transitionDelay:".1s"}}>
        <div className="cert-slider-wrap">
          <div className="cert-slider-label">인증 및 수상 · 지적재산권</div>
          <div className="cert-slider-mask">
            <div className="cert-track" id="cert-track"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

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
