<template>
    <div>
        <div>
            <h1>{{title}}</h1>
            <input v-model="title">
        </div>
        <h2>웹툰</h2>
        <div>
            <input type="checkbox" id="프롬스타" value="프롬스타" v-model="checkedWebtoons">
            <label for="프롬스타">프롬스타</label>
            <input type="checkbox" id="햄스터와그녀" value="햄스터와그녀" v-model="checkedWebtoons">
            <label for="햄스터와그녀">햄스터와그녀</label>
            <input type="checkbox" id="위대한로맨스" value="위대한로맨스" v-model="checkedWebtoons">
            <label for="위대한로맨스">위대한로맨스</label>
            <input type="checkbox" id="아귀" value="아귀" v-model="checkedWebtoons">
            <label for="아귀">아귀</label>

            <br>
            <span>찜한 웹툰: {{ checkedWebtoons }}</span>
        </div>


        <h2>성별</h2>
        <div>
            <input type="radio" id="female" value="여성" name="gender" v-model="gender">
            <label for="female">여</label>
            <input type="radio" id="male" value="남성" name="gender" v-model="gender">
            <label for="male">남</label>
            <br>
            <span>당신의 성별을 알려주세요: {{ gender }}</span>
        </div>

        <h2>선호장르</h2>
        <div>
            <select name="" id="" v-model="category">
                <option value="" disabled>선택해주세요</option>
                <option value="로맨스">로맨스</option>
                <option value="호러">호러</option>
                <option value="스릴러">스릴러</option>
            </select>
            
            <br>
            <span>선택: {{ category }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title:"",
                checkedWebtoons: [],
                gender: '',
                category: '',
            };
        }
    };
</script>