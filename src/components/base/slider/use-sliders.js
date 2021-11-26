import BScroll from '@better-scroll/core' // 核心滚动
import Slide from '@better-scroll/slide'

import { onMounted, onUnmounted, ref } from 'vue'

BScroll.use(Slide) // 注册插件

export default function useSlider(wrapperRef) {
  // 初始化
  const slider = ref(null)
  const currentPageIndex = ref(0)

  onMounted(() => {
    debugger
    // wrapperRef.value是实际dom对象
    const sliderVal = slider.value = new BScroll(wrapperRef.value, {
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false, // 小段回弹动画，要设置为 false，否则会在循环衔接的时候出现闪烁
      probeType: 2,
      slide: true
    })
    sliderVal.on('slideWillChange', (page) => {
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
