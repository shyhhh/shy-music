import type { ElementRef } from 'react'
import { memo, useRef, useState } from 'react'
import { Carousel } from 'antd'
import classNames from 'classnames'
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'

export const TopBanner: React.FC = memo(() => {
  /** 定义内部的数据 */
  const [currentIndex, setCurrentIndex] = useState(0)
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  /** 从store中获取数据 */
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqualApp
  )

  /** 事件处理函数 */
  function handleBeforeChange() {
    // setCurrentIndex(-1)
  }
  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }

  /** 获取背景图片 */
  let bgImageUrl
  if (currentIndex >= 0 && banners[0]) {
    bgImageUrl = `${banners[currentIndex].imageUrl}?imageView&blur=40x20`
    window.console.log(currentIndex, bgImageUrl)
  }

  return (
    <BannerWrapper
      style={{
        background: `url('${bgImageUrl}') center center / 9000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            dots={false}
            autoplaySpeed={10000}
            effect="fade"
            ref={bannerRef}
            beforeChange={handleBeforeChange}
            afterChange={handleAfterChange}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span className={classNames('item', {
                    active: index === currentIndex
                  })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
