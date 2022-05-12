<template>
    <div>
        <!-- vue 에 관련된 무엇인가를 적용하기 위해서는 v-bind를 사용한다. 
        html tag 에 인라인으로 스타일을 적용할 떄는 v-bind:style 또는 :style 를 이용한다. -->

        <!-- v-bind:class="[state, props]" -->
        <div 
        v-bind:class="['box', color]" 
        v-bind:style="{ width: width + 'px', height: height + 'px'}"
        >
        <h3>저는 박스 컴포넌트입니다</h3>
        </div>
        <!-- <div :style="{color: #ebebeb}"></div> -->
        
    </div>
</template>

<script>
export default {
    props: {
        color: { type: String, default: '' }
    },


    data() {   //  Box의 state
        return {
            width: 500,
            height: 500
        }
    }
}
</script>

<style scoped>
    .blue {
        background-color: blue;
    }
    .red {
        background-color: red;
    }
    .green {
        background-color: green;
    }
</style>