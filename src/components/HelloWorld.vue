<script>
// props 를 생성하는 구간
// dom에서 사용할 date , date2를 정의하고있다. 
import { ref } from 'vue'

export default {
  // setup : 객체를 반화하는데 이 객체 내에는 화면을 담당하는 html에서 사용할 변수들이 들어있어야한다.
  // 함수 안에서 자바스크립트처럼 코드를 작성하고, 객체형식으로 반환한다.. 정도만 알고넘어가자
  setup() {
    const date = Date().toString();
    return {
      date,
    }
  },

  data() {
    return {
      date2: Date().toString(),
    }
  },


  setup() {
    const abbr = ref('DOPT');
    const normal = ref('Dong Project Team')
    return {
      abbr,
      normal
    }
  }
}

//vue 는 각 생명주기를 후킹할수있는 방법을 제공하는데,각 생명주기는 지정된 옵션 함수를 정의하여 후킹할수있다. 
// beforeCreate
// created
// beforeMount(obBeforeMount)
// mounted(onMounted)
// beforeUpdate(onBeforeUpdate)
// updated(onUpdated)...


</script>

<template>
  <!-- vue2까지는 <template>안에 하나의 태그만 존재할수있었는데, vue3 부터 이러한 제약이 해제되었다. -->
  <div id="date" v-text="date"></div>
  <div id="date2">

   <!-- vue는 변수를 선언하고 값을 넣으면 자동의 dom 에 업데이트된다. 
   data 옵션에 변수를 선언하면 되며, 컴포지션api와 함께 이용하기 위해서는 setup함수를 생성하고 그 안에 일반적인 자바스크립트 변수를 선엉하듯 선어하면 된다.
   선언된 변수는 템플릿변수와 결합될수있도록 반드시 객체형식으로 반황해야한다.
   <p>{{msg}}</p>  : 수염표기법 
   <p v-text="img"></p>
   -->
    {{date2}}

    <!-- 특수기호 사용할때 v-pre -->
    <p v-pre>{{date2}}</p>

   
  </div>
  

  <div>
    <!-- 반응형 변수 사용법 -->
     <!-- v-bind : 탬플릿을 통해 변수의 값을 변형시킬수 없음
    v-model : 탬플릿을 통해 변수를 변경시킬수 있다 -->
    <p>줄임말과 원래말을 입력하세요</p>
    <input type="text" v-bind:value="abbr">
    <input type="text" v-model="normal">
    <hr>
    <abbr v-bind:title="normal">{{abbr}}</abbr>
  </div>
</template>


<!-- scoped사용시, 전역 style 이 아닌, 현재 컴포넌트에서만 style 이 적용된다. -->
<style scoped>
a {
  color: #42b983;
}
</style>
