<template>
    <div class="second_first">
        <div class="second_first_first">
            <div class="volunteer_number">
                <!-- 使用json -->
                <p>志愿者</p>
                <p>1655106</p> <!-- 橘黄色 -->
            </div>
            <div class="volunteer_team">
                <p>志愿者团队</p>
                <p>5442</p>
            </div>
            <div class="volunteer_activity">
                <p>志愿者活动数</p>
                <p>24485</p>
            </div>
        </div>
        <div class="first_second_second">
            <div>
                <img src="../public/img/app_userExplain.png" alt="">
                <p>志愿辽宁app使用说明</p>
            </div>
            <div>
                <img src="../public/img/app_admin.png" alt="">
                <p>志愿辽宁管理员说明</p>
            </div>
            <div>
                <img src="../public/img/app_downloadGuard.png" alt="">
                <p>志愿辽宁app下载指南</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
p{
    text-align: center;
}
.second_first {
    display: flex;
    flex-direction: column;
    right: 0;
    position: relative;
    top: 8%;
}

.second_first_first {
    display: flex;
    flex-direction: row;
}
.second_first_first div{
    width: 164px;
    height: 130px;
}
.volunteer_number{
    background-color: rgb(255, 166, 0);
}
.volunteer_number p:last-child {
    font-size: 27px;
    font-weight: bold;
    color:rgb(255, 217, 0);
}
.volunteer_team {
    background-color: #658ff8;
}

.volunteer_team p:last-child {
    font-size: 27px;
    font-weight: bold;
    color: blue;
}
.volunteer_activity{
    background-color: rgb(172, 223, 172);
}
.volunteer_activity p:last-child {
    font-size: 27px;
    font-weight: bold;
    color: green;
}
.first_second_second{
    background-color: #F7F7F8;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: row;
    /* width: 492px; */
}
.first_second_second div{
  border-right: #E0E0E0 solid 1px ; 
  text-align: center;
  justify-content: center;
  font-size: 16px;
  width: 164px;
}
.first_second_second div p{
    margin-left: 3px;
}
.first_second_second div:last-child {
    border: none;
}
</style>