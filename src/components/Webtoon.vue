<template>
    <div>
        <h2>Webtoon</h2>
        <ul class="wrap">
            <!-- <li v-for="i in 10" :key="{i}>{i}"></li> -->
            <!-- : 가 붙으면 "" d영역이 js영역으로 변경됩니다. -> 그래서 item객체에 접근이 가능했던것! -->
            <li class="item" v-for="(item, idx) in items" :key="{idx}">
                <a :href="item.link" target="_blank">
                    <img :src="item.img" />
                    <span class="tit">제목 : {{item.name}}</span>

                    <span class="tag" v-if="item.isUpdate">N</span>
                    <!-- cf) v-show : display: none; -->
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    // Webtoons 의 데이터를 props로 받는다.
    props: {
        items: { type: Array, default: () => []}
    }
}
</script>

<style scoped>
h2 {
  text-align: center;
}

a {
  list-style: none;
  text-decoration: none;
}

li {
  list-style: none;
}

.wrap {
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
}

.item {
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 25px;
  position: relative;
}

.tit {
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  padding: 20px 15px;
}

img {
  width: 100%;
  background: #ebebeb;
  border-radius: 4px;
}
.tag {
  position: absolute;
  left: 10px;
  top: 10px;
  padding: 5px 30px;
  color: #fff;
  border-radius: 4px;
  background: #fc2332;
  font-weight: bold;
}
</style>