import { Suspense, memo } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import { routes } from './router'
import { shallowEqualApp, useAppDispatch, useAppSelector } from './store'
import { changeMessageAction } from './store/modules/counter'

export const App: React.FC = memo(() => {
  const dispatch = useAppDispatch()
  function handleChangeMessage() {
    dispatch(changeMessageAction('冲冲冲'))
  }
  const { count, message } = useAppSelector((state) => ({
    count: state.counter.count,
    message: state.counter.message
  }), shallowEqualApp)
  return (
    <div className="App">
      <div className='nav'>
        <Link to='/discover'>发现音乐</Link>
        <Link to='/mine'>我的音乐</Link>
        <Link to='/focus'>关注</Link>
        <Link to='/download'>下载客户端</Link>
      </div>
      <h2>当前技术：{count}</h2>
      <h2>当前消息：{message}</h2>
      <button onClick={handleChangeMessage}>修改信息</button>
      <Suspense fallback=''>
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
})
