<template>
  <div class="slider" ref="rootRef">
    <div class="slider-group">
      <div
        class="slider-page"
        v-for="item in sliders"
        :key="item.id"
      >
        <a :href="item.link">
          <img :src="item.pic"/>
        </a>
      </div>
    </div>
    <div class="dots-wrapper">
      <span
        class="dot"
        v-for="(item, index) in sliders"
        :key="item.id"
        :class="{'active': currentPageIndex === index}">
      </span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import useSlider from './use-sliders'
export default {
  name: 'slider',
  props: {
    sliders: {
      type: Array,
      default() {
        return []
      }
    }
  },
  setup() {
    const rootRef = ref(null)
    const { currentPageIndex } = useSlider(rootRef)
    return {
      rootRef,
      currentPageIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-banner {
  .banner-wrapper {
    position: relative;
  }
  .slide-banner-wrapper {
    min-height: 1px;
    overflow: hidder;
  }
  .slide-banner-content {
    height: 200px;
    white-space: nowrap;
    font-size: 0;
    .slide-page {
      display: inline-block;
      height: 200px;
      width: 100%;
      line-height: 200px;
      text-align: center;
      font-size: 26px;
      &.page1 {
        background-color: #95B8D1;
      }
      &.page2 {
        background-color: #DDA789;
      }
      &.page3 {
        background-color: #C3D899;
      }
      &.page4 {
        background-color: #F2D4A7;
      }
    }
  }
  .dots-wrapper {
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #eee;
      &.active {
        width: 20px;
        border-radius: 5px;
      }
    }
  }
}
</style>
