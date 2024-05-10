<template>
    <Banner></Banner>
    <nav>
        <el-menu mode="horizontal" background-color="red" text-color="#fff" active-text-color="orange">
            <el-menu-item index="1" @click="djcopen">优秀队伍</el-menu-item>
            <el-menu-item index="2" @click="djcopen">排行榜</el-menu-item>
            <el-menu-item index="3" @click="djcopen">志愿时长</el-menu-item>
            <el-menu-item index="4" @click="djcregister" >志愿风采</el-menu-item>
        </el-menu>
    </nav>
    <main id="activity">
        <div class="demo-collapse">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="志愿者信息" name="1">
                    <MessageCom class="messagecomview"></MessageCom>
                </el-collapse-item>
            </el-collapse>
        </div>
        <div class="demo-collapse">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="日历信息" name="1">
                    <CalendarCom></CalendarCom>
                </el-collapse-item>
            </el-collapse>
        </div>
        <component :is="ActivityView"></component>
        <component :is="infoView"></component>
        <component :is="Moments"></component>
    </main>
</template>

<script setup>
import infoView from "../../components/3Kxrinfomation.vue";
import MessageCom from "../../components/3KxrMessageMainCom.vue"
import Banner from '../../components/3KxrBanner.vue';
import Moments from "../../components/3KxrMoment.vue";
import ActivityView from "../../components/3KxrActivityView.vue";
import CalendarCom from "../../components/3KxrCalendarCom.vue";

import { ElMessage } from 'element-plus'
import { useRouter } from "vue-router";
const djcopen = () => {
    ElMessage('暂时未开放哦！~')
}
const router = useRouter()
const djcregister= ()=>{
    router.push('/userregister')
}
</script>   

<style scoped>
#activity {
    padding: 0 20%;
    margin-bottom: 8%;
    
}
.messagecomview{
    margin-top: 12px;
}
.top_header{
    width: 100%;
}
main{
    margin: 0 auto;
    border: 0;
    padding: 0;
    display: block;
}
.volunteer_number{
    background-color: orange;
    color: black;
    text-align: center;
}
.volunteer_number p{
    color: #f4b47f;
    font-size:  21px;
    font-weight: bold;
}
</style>

