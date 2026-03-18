export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-col-brand">
          <img src="/images/logo/gndbiz-logo.png" alt="GNDBIZ" className="footer-logo-img"/>
          <p className="footer-tagline">KOSF 스마트팩토리 구축 전문기업</p>
        </div>
        <div className="footer-col-info">
          <div className="footer-info-row">
            <span className="fi-label">주소</span>
            <span className="fi-val">경기 성남시 분당구 성남대로43번길 10 (하나EZ타워) 205, 206호</span>
          </div>
          <div className="footer-info-row">
            <span className="fi-label">대표전화</span>
            <span className="fi-val"><a href="tel:031-708-2997">031-708-2997</a></span>
          </div>
        </div>
        <div className="footer-col-contact">
          <div className="footer-info-row">
            <span className="fi-label">FAX</span>
            <span className="fi-val">0505-902-2997</span>
          </div>
          <div className="footer-info-row">
            <span className="fi-label">E-MAIL</span>
            <span className="fi-val"><a href="mailto:sbgwak@gmail.com">sbgwak@gmail.com</a></span>
          </div>
        </div>
      </div>
      <div className="footer-bottom-bar">
        <p className="footer-copy">© 2026 GNDBIZ Co., Ltd. All rights reserved.</p>
      </div>
    </footer>
  )
}
