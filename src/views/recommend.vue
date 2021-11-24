<template>
  <div class="recommend">
    <scroll class="recommend-content">
      <div>
        <div class="slider-wrapper">
          <div class="slider-content">
            <slider></slider>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Slider from '@/components/base/slider/slider'
export default {
  name: 'Recommend',
  components: {
    Slider
  },
  data() {

  }
}
</script>

<style lang="scss" scoped>
</style>
