import { memo } from 'react'
import { Link } from 'react-router-dom'

export const AppHeader: React.FC = memo(() => {
  return (
    <div className='nav'>
      <Link to='/discover'>发现音乐</Link>
      <Link to='/mine'>我的音乐</Link>
      <Link to='/focus'>关注</Link>
      <Link to='/download'>下载客户端</Link>
    </div>
  )
})
