import BScroll from '@better-scroll/core'  // 核心滚动
import Slide from '@better-scroll/slide'

import { onMounted, onUnmounted, onActivated, onDeactivated, ref } from 'vue'

BScroll.use(Slide)  // 注册插件

export default function useSlider(wrapperRef) {
  // 初始化
  const slider = ref(null)
  const currentPageIndex = ref(0)

  onMounted(() => {
    // wrapperRef.value是实际dom对象
    const sliderVal = slider.value = new BScroll(wrapperRef.value, {
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false,
      probeType: 2,
      slide: true
    })
    sliderVal.on('sliderWillChange', (page) => {
      currentPageIndex.value = page.pageX
    })
  })
  onUnmounted(() => {
    slider.value.destroy()
  })
  return {
    slider,
    currentPageIndex
  }
}