import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './../styles/pages/faq.css'

export default function FaqPage() {
  useEffect(() => {
    // FAQ 아코디언
    function handleFaqQ(e) {
      const item = e.currentTarget.closest('.faq-item')
      const isOpen = item.classList.contains('open')
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'))
      if (!isOpen) item.classList.add('open')
    }
    const qs = document.querySelectorAll('.faq-q')
    qs.forEach(q => q.addEventListener('click', handleFaqQ))

    // FAQ 탭 필터
    const faqTabs = document.querySelectorAll('.faq-tab')
    const faqGroups = document.querySelectorAll('.faq-group')
    const faqItems = document.querySelectorAll('.faq-item')
    function handleTab() {
      faqTabs.forEach(t => t.classList.remove('active'))
      this.classList.add('active')
      const cat = this.dataset.cat
      if (cat === 'all') {
        faqGroups.forEach(g => g.classList.add('visible'))
        faqItems.forEach(i => { i.style.display = ''; i.classList.remove('open') })
      } else {
        faqGroups.forEach(g => {
          const has = Array.from(g.querySelectorAll('.faq-item')).some(i => i.dataset.cat === cat)
          g.classList.toggle('visible', has)
        })
        faqItems.forEach(i => {
          i.style.display = (i.dataset.cat === cat) ? '' : 'none'
          i.classList.remove('open')
        })
      }
    }
    faqTabs.forEach(t => t.addEventListener('click', handleTab))

    // Reveal
    const ro = new IntersectionObserver(es => {
      es.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target)} })
    }, { threshold: 0.06 })
    document.querySelectorAll('.reveal').forEach(el => ro.observe(el))

    return () => {
      qs.forEach(q => q.removeEventListener('click', handleFaqQ))
      faqTabs.forEach(t => t.removeEventListener('click', handleTab))
      ro.disconnect()
    }
  }, [])

  return (
    <>
<div className="pg-faq">
<div className="page-hero">
  <div className="page-hero-grid"></div>
  <div className="page-hero-inner">
    <h1 className="page-title">도입이 망설여진다면,<br/><em>먼저 확인하세요</em></h1>
    <p className="page-desc">스마트팩토리 도입을 고민하는 제조기업들이 가장 많이 묻는 질문들을 한곳에 모았습니다.<br/>비용, AI 솔루션, 구축 방법까지 솔직하게 답해드립니다.</p>
  </div>
</div>


<div className="faq-wrap">

  <div className="faq-tabs">
    <button className="faq-tab active" data-cat="all">전체</button>
    <button className="faq-tab" data-cat="smart">스마트공장</button>
    <button className="faq-tab" data-cat="ai">AI 솔루션</button>
    <button className="faq-tab" data-cat="cost">비용 · 지원</button>
    <button className="faq-tab" data-cat="maint">유지보수</button>
    <button className="faq-tab" data-cat="consult">상담 · 데모</button>
  </div>


  <div className="faq-group visible">
    <div className="faq-group-label">스마트공장 구축</div>

    <div className="faq-item" data-cat="smart">
      <div className="faq-q">
        <span className="faq-q-num">Q1</span>
        <span className="faq-q-text">기존 ERP · MES와 연동이 가능합니까?</span>
        <span className="faq-q-tag tag-smart">스마트공장</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>가능합니다. 지엔디비즈 솔루션은 OPC-UA, MQTT, Modbus, REST API 등 산업 표준 프로토콜을 지원하여 기존 PLC, 센서, ERP, MES, PLM 시스템과 연동할 수 있습니다.</p><p>현장 환경을 분석한 후 가장 안정적인 연동 방식을 설계하여 적용합니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>기존 설비 교체 없이 연동 가능</div>
      </div></div>
    </div>
    <div className="faq-item" data-cat="smart" style={{transitionDelay:"0.05s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q6</span>
        <span className="faq-q-text">스마트팩토리 구축은 어떤 기업에 적합한가요?</span>
        <span className="faq-q-tag tag-smart">스마트공장</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>스마트팩토리는 다음과 같은 고민을 가진 제조기업에 특히 효과적입니다.</p><p>• 생산 데이터 관리가 체계적이지 않은 경우<br/>• 불량 원인을 정확히 분석하기 어려운 경우<br/>• 설비 고장으로 생산이 중단되는 경우<br/>• 공정 관리가 사람 경험에 의존하는 경우</p><p>지엔디비즈는 기업 환경에 맞는 맞춤형 구축 전략을 제공합니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>기업 규모에 맞는 단계별 구축 가능</div>
      </div></div>
    </div>
    <div className="faq-item" data-cat="smart" style={{transitionDelay:"0.10s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q7</span>
        <span className="faq-q-text">기존 설비를 교체해야 하나요?</span>
        <span className="faq-q-tag tag-smart">스마트공장</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>대부분의 경우 기존 설비를 그대로 활용할 수 있습니다.</p><p>센서, PLC, ERP 등 기존 시스템과 연동하여 데이터 수집 및 분석 환경을 구축합니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>설비 교체 없이 시스템 구축 가능</div>
      </div></div>
    </div>
    <div className="faq-item" data-cat="smart" style={{transitionDelay:"0.05s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q11</span>
        <span className="faq-q-text">도입 과정은 어떻게 진행되나요?</span>
        <span className="faq-q-tag tag-smart">스마트공장</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>도입 과정은 다음 단계로 진행됩니다.<br/><br/>① 현장 분석 및 요구사항 정의<br/>② 시스템 설계 및 구축<br/>③ 테스트 및 안정화<br/>④ 운영 지원 및 고도화</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>체계적인 구축 프로세스</div>
      </div></div>
    </div>
    <div className="faq-item" data-cat="smart" style={{transitionDelay:"0.00s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q10</span>
        <span className="faq-q-text">구축 기간은 얼마나 걸리나요?</span>
        <span className="faq-q-tag tag-smart">스마트공장</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>프로젝트 범위에 따라 다르지만 일반적으로<br/>• 스마트팩토리 구축: 약 2~6개월<br/>• AI 솔루션 적용: 약 1~3개월 정도의 기간이 소요됩니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>프로젝트 일정 사전 계획 수립</div>
      </div></div>
    </div>
    <div className="faq-item" data-cat="smart" style={{transitionDelay:"0.10s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q12</span>
        <span className="faq-q-text">사용자 교육도 제공되나요?</span>
        <span className="faq-q-tag tag-smart">스마트공장</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>네, 시스템 운영을 위한 관리자 및 사용자 교육을 제공합니다.</p><p>교육을 통해 현장에서 시스템을 효율적으로 활용할 수 있도록 지원합니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>사용자 교육 및 매뉴얼 제공</div>
      </div></div>
    </div>
    <div className="faq-item" data-cat="smart" style={{transitionDelay:"0.00s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q15</span>
        <span className="faq-q-text">산업 분야 제한이 있나요?</span>
        <span className="faq-q-tag tag-smart">스마트공장</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>지엔디비즈 솔루션은 다양한 제조 산업에 적용 가능합니다.<br/><br/>대표 적용 산업<br/>• 화학 및 소재 산업<br/>• 자동차 부품 제조<br/>• 전자 및 기계 산업<br/>• 식품 및 소비재 산업</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>다양한 제조 산업 구축 경험</div>
      </div></div>
    </div>
    <div className="faq-item" data-cat="smart" style={{transitionDelay:"0.05s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q16</span>
        <span className="faq-q-text">시스템 확장이 가능한가요?</span>
        <span className="faq-q-tag tag-smart">스마트공장</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>기업 성장과 생산 라인 확대에 맞추어 시스템을 확장할 수 있습니다.</p><p>모듈형 구조로 설계되어 기능 추가 및 확장이 용이합니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>유연한 시스템 확장</div>
      </div></div>
    </div>
  </div>
  <div className="faq-group visible">
    <div className="faq-group-label">AI 솔루션</div>


    <div className="faq-item" data-cat="ai" style={{transitionDelay:"0.20s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q4</span>
        <span className="faq-q-text">AI 솔루션과 i-MEPS는 함께 사용할 수 있습니까?</span>
        <span className="faq-q-tag tag-ai">AI 솔루션</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>가능합니다. i-MEPS에서 수집한 생산 및 품질 데이터가 AI 분석 엔진으로 전달되어 공정 전반을 분석합니다.</p><p>Vision 검사 데이터와 로봇 로그 데이터까지 통합 분석하여 전체 생산 공정을 데이터 기반으로 관리할 수 있습니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>시너지 효과: MES + AI 통합 분석</div>
      </div></div>
    </div>
    <div className="faq-item" data-cat="ai" style={{transitionDelay:"0.15s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q8</span>
        <span className="faq-q-text">데이터가 많지 않아도 AI 도입이 가능한가요?</span>
        <span className="faq-q-tag tag-ai">AI 솔루션</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>가능합니다. 초기에는 데이터 수집 환경을 구축한 후 단계적으로 AI 분석을 적용합니다.</p><p>데이터 축적과 함께 AI 모델 성능도 지속적으로 개선됩니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>데이터 환경부터 함께 구축 지원</div>
      </div></div>
    </div>
    <div className="faq-item" data-cat="ai" style={{transitionDelay:"0.20s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q9</span>
        <span className="faq-q-text">AI 솔루션 도입 시 어떤 효과가 있나요?</span>
        <span className="faq-q-tag tag-ai">AI 솔루션</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>AI 솔루션을 도입하면 다음과 같은 효과를 기대할 수 있습니다.<br/><br/>• 설비 고장 사전 예측<br/>• 불량 검사 자동화<br/>• 생산 데이터 실시간 분석<br/>• 공정 품질 안정화</p><p>이를 통해 생산성과 품질을 동시에 개선할 수 있습니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>생산성 향상 + 품질 개선</div>
      </div></div>
    </div>
    <div className="faq-item" data-cat="ai" style={{transitionDelay:"0.15s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q13</span>
        <span className="faq-q-text">클라우드 기반인가요?</span>
        <span className="faq-q-tag tag-ai">AI 솔루션</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>지엔디비즈 AI 솔루션은 클라우드 기반 SaaS 형태로 제공됩니다.</p><p>기업 보안 정책에 따라 온프레미스 구축도 가능합니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>클라우드 / 온프레미스 선택 가능</div>
      </div></div>
    </div>
    <div className="faq-item" data-cat="ai" style={{transitionDelay:"0.10s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q17</span>
        <span className="faq-q-text">AI 모델은 계속 학습되나요?</span>
        <span className="faq-q-tag tag-ai">AI 솔루션</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>네. 운영 중 수집되는 데이터를 기반으로 AI 모델이 지속적으로 개선됩니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>지속적인 성능 향상</div>
      </div></div>
    </div>
    <div className="faq-item" data-cat="ai" style={{transitionDelay:"0.15s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q18</span>
        <span className="faq-q-text">Vision AI는 어떤 검사를 하나요?</span>
        <span className="faq-q-tag tag-ai">AI 솔루션</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>Vision AI는 다음과 같은 검사에 활용됩니다.<br/><br/>• 외관 불량 검사<br/>• 라벨 검사<br/>• 이물질 탐지<br/>• 안전 위험 감지</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>자동 품질 검사 시스템</div>
      </div></div>
    </div>
    <div className="faq-item" data-cat="ai" style={{transitionDelay:"0.20s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q19</span>
        <span className="faq-q-text">로봇 AI는 어떤 기능을 하나요?</span>
        <span className="faq-q-tag tag-ai">AI 솔루션</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>로봇 AI는 공정 조건을 분석하여 로봇 동작을 최적화하고 불량 발생 가능성을 사전에 감지합니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>공정 자동 최적화</div>
      </div></div>
    </div>
    <div className="faq-item" data-cat="ai" style={{transitionDelay:"0.00s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q20</span>
        <span className="faq-q-text">기존 MES 없이도 AI 도입이 가능한가요?</span>
        <span className="faq-q-tag tag-ai">AI 솔루션</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>가능합니다. 데이터 수집 환경을 먼저 구축한 후 AI 솔루션을 적용할 수 있습니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>단계적 AI 도입 가능</div>
      </div></div>
    </div>
  </div>
  <div className="faq-group visible">
    <div className="faq-group-label">비용 · 정부지원</div>

    <div className="faq-item" data-cat="cost" style={{transitionDelay:"0.10s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q2</span>
        <span className="faq-q-text">중소기업도 도입할 수 있습니까? 비용은 어느 정도인가요?</span>
        <span className="faq-q-tag tag-cost">비용 · 지원</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>지엔디비즈 솔루션은 중소기업부터 대기업까지 다양한 제조 환경에 맞게 설계되어 있습니다.</p><p>특히 스마트팩토리 정부 지원사업을 활용하면 초기 구축 비용을 절감할 수 있으며 단계별 도입 방식으로 부담을 최소화할 수 있습니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>비용 절감: 정부 지원사업 연계 가능</div>
      </div></div>
    </div>
    <div className="faq-item" data-cat="cost" style={{transitionDelay:"0.05s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q21</span>
        <span className="faq-q-text">정부 지원사업을 활용할 수 있나요?</span>
        <span className="faq-q-tag tag-cost">비용 · 지원</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>지엔디비즈는 스마트팩토리 전문 공급기업으로 정부 지원사업을 통한 시스템 구축을 지원합니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>정부 지원사업 연계 가능</div>
      </div></div>
    </div>
  </div>
  <div className="faq-group visible">
    <div className="faq-group-label">유지보수 · 보안</div>

    <div className="faq-item" data-cat="maint" style={{transitionDelay:"0.00s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q5</span>
        <span className="faq-q-text">구축 후 유지보수는 어떻게 진행되나요?</span>
        <span className="faq-q-tag tag-maint">유지보수</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>지엔디비즈는 구축 이후에도 안정적인 운영을 위해 유지보수 서비스를 제공합니다.</p><p>시스템 장애 대응, 기능 개선, AI 모델 업데이트 등을 지속적으로 지원하며 전담 기술 인력이 운영 안정성을 관리합니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>장기 파트너: 구축 이후 운영까지 지원</div>
      </div></div>
    </div>
    <div className="faq-item" data-cat="maint" style={{transitionDelay:"0.20s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q14</span>
        <span className="faq-q-text">시스템 보안은 어떻게 관리되나요?</span>
        <span className="faq-q-tag tag-maint">유지보수</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>VPN, SSL 암호화, 접근 통제, 네트워크 망분리 등 다양한 보안 기술을 적용하여 데이터 보호와 시스템 안정성을 확보합니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>기업 데이터 보안 강화</div>
      </div></div>
    </div>
  </div>
  <div className="faq-group visible">
    <div className="faq-group-label">상담 · 데모</div>

    <div className="faq-item" data-cat="consult" style={{transitionDelay:"0.10s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q22</span>
        <span className="faq-q-text">상담은 어떻게 신청할 수 있나요?</span>
        <span className="faq-q-tag tag-smart">상담 · 데모</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>홈페이지 상담 신청 또는 전화 문의를 통해 상담을 요청할 수 있습니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>상담 신청 후 전문가 안내</div>
      </div></div>
    </div>

    <div className="faq-item" data-cat="consult" style={{transitionDelay:"0.20s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q24</span>
        <span className="faq-q-text">우리 공장에 AI 도입이 가능한지 상담 받을 수 있나요?</span>
        <span className="faq-q-tag tag-ai">상담 · 데모</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>가능합니다. 생산 공정, 설비 환경, 데이터 현황을 분석하여 맞춤형 AI 도입 전략을 제안드립니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>맞춤형 도입 컨설팅 제공</div>
      </div></div>
    </div>
  </div>
  <div className="faq-group visible">
    <div className="faq-group-label">지엔디비즈를 선택해야 하는 이유</div>

    <div className="faq-item" data-cat="brand" style={{transitionDelay:"0.00s"}}>
      <div className="faq-q">
        <span className="faq-q-num">Q25</span>
        <span className="faq-q-text">왜 지엔디비즈여야 하나요?</span>
        <span className="faq-q-tag tag-ai">브랜드</span>
        <span className="faq-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></span>
      </div>
      <div className="faq-a"><div className="faq-a-inner">
        <p>지엔디비즈는 스마트팩토리 구축 경험과 제조 AI 기술을 동시에 보유한 기업입니다.</p><p>단순한 시스템 공급이 아니라 제조 현장의 문제를 해결하는 기술 파트너로서 다음과 같은 강점을 가지고 있습니다.<br/><br/>• 15년 이상의 스마트팩토리 구축 경험<br/>• ERP · MES · PLM 등 제조 시스템 전문 기술<br/>• 예지보전 · Vision 검사 · 로봇 AI 등 제조 특화 AI 기술<br/>• 100개 이상의 구축 실적<br/>• 구축부터 운영까지 책임지는 장기 파트너십</p><p>지엔디비즈는 제조 현장에서 발생하는 문제를 데이터와 AI 기술로 해결하는 스마트팩토리 전문 기업입니다.</p>
        <div className="faq-point"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>Smart Factory + AI Technology = 지엔디비즈</div>
      </div></div>
    </div>
  </div>

  </div>

<div className="faq-cta-bar">
  <div className="faq-cta-bar-grid"></div>
  <div className="faq-cta-bar-inner">
    <h2 className="faq-cta-bar-title">궁금한 점이 아직<br/><em>남으셨나요?</em></h2>
    <p className="faq-cta-bar-desc">생산 공정, 설비 환경, 데이터 현황을 분석하여<br/>귀사에 맞는 AI 도입 전략을 직접 제안해 드립니다</p>
    <div className="faq-cta-bar-actions">
      <Link to="/contact" className="btn-primary">
        무료 상담 신청하기
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
      <Link to="/solution" className="btn-ghost">
        솔루션 전체 보기
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </Link>
    </div>
  </div>
</div>


</div>
    </>
  )
}
