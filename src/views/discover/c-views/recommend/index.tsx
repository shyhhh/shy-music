import { memo, useEffect } from 'react'
import { fetchBannerDataAction } from './store'
import { TopBanner } from './c-cpns/top-banner'
import { useAppDispatch } from '@/store'

const Recommend: React.FC = memo(() => {
  // 发起 action (获取数据)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  }, [])
  // render 函数返回 tsx
  return (
    <div>
      <TopBanner/>
      1</div >
  )
})

export default Recommend
