import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [aiDropOpen, setAiDropOpen] = useState(false)
  const dropTimerRef = useRef(null)
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/ai') return location.pathname.startsWith('/ai')
    return location.pathname === path
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setAiDropOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const handleDropEnter = () => {
    clearTimeout(dropTimerRef.current)
    setAiDropOpen(true)
  }
  const handleDropLeave = () => {
    dropTimerRef.current = setTimeout(() => setAiDropOpen(false), 120)
  }

  return (
    <>
      <header id="hdr" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <Link to="/" className="logo-img-wrap" onClick={() => window.scrollTo({top:0,behavior:'smooth'})}>
            <img src="/images/logo/gndbiz-logo.png" alt="GNDBIZ" className="logo-img"/>
          </Link>

          <ul className="gnb" id="gnb">
            <li>
              <Link to="/company" className={isActive('/company') ? 'active' : ''}>회사소개</Link>
            </li>
            <li>
              <Link to="/solution" className={isActive('/solution') ? 'active' : ''}>솔루션</Link>
            </li>
            <li
              className={aiDropOpen ? 'open' : ''}
              onMouseEnter={handleDropEnter}
              onMouseLeave={handleDropLeave}
            >
              <a
                href="#"
                onClick={e => e.preventDefault()}
                className={isActive('/ai') ? 'active' : ''}
              >
                AI 제품소개
                <svg className="gnb-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
              </a>
              <div className="gnb-drop" onMouseEnter={handleDropEnter} onMouseLeave={handleDropLeave}>
                <Link className="drop-item" to="/ai/platform"><span className="di-dot"></span>AI 플랫폼 개요</Link>
                <Link className="drop-item" to="/ai/givas"><span className="di-dot"></span>GIVAS (가이바스)</Link>
                <Link className="drop-item" to="/ai/vmeps"><span className="di-dot"></span>V-MEPS</Link>
                <Link className="drop-item" to="/ai/rmeps"><span className="di-dot"></span>R-MEPS</Link>
              </div>
            </li>
            <li>
              <Link to="/clients" className={isActive('/clients') ? 'active' : ''}>구축실적</Link>
            </li>
            <li>
              <Link to="/faq" className={isActive('/faq') ? 'active' : ''}>FAQ</Link>
            </li>
            <li>
              <Link to="/info" className={isActive('/info') ? 'active' : ''}>도입안내</Link>
            </li>
            <li>
              <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>제품문의</Link>
            </li>
          </ul>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            id="hamburger"
            aria-label="메뉴 열기"
            onClick={() => setMenuOpen(v => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* 풀스크린 모바일 메뉴 */}
      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} id="mobile-nav">
        <ul className="mobile-nav-list">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>홈</Link></li>
          <li><Link to="/company" onClick={() => setMenuOpen(false)}>회사소개</Link></li>
          <li><Link to="/solution" onClick={() => setMenuOpen(false)}>솔루션</Link></li>
          <li><Link to="/ai/platform" onClick={() => setMenuOpen(false)}>AI 제품소개</Link></li>
          <li><Link to="/clients" onClick={() => setMenuOpen(false)}>구축실적</Link></li>
          <li><Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link></li>
          <li><Link to="/info" onClick={() => setMenuOpen(false)}>도입안내</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>제품문의</Link></li>
        </ul>
      </nav>
    </>
  )
}
