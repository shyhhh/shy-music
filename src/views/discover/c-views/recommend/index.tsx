import { memo, useEffect, useState } from 'react'
import hyRequest from '@/service'

export interface IBannerData {
  imageUrl: string
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  url: string
  exclusive: boolean
  scm: string
  bannerBizType: string
}
const Recommend: React.FC = memo(() => {
  const [banners, setBanners] = useState<IBannerData[]>([])
  // 测试网络请求
  useEffect(() => {
    hyRequest.get({
      url: '/banner'
    }).then((res) => {
      setBanners(res.banners)
    })
  }, [])
  return (
    <div>
      {banners.map((item, index) => <div key={index} >{item.imageUrl}</div>)}
    </div >
  )
})

export default Recommend
