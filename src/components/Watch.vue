<template>
    <div>
        <input type="text" v-model="firstname" />
        <input type="text" v-model="lastname" />

        <h3>full name</h3>
        <span>{{fullname}}</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                firstname: '',
                lastname: '',
                fullname: '',
            }
        },

        // watch 도 이렇게 사용할수는 있지만, 딱히 좋은 방법은 아니다.
        // watch: {
        //     firstname (val) {
        //         //console.log('firstname', val)
        //         this.fullname = `${val} ${this.lastname}`
        //     },
        //     lastname (val) {
        //         //console.log('lastname', val)
        //         this.fullname = `${this.firstname} ${val}`
        //     }
        // }

        computed: {
            fullname () {
                return `${this.firstname} ${this.lastname}`
            }
        }


        // 비교 ))
        // 01. watch : 언제 변하는지 예측이 어려울때 많이 사용. ex) 비동기 통신 - 어떤 데이터를 요청했을때, 이것이 1초뒤에 올지 2초뒤에 올지 예측이 어려울때 그 값을 watch를 통해 감시하고 있다가 해당 값에 대한 응답이 왔을때 후처리
        // 02. computed : 복잡한 연산같은것을 캐싱처리하기 위해 사용.
    }
</script>