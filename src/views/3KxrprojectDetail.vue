<template>
    <div class="home-container">
        <div class="header" v-if="id === '1'">创业项目申报</div>
        <div class="header" v-else-if="id === '2'">志愿项目申报</div>
        <ul>
            <li>活动规则</li>
            <p v-if="id === '1'">创业项目申报规则</p>
            <p v-else-if="id === '2'">申报规则</p>
            <li>注意事项</li>
            <p v-if="id === '1'">创业项目申报规则</p>
            <p v-else>申报规则</p>
        </ul>

        <div class="QR_img">
            <img src="../../public/img/ma-andriod.png" alt="">
            <p>扫二维码下载app注册申报！</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['id']);
</script>

<style scoped>
.home-container {
    min-height: 150px;
    background-color: #f2f2f2;
    padding: 15px;
}

.header {
    text-align: center;
    font-weight: bold;
    margin-top: 15px;
    font-size: 30px;
    height: 50px;
    line-height: 50px;
}

li {
    color: red;
    font-weight: bold;
    margin-left: 15px;
}

.QR_img {
    text-align: center;
    margin-top: 20px;
}
</style>
