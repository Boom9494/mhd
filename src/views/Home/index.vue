<template>
  <div class="page-home">
    <!-- 头部 -->
    <header class="index-header">
      <a href="mine.html?cpid=0">
        <div class="header-user">
          <div class="user-btn"></div>
        </div>
      </a>

      <div class="header-logo"></div>

      <a href="search.html?cpid=0">
        <div class="header-search"></div>
      </a>
    </header>
    <!-- 头部结束 -->
    <br>
    <!-- 主体内容 -->
    <div class="index-main">
      <!-- banner -->
      <swiper class="my-swiper">
        <swiper-item>
          <img src="../../../public/img/ban1.jpg" alt="">
        </swiper-item>
        <swiper-item>
          <img src="../../../public/img/ban2.jpg" alt="">
        </swiper-item>
        <swiper-item>
          <img src="../../../public/img/ban1.jpg" alt="">
        </swiper-item>
      </swiper>
      <!-- banner结束 -->
    </div>
    <!-- 主体内容结束 -->
  </div>
</template>

<script>
import Swiper from '@/components/Swiper/Swiper.vue'
import SwiperItem from '@/components/Swiper/SwiperItem.vue'

export default {
  name: 'home',
  components: {
    Swiper,
    SwiperItem
  }

}
</script>

<style lang="scss" scoped>
// 引入共用的 mixin
@import '../../../public/reset/mixin.scss';

.page-home {
  display: flex;
  flex-direction: column;
  // 头部
  .index-header {
    @include border-bottom;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 45px;
    box-sizing: border-box;

    .header-user {
      width: 25px;
      height: 25px;
      .user-btn {
        background: url("../../../public/img/my.png") no-repeat;
        height: 100%;
        background-size: contain;
      }
    }
    .header-logo {
      width: 92px;
      height: 28px;
      background: url("../../../public/img/logo.png") no-repeat;
      background-size: contain;
    }
    .header-search {
      width: 25px;
      height: 25px;
      background: url("../../../public/img/search.png") no-repeat;
      background-size: contain;
    }
  }
  // 主体内容
  .index-main {
    flex: 1;
    .my-swiper img{
      width: 100%;
    }
  }
}
</style>
