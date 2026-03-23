import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// ── 파티클 캔버스 (home.html JS 그대로) ──────────────────
function useParticleCanvas(canvasRef) {
  useEffect(() => {
    const cv = canvasRef.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    let W, H, dots = [], ripples = [], mouse = { x: -9999, y: -9999 }, animId

    function resize() { W = cv.width = cv.offsetWidth; H = cv.height = cv.offsetHeight }
    function mkDot() {
      return { x: Math.random()*W, y: Math.random()*H, vx:(Math.random()-.5)*1.1, vy:(Math.random()-.5)*1.1, r:Math.random()*1.9+.7, a:Math.random()*.55+.32, spread:0 }
    }

    const onMove = e => { const r=cv.getBoundingClientRect(); mouse.x=e.clientX-r.left; mouse.y=e.clientY-r.top }
    const onLeave = () => { mouse.x=-9999; mouse.y=-9999 }
    const onDown = e => { const r=cv.getBoundingClientRect(); ripples.push({x:e.clientX-r.left,y:e.clientY-r.top,r:0,a:1}) }
    cv.addEventListener('mousemove', onMove)
    cv.addEventListener('mouseleave', onLeave)
    cv.addEventListener('mousedown', onDown)

    const SPREAD_R=160, SPREAD_F=0.018, BASE_CONN=130
    function draw() {
      ctx.clearRect(0,0,W,H)
      dots.forEach(d => {
        const mdx=d.x-mouse.x, mdy=d.y-mouse.y, dist=Math.sqrt(mdx*mdx+mdy*mdy)
        if(dist<SPREAD_R&&dist>1){ const f=(1-dist/SPREAD_R)*SPREAD_F; d.vx+=(mdx/dist)*f; d.vy+=(mdy/dist)*f; d.spread=Math.min(1,d.spread+.06) }
        else { d.spread=Math.max(0,d.spread-.025) }
        d.vx*=0.992; d.vy*=0.992
        d.vx+=(Math.random()-.5)*.06; d.vy+=(Math.random()-.5)*.06
        d.x+=d.vx; d.y+=d.vy
        if(d.x<0){d.x=0;d.vx*=-.6} if(d.x>W){d.x=W;d.vx*=-.6}
        if(d.y<0){d.y=0;d.vy*=-.6} if(d.y>H){d.y=H;d.vy*=-.6}
        const s=d.spread, alpha=d.a+s*.38, size=d.r+s*1.1
        if(s>.12){ const g=ctx.createRadialGradient(d.x,d.y,0,d.x,d.y,size*5); g.addColorStop(0,`rgba(147,197,253,${s*.22})`); g.addColorStop(1,'rgba(96,165,250,0)'); ctx.beginPath(); ctx.arc(d.x,d.y,size*5,0,Math.PI*2); ctx.fillStyle=g; ctx.fill() }
        ctx.beginPath(); ctx.arc(d.x,d.y,size,0,Math.PI*2); ctx.fillStyle=`rgba(165,210,255,${Math.min(1,alpha)})`; ctx.fill()
      })
      for(let i=0;i<dots.length;i++) for(let j=i+1;j<dots.length;j++) {
        const a=dots[i],b=dots[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.sqrt(dx*dx+dy*dy)
        const avg=(a.spread+b.spread)*.5, thresh=BASE_CONN+avg*50
        if(d<thresh){ const t=1-d/thresh,op=t*(.48+avg*.28),lw=.75+avg*.9; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.strokeStyle=`rgba(96,165,250,${Math.min(.85,op)})`; ctx.lineWidth=lw; ctx.stroke() }
      }
      ripples = ripples.filter(rp => {
        rp.r+=3.5; rp.a=Math.max(0,1-rp.r/260)
        ctx.beginPath(); ctx.arc(rp.x,rp.y,rp.r,0,Math.PI*2); ctx.strokeStyle=`rgba(147,197,253,${rp.a*.5})`; ctx.lineWidth=1.2; ctx.stroke()
        if(rp.r>30){ ctx.beginPath(); ctx.arc(rp.x,rp.y,rp.r*.65,0,Math.PI*2); ctx.strokeStyle=`rgba(96,165,250,${rp.a*.3})`; ctx.lineWidth=.7; ctx.stroke() }
        if(rp.r>60){ ctx.beginPath(); ctx.arc(rp.x,rp.y,rp.r*.3,0,Math.PI*2); ctx.strokeStyle=`rgba(147,197,253,${rp.a*.18})`; ctx.lineWidth=.5; ctx.stroke() }
        return rp.a>0
      })
      animId = requestAnimationFrame(draw)
    }
    resize(); dots=Array.from({length:160},mkDot); draw()
    const onResize = () => { resize(); dots=Array.from({length:160},mkDot) }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(animId); cv.removeEventListener('mousemove',onMove); cv.removeEventListener('mouseleave',onLeave); cv.removeEventListener('mousedown',onDown); window.removeEventListener('resize',onResize) }
  }, [canvasRef])
}

// ── 타이핑 효과 (home.html JS 그대로) ────────────────────
function useTypewriter() {
  const [typed, setTyped] = useState('')
  useEffect(() => {
    const phrases = ['스마트팩토리를 구축합니다','AI로 불량을 예측합니다','현장 데이터를 지식으로 바꿉니다','로봇을 지능적으로 제어합니다']
    let pi=0, ci=0, del=false, timer
    function tick() {
      const p=phrases[pi]
      if(!del){ ci++; setTyped(p.slice(0,ci)); if(ci===p.length){del=true;timer=setTimeout(tick,2200);return} }
      else { ci--; setTyped(p.slice(0,ci)); if(ci===0){del=false;pi=(pi+1)%phrases.length} }
      timer=setTimeout(tick,del?55:90)
    }
    timer=setTimeout(tick,700)
    return () => clearTimeout(timer)
  }, [])
  return typed
}

// ── CountUp (home.html JS 그대로) ────────────────────────
function StatNum({ target, suffix }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        io.disconnect()
        const start = performance.now()
        const dur = 1800
        ;(function update(now) {
          const t = Math.min((now-start)/dur, 1)
          setVal(Math.round(t*target))
          if(t<1) requestAnimationFrame(update)
        })(start)
      }
    }, { threshold: 0.3 })
    if(ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [target])
  return <div className="stat-num" ref={ref}>{val}<em>{suffix}</em></div>
}

export default function HomePage() {
  const canvasRef = useRef(null)
  useParticleCanvas(canvasRef)
  const typed = useTypewriter()

  useEffect(() => {
    // 솔루션 아코디언
    document.querySelectorAll('.sol2-row').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.sol2-item')
        const isOpen = item.classList.toggle('open')
        btn.setAttribute('aria-expanded', String(isOpen))
      })
    })

    const ro = new IntersectionObserver(es => {
      es.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target)} })
    }, { threshold: 0.06 })
    document.querySelectorAll('.reveal').forEach(el => ro.observe(el))
    return () => ro.disconnect()
  }, [])

  return (
    <>
            <section id="hero">
        <canvas id="hero-canvas" ref={canvasRef}></canvas>
        <div className="grid-bg"></div>
        <div className="glow-top"></div>
        <div className="glow-br"></div>

        <div className="hero-content">
          <h1 className="hero-title">지엔디비즈</h1>
          <p className="hero-sub-title">Global New Business Director</p>
          <div className="hero-typing">
            <span className="static-txt">우리는 </span><span className="typed-txt">{typed}</span>
          </div>
          <p className="hero-desc">
            스마트팩토리 구축 15년의 현장 데이터 위에<br/>
            AI 예측 · Vision 검사 · 로봇 지능 제어를 더합니다
          </p>
          <div className="hero-cta">
            <Link to="/ai/platform" className="btn-primary">
              AI 솔루션 보기
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/contact" className="btn-ghost">무료 상담 문의</Link>
          </div>
        </div>

        <div className="scroll-hint">
          <div className="mouse"><div className="wheel"></div></div>
          <span>SCROLL</span>
        </div>
      </section>

            <section id="stats">
        <div className="stats-grid">
          <div className="stat-item"><StatNum target={15} suffix="년+"/><div className="stat-label">현장 경험</div></div>
          <div className="stat-item"><StatNum target={100} suffix="+"/><div className="stat-label">고객사</div></div>
          <div className="stat-item"><StatNum target={7} suffix="개"/><div className="stat-label">핵심 솔루션</div></div>
          <div className="stat-item"><StatNum target={96} suffix="%+"/><div className="stat-label">AI 정확도</div></div>
        </div>
      </section>

      {/* ══ SOLUTION — sticky 좌측 타이틀 + 우측 스크롤 아이템 ══ */}
      <section id="solutions">
        <div className="sol-sticky-wrap">

          {/* 좌측: 뷰포트에 sticky 고정되는 타이틀 패널 */}
          <div className="sol-sticky-left">
            <div className="sol-sticky-inner">
              <h2 className="sol-sticky-title">
                현장을 알기에<br/>
                <em>정확하게</em><br/>
                만듭니다
              </h2>
              <p className="sol-sticky-body">
                15년간 대기업·중견기업 현장을<br/>
                직접 누빈 경험.<br/>
                i-MEPS·AI·IoT까지 책임집니다.
              </p>
              <Link to="/solution" className="sol-sticky-link">
                솔루션 전체 보기
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

          {/* 우측: 스크롤되는 아이템 목록 */}
          <div className="sol-sticky-right">
            {[
              { num:'01', name:'스마트공장 구축',     en:'Smart Factory',         desc:'ERP · MES · PLM · SCM · QMS — i-MEPS 하나의 플랫폼으로 통합, 실시간 데이터 기반 의사결정 지원' },
              { num:'02', name:'맞춤형 솔루션 개발',  en:'Custom Development',    desc:'공정관리 · 검사 · SPC · 4M 변경관리 — 현장 분석부터 개발·납품·유지보수까지 일괄 책임' },
              { num:'03', name:'공정관리개선 컨설팅', en:'Process Consulting',     desc:'3정5S · 공정표준화 · SQ 인증 취득 — 전문가가 현장에 직접 투입되어 지속 지원' },
              { num:'04', name:'IoT / FA 연동시스템', en:'IoT & FA Integration',  desc:'PLC · 협동로봇 · AGV 연동 — FOOL PROOF 및 모바일 자동화로 무인화 공정 실현' },
            ].map(({ num, name, en, desc }) => (
              <Link to="/solution" key={num} className="sol-sticky-item reveal">
                <span className="sol-si-num">{num}</span>
                <div className="sol-si-body">
                  <div className="sol-si-head">
                    <h3 className="sol-si-name">{name}</h3>
                    <span className="sol-si-en">{en}</span>
                  </div>
                  <p className="sol-si-desc">{desc}</p>
                </div>
                <span className="sol-si-arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ══ AI PRODUCTS — sticky 우측 타이틀 + 좌측 스크롤 리스트 ══ */}
      <section id="ai">
        <div className="ai-sticky-wrap">

          {/* 좌측: 스크롤되는 AI 아이템 목록 */}
          <div className="ai-sticky-left">

            <Link to="/ai/givas" className="ai-si-item reveal" style={{transitionDelay:'.04s'}}>
              <span className="ai-si-num">01</span>
              <div className="ai-si-body">
                <div className="ai-si-head">
                  <h3 className="ai-si-name">GIVAS</h3>
                  <span className="ai-si-en">Manufacturing Intelligence Brain</span>
                </div>
                <p className="ai-si-desc">예지보전 · AI-SPC · 이상탐지 · Gen AI 자연어 분석 · 재고 최적화</p>
              </div>
              <span className="ai-si-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </Link>

            <Link to="/ai/vmeps" className="ai-si-item reveal" style={{transitionDelay:'.1s'}}>
              <span className="ai-si-num">02</span>
              <div className="ai-si-body">
                <div className="ai-si-head">
                  <h3 className="ai-si-name">V-MEPS</h3>
                  <span className="ai-si-en">Vision Safety AI</span>
                </div>
                <p className="ai-si-desc">딥러닝 불량검사 · 화재 감지 · 안전사고 실시간 모니터링 · 0.1초 Edge 추론</p>
              </div>
              <span className="ai-si-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </Link>

            <Link to="/ai/rmeps" className="ai-si-item reveal" style={{transitionDelay:'.16s'}}>
              <span className="ai-si-num">03</span>
              <div className="ai-si-body">
                <div className="ai-si-head">
                  <h3 className="ai-si-name">R-MEPS</h3>
                  <span className="ai-si-en">Robot Adaptive Control</span>
                </div>
                <p className="ai-si-desc">용접 품질 AI 예측 · 직재 경로 최적화 · 100ms 이내 즉시 제어</p>
              </div>
              <span className="ai-si-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </Link>

          </div>

          {/* 우측: sticky 고정 타이틀 패널 */}
          <div className="ai-sticky-right">
            <div className="ai-sticky-inner">
              <h2 className="ai-sticky-title">
                제조 현장을 위한<br/>
                <em>AI 솔루션</em>
              </h2>
              <p className="ai-sticky-body">
                스마트팩토리 구축 경험 위에<br/>
                AI를 더합니다.<br/>
                예측·검사·제어, 세 영역을<br/>
                하나로 연결합니다.
              </p>
              <Link to="/ai/platform" className="sol-sticky-link">
                AI 플랫폼 전체 보기
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>

        </div>
      </section>

            <section id="clients">
        <div className="clients-header reveal">
          <h2 className="clients-title">국내 최고 제조기업이<br/>선택한 솔루션</h2>
          <p className="clients-desc">삼성, 현대, 두산을 비롯한 대기업·중견기업 100개사 이상의 현장에서<br/>지엔디비즈의 스마트팩토리 솔루션이 가동되고 있습니다</p>
        </div>
        <div className="logo-grid-wrap">
          <div className="logo-grid">
            {[
              {name:'삼성중공업', src:'/images/clients/logo-samsung-heavy.png'},
              {name:'CSM TECH', src:'/images/clients/logo-csm-tech.png'},
              {name:'DAEWON', src:'/images/clients/logo-daewon.png'},
              {name:'KET Engineered', src:'/images/clients/logo-ket.png'},
              {name:'두산인프라코어', src:'/images/clients/logo-doosan.png'},
              {name:'국방과학연구소', src:'/images/clients/logo-add.png'},
              {name:'S&T 중공업', src:'/images/clients/logo-snt.png'},
              {name:'대성강업', src:'/images/clients/logo-daesung.png'},
              {name:'coway', src:'/images/clients/logo-coway.png'},
              {name:'비룡전자', src:'/images/clients/logo-beeryong.png'},
              {name:'대원정밀공업', src:'/images/clients/logo-daewon.png'},
              {name:'네오마그네틱', src:'/images/clients/logo-neo.png'},
              {name:'HIVE SYSTEM', src:'/images/clients/logo-hive.png'},
              {name:'현대 유리창호', src:'/images/clients/logo-hyundai-changho.png'},
              {name:'삼성SDI', src:'/images/clients/logo-samsung-sdi.png'},
              {name:'세운산업', src:'/images/clients/logo-seun.png'},
              {name:'창신인터내셔날', src:'/images/clients/logo-changshin-official.png'},
              {name:'현대위아', src:'/images/clients/logo-hyundai-wia.png'},
              {name:'베셀', src:'/images/clients/logo-vessel.png'},
              {name:'세운산업', src:'/images/clients/logo-seun.png'},
            ].map(({name, src}) => (
              <div key={name} className="logo-item">
                <img src={src} alt={name}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
