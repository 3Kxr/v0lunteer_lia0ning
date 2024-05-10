<template>
    <div class="index">
        <!-- 跑马灯  -->
        <div>
            <el-carousel :interval="4000" height="200px">
                <el-carousel-item v-for="item in imgList" :key="item.id">
                    <img :src="item.idView" class="image">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const imgList = ref([
    { id: 0, idView: '../public/img/banner.jpg' },
    { id: 1, idView: '../public/img/banner2.jpg' }
]);


</script>
<style>
.index {
    background: #c8cfd8;
    width: 80%;
    text-align: center;
    margin: 0 auto
}

.image {
    height: 200px;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
