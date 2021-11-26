<template>
  <div class="recommend">
    <!-- <scroll class="recommend-content"> -->
      <div>
        <div class="slider-wrapper">
          <div class="slider-content">
            <slider v-if="sliders.length" :sliders="sliders"></slider>
          </div>
        </div>
      </div>
    <!-- </scroll> -->
  </div>
</template>

<script>
import Slider from '@/components/base/slider/slider'
import { getRecommend } from '@/service/recommend'
export default {
  name: 'Recommend',
  components: {
    Slider
  },
  data() {
    return {
      sliders: []
    }
  },
  async created() {
    const result = await getRecommend()
    debugger
    this.sliders = result.sliders
  }
}
</script>

<style lang="scss" scoped>
.slider-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 40%;
  overflow: hidden;
  .slider-content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
