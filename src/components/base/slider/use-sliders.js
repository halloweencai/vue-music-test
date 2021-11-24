import BScroll from '@better-scroll/core'
import Slide from '@better-scroll/slide'

import { onMounted, onUnmounted, onActivated, onDeactivated, ref } from 'vue'

BScroll.use(Slide)

export default function useSlider(wrapperRef) {
  // 初始化
  const slider = ref(null)
  const currentPageIndex = ref(0)

  onMounted(() => {
    const sliderVal = slider.value = new BScroll(wrapperRef.value, {

    })

  })
  this.slide = new BScroll(this.$refs.slide, {
    scrollX: true,
    scrollY: false,
    slide: true,
    momentum: false,
    bounce: false,
    probeType: 0
  })
  this.slide.on('scrollEnd', this._onScrollEnd)

  this.slide.on('slideWillChange', (page) => {
    this.currentPageIndex = page.pageX
  })

  // v2.1.0
  this.slide.on('slidePageChanged', (page) => {
    console.log('CurrentPage changed to => ', page)
  })
},
_onScrollEnd () {
  console.log('CurrentPage => ', this.slide.getCurrentPage())
}
}