<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Header from './components/Header.vue';
import Content from './components/Content.vue';
import Menu from './components/Menu.vue';
import Box from './components/Box.vue';
import Webtoon from './components/Webtoon.vue';
import VModel from './components/VModel.vue';
import Computed from './components/Computed.vue';
import Watch from './components/Watch.vue';

export default {
  name: "app",
  components: {
      Header,
      Menu,
      Content,
      Box,
      Webtoon,
      VModel,
      Computed,
      Watch,
  },
  data() {
    return {
      webtoons: [
        {
          name: "햄스터와 그녀",
          link: "http://webtoon.daum.net/webtoon/view/hamsterandher",
          img:
            "http://t1.daumcdn.net/webtoon/op/478cdf37f585607982ffa9e35b432e8503be8a54",
          isUpdate: true,
        },
        {
          name: "프롬 스타",
          link: "http://webtoon.daum.net/webtoon/view/fromstar",
          img:
            "http://t1.daumcdn.net/webtoon/op/a7fb953d722c1130bfc18440f7e3ce448ece57a1",
          isUpdate: true,
        },
        {
          name: "위대한 로맨스",
          link: "http://webtoon.daum.net/webtoon/view/greatromance",
          img:
            "http://t1.daumcdn.net/webtoon/op/a816281cb4df5c50a20ac386fd6e496643d0f085",
          isUpdate: true,
        },
        {
          name: "빛나는 손을",
          link: "http://webtoon.daum.net/webtoon/view/Hand",
          img: "http://t1.daumcdn.net/cartoon/5913FCAC0234C50001",
          isUpdate: false,
        }
      ]
    };
  }
};

</script>

<template>
  <div>
    <!-- <Header /> -->
    <div>
      <!-- <Menu />
      <Content />
      <Box color="blue" />
      <Box color="red" />
      <Box color="green" />

      <Webtoon v-bind:items="webtoons" /> -->

      <!-- <VModel />
      <Computed /> -->
      <Watch />
    </div>
  </div>
</template>

<!-- scoped 사용시, 현재 파일의안에있는 요소에만 스타일이 적용된다. -->
<style scoped>

</style>
