import { memo } from 'react'
import { shallowEqual } from 'react-redux'
import { useAppSelector } from '@/store'

export const TopBanner: React.FC = memo(() => {
  // 从 store 中获取数据
  const { banners } = useAppSelector((state) => ({
    banners: state.recommend.banners
  }), shallowEqual)
  return (
    <div>
      {banners.map((item) => {
        return (
          <div key={item.imageUrl} >{item.imageUrl}</div>
        )
      })}
    </div>
  )
})
