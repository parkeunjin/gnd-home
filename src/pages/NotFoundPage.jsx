import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',gap:'16px',background:'#04091A',color:'#E8EFFE',fontFamily:"'Pretendard',sans-serif"}}>
      <div style={{fontFamily:"'Rajdhani',sans-serif",fontSize:'120px',fontWeight:700,color:'rgba(96,165,250,.15)',lineHeight:1}}>404</div>
      <h1 style={{fontSize:'28px',fontWeight:700,color:'#fff'}}>페이지를 찾을 수 없습니다</h1>
      <p style={{fontSize:'16px',color:'#7A92BC'}}>요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
      <Link to="/" style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'#1A56DB',color:'#fff',fontSize:'16px',fontWeight:600,padding:'13px 28px',borderRadius:'10px',textDecoration:'none',marginTop:'8px'}}>홈으로 돌아가기</Link>
    </div>
  )
}
