<template>

<div>
    <h3>{{message}}</h3>
    <p>뒤진힌 message</p>
    <!-- <h3>{{ message.split("").reverse().join("") }}</h3> -->
    <!-- template 안에서도 연산 할수있지만, state 또는 props가 변경될때마다 re-render되기 때문에 매번 연산해야한다는 부담이있다. 이런 부담을 줄이고자 computed를 사용함다. -->
</div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Hello Vue!!'
            }
        },
        computed: {
            // computed 는 대상을 따라 연산결과가 캐싱됩니다.
            // 대상인 message가 변경되지 않는다면 이미 연산처리된 즉, 캐싱처리되어있는 reverseMessage를 가져옵니다.
            reverseMessage () {
                return this.message.split("").reverse().join("")
            }
        }
    }
</script>