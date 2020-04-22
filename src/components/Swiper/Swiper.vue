<template>
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <!--
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      -->
      <slot></slot>

    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Swiper',
  mounted () {
    /* eslint-disable */
    new Swiper(this.$refs.swiper, {
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      loop: true,
      autoplay: true
    });
    /* eslint-enable */
  }

}
</script>

<style lang='scss'>
.swiper-container {
  width: 100%;
  height: 180px;
  .swiper-pagination-bullet {
    opacity: 1;
    vertical-align: middle;
    width: 6px;
    height: 6px;
    margin: 5px;
    border-radius: 50%;
    background-color: hsla(0, 0%, 100%, 0.7);
  }
  .swiper-pagination-bullet-active{
    width: 20px;
    height: 10px;
    margin: 0;
    background: url('../../../public/img/ban3.png') no-repeat 50%;
    background-size: contain;
  }
}
</style>
