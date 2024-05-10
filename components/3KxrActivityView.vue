<template>
    <div class="activityview">
        <div class="message_header">
            <img src="../public/img/index-icon-huodong.png" alt="">
            <p>志愿活动</p>
            <RouterLink to="/messagemore" class="morebutton">更多</RouterLink>
        </div>


        <!-- 查看官网更多的内容 -->

        <div class="item">
            <div>
                <p class="item_title " id="green">志愿服务讲解</p>
                <p class="sub_title">志愿服务讲解</p>
                <div class="infomation">
                    <img src="../public/img/index_50.png" alt="">
                    <div class="info_detail">
                        <p><b>组织者：</b>辽宁中医药大学</p>
                        <p><b>开始时间：</b>2024-04-09</p>
                        <p><b>活动地点：</b>辽宁省沈阳市</p>
                    </div>

                </div>
                <div class="item_footer">
                    <span>招募人数：30 | 已报名：1</span>
                    <button @click="djcregister">我要参加</button>
                </div>
            </div>
            <div>
                <p class="item_title">志愿服务培训</p>
                <p class="sub_title">志愿服务培训</p>
                <div class="infomation">
                    <img src="../public/img/index_50.png" alt="">
                    <div class="info_detail">
                        <p><b>组织者：</b>辽宁科技大学</p>
                        <p><b>开始时间：</b>2024-04-09</p>
                        <p><b>活动地点：</b>辽宁省鞍山市</p>
                    </div>

                </div>
                <div class="item_footer">
                    <span>招募人数：30 | 已报名：1</span>
                    <button @click="djcregister">我要参加</button>
                </div>
            </div>
            <div>
                <p class="item_title" id="purple">世界图书日活动</p>
                <p class="sub_title">世界读书日活动</p>
                <div class="infomation">
                    <img src="../public/img/index_50.png" alt="">
                    <div class="info_detail">
                        <p><b>组织者：</b>辽宁大学</p>
                        <p><b>开始时间：</b>2024-04-09</p>
                        <p><b>活动地点：</b>辽宁省沈阳市</p>
                    </div>
                </div>
                <div class="item_footer">
                    <span>招募人数：20 | 已报名：1</span>
                    <button @click="djcregister">我要参加</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const djcregister = () => {
    router.push('/projectView');
};
</script>

<style scoped>
.morebutton {
    font-size: 10px;
    text-decoration: none;
    color: blue;
    font-weight: bold;
}

.morebutton:hover {
    color: red;

}
.activityview{
    margin-top: 100px;
}
.message_header {
    border-bottom: 1px solid #000;
    display: flex;
    flex-direction: row;
    height: 42px;
    line-height: 20px;
    width: 100%;
}

.message_header img {
    height: auto;
}

.message_header p {
    font-weight: bold;
}
.header{
    width: 100%;
    top: 0;
    display: inline;
    flex-direction: row;
    height: 10px;
    line-height: 10px;
    left: 0;
}
.header_img {
    font-weight: bold;
    display: flex;
    justify-content: left;
}
.header_img img{
    width: 40px;
}

.link{
    text-decoration: none;
    color: white;
}
#purple{
    background-color: purple;
}
#green{
    background-color: green;
}

.header div:last-child{
    right: 0;
    display: flex;
    justify-content: flex-end;
}
.item_first{
    text-align: center;

}
button{
    border: none;
    border-radius: 15px;
    background-color: blue;
    color: white;
    margin-left: 10px;

}
.item{
    display: flex;
    justify-content: space-between;

}
.sub_title{
    text-align: center;
}   
.item_footer{
    background-color: #f0f0f0;
    text-align: center;
    height: 56px;
    line-height: 56px;

}
.item_title{
    background-color: blue;
    text-align: center;
    color: white;
    height: 55px;
    width: 345px;
    margin: 0 auto;
    line-height: 55px;
}
.item_info{
    text-align: left;
    font-size: 8px;
    font-weight: bold;
}
.infomation{
    display: flex;
    flex-direction: row;
    padding: 20px;
}
.infomation img{
    height: 90px;
    padding-top: 18px;
}
.info_detail{
    margin-left: 5px;
}
</style>