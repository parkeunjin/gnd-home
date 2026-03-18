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

            <section id="solutions" className="section">
        <div className="container">
          <div className="sec-head-center reveal">
            <h2 className="sec-title">중소기업을 위한 맞춤형 솔루션</h2>
            <p className="sec-desc">15년 현장 경험을 바탕으로 귀사에 꼭 맞는 스마트팩토리를 구축합니다</p>
          </div>
          <div className="sol-grid">

            <div className="sol-card reveal" style={{transitionDelay:".05s"}}>
              <div className="sol-icon-wrap">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 8a6 6 0 100 12 6 6 0 000-12z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity=".15"/>
                  <path d="M24 8v-4M24 20v4M16.5 12l-2.8-2.8M31.5 16.8l2.8 2.8M8 14H4M44 14h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6"/>
                  <rect x="8" y="28" width="32" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M14 28v-4M24 28v-4M34 28v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M4 42h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".4"/>
                  <circle cx="24" cy="14" r="2.5" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="sol-name">스마트공장 구축</h3>
              <ul className="sol-list">
                <li>ERP · MES · PLM · SCM · QMS</li>
                <li>i-MEPS 제조통합솔루션</li>
                <li>15년 이상 100+ 구축 실적</li>
                <li>중소기업 맞춤형 빠른 적용</li>
              </ul>
            </div>

            <div className="sol-card reveal" style={{transitionDelay:".1s"}}>
              <div className="sol-icon-wrap">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="8" width="40" height="32" rx="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M4 16h40" stroke="currentColor" strokeWidth="1.5" opacity=".4"/>
                  <circle cx="10" cy="12" r="1.5" fill="currentColor" opacity=".5"/>
                  <circle cx="15" cy="12" r="1.5" fill="currentColor" opacity=".5"/>
                  <circle cx="20" cy="12" r="1.5" fill="currentColor" opacity=".5"/>
                  <path d="M14 24l-4 4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M34 24l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M28 21l-8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".8"/>
                  <path d="M4 40v4M44 40v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".3"/>
                </svg>
              </div>
              <h3 className="sol-name">맞춤형 솔루션 개발</h3>
              <ul className="sol-list">
                <li>공정관리 · 초/중/종 검사시스템</li>
                <li>SPC · 4M변경관리 · 견적관리</li>
                <li>현장 맞춤 커스터마이징</li>
                <li>요구사항 기반 기능 개발</li>
              </ul>
            </div>

            <div className="sol-card reveal" style={{transitionDelay:".15s"}}>
              <div className="sol-icon-wrap">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="4" width="24" height="32" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M15 13l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 21l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="15" y1="30" x2="25" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".4"/>
                  <path d="M32 28V44M32 28l-6 6M32 28l6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="26" y="40" width="12" height="4" rx="1" fill="currentColor" fillOpacity=".15" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3 className="sol-name">공정관리개선 컨설팅</h3>
              <ul className="sol-list">
                <li>3정5S · 공정표준화</li>
                <li>SQ 인증 준비 지원</li>
                <li>프로세스 간소화</li>
                <li>현장관리기법 교육</li>
              </ul>
            </div>

            <div className="sol-card reveal" style={{transitionDelay:".2s"}}>
              <div className="sol-icon-wrap">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity=".15"/>
                  <circle cx="8" cy="10" r="4" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="40" cy="10" r="4" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="8" cy="38" r="4" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="40" cy="38" r="4" stroke="currentColor" strokeWidth="1.8"/>
                  <line x1="12" y1="13" x2="20" y2="20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity=".75"/>
                  <line x1="36" y1="13" x2="28" y2="20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity=".75"/>
                  <line x1="12" y1="35" x2="20" y2="28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity=".75"/>
                  <line x1="36" y1="35" x2="28" y2="28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity=".75"/>
                  <circle cx="8" cy="10" r="1.5" fill="currentColor"/>
                  <circle cx="40" cy="10" r="1.5" fill="currentColor"/>
                  <circle cx="8" cy="38" r="1.5" fill="currentColor"/>
                  <circle cx="40" cy="38" r="1.5" fill="currentColor"/>
                  <path d="M20 10h8M20 38h8M10 20v8M38 20v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".35"/>
                </svg>
              </div>
              <h3 className="sol-name">IoT / FA 연동시스템</h3>
              <ul className="sol-list">
                <li>PLC · 협동로봇 · AGV 연동</li>
                <li>카운터 · 모니터링 · 검출 시스템</li>
                <li>FOOL PROOF 개발</li>
                <li>무선호출 · 모바일 연동</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

            <section id="ai" className="section">
        <div className="container">
          <div className="sec-head-center reveal">
            <h2 className="sec-title">AI 사업 분야</h2>
            <p className="sec-desc">비즈니스의 모든 순간, 현장 AI의 정답은 지엔디비즈입니다</p>
          </div>
          <div className="ai-grid">

            <div className="ai-card reveal" style={{transitionDelay:".05s"}}>
              <div className="ai-img">
                <img src="/images/ai/givas-thumbnail.png" alt="GIVAS"/>
                <div className="ai-img-overlay"></div>
                <div className="ai-img-tint"></div>
                <div className="ai-badge">
                  <span className="ai-badge-name">GIVAS</span>
                  <span className="ai-badge-sub">Manufacturing Intelligence Brain</span>
                </div>
              </div>
              <div className="ai-body">
                <div className="ai-divider"></div>
                <ul className="ai-desc-list">
                  <li>예지보전 · AI-SPC · 이상탐지</li>
                  <li>Gen AI 자연어 분석 · 재고 최적화</li>
                  <li>Naver Cloud SaaS 지원</li>
                </ul>
                <Link to="/ai/givas" className="ai-btn">
                  GIVAS 바로가기
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>

            <div className="ai-card reveal" style={{transitionDelay:".1s"}}>
              <div className="ai-img">
                <img src="/images/ai/vmeps-thumbnail.png" alt="V-MEPS"/>
                <div className="ai-img-overlay"></div>
                <div className="ai-img-tint"></div>
                <div className="ai-badge">
                  <span className="ai-badge-name">V-MEPS</span>
                  <span className="ai-badge-sub">Vision Safety AI</span>
                </div>
              </div>
              <div className="ai-body">
                <div className="ai-divider"></div>
                <ul className="ai-desc-list">
                  <li>딥러닝 불량검사 · 화재 감지</li>
                  <li>안전사고 실시간 모니터링</li>
                  <li>0.1초 Edge 고속 추론</li>
                </ul>
                <Link to="/ai/vmeps" className="ai-btn">
                  V-MEPS 바로가기
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>

            <div className="ai-card reveal" style={{transitionDelay:".15s"}}>
              <div className="ai-img">
                <img src="/images/ai/rmeps-thumbnail.png" alt="R-MEPS"/>
                <div className="ai-img-overlay"></div>
                <div className="ai-img-tint"></div>
                <div className="ai-badge">
                  <span className="ai-badge-name">R-MEPS</span>
                  <span className="ai-badge-sub">Robot Adaptive Control</span>
                </div>
              </div>
              <div className="ai-body">
                <div className="ai-divider"></div>
                <ul className="ai-desc-list">
                  <li>용접 품질 AI 예측</li>
                  <li>직재 경로 최적화</li>
                  <li>100ms 이내 즉시 제어</li>
                </ul>
                <Link to="/ai/rmeps" className="ai-btn">
                  R-MEPS 바로가기
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
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
