<template>
    <div>
        <div class="moment">
            <div>
                <div class="header">
                    <img src="../public/img/index-icon-shunjian.png" alt="">
                    <p>感动瞬间</p>
                    <RouterLink to="/messagemore" class="morebutton">更多</RouterLink>
                </div>
            </div>
        </div>
        <div class="moment_img">
            <div class="img_container fashion">
                <div class="container">
                    <a>重要通知！投票“新青年”时代关键词网</a>
                </div class="container">
            </div>
            <div class="img_container workmap">
                <div class="container">
                    <a>“志愿辽宁”防疫工作总结</a>
                </div class="container">
            </div>
            <div class="img_container hostpital">
                <div class="container">
                    <a>志愿辽宁 | 爱心接力东北国际医院</a>
                </div class="container">
            </div>
            <div class="img_container fashion">
                <div class="container">
                    <a>战役小可爱们，疫情之下“00”后的担当</a>
                </div class="container">
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.moment {
    margin-top: 40px;
    bottom: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.header {
    display: flex;
    flex-direction: row;
    height: 40px;
    line-height: 20px;
    margin-bottom: 15px;
}

.header p {
    font-weight: bold;
    margin-left: 5px;
}

.header img {
    width: autoa;
}


.moment_img {
    display: flex;
    justify-content: space-between;
}

.img_container {
    background-size: 100% 100%;
    width: 255px;
    height: 165px;
    text-align: center;
}

.fashion {
    background-image: url("../public/img/leifeng.jpg");
}

.workmap {
    background-image: url("../public/img/work_map.jpg");

}

.hostpital {
    background-image: url("../public/img/hospital.jpg");
}

.fashion {
    background-image: url("../public/img/fashion.jpg");
}

.container {
    background-color: rgba(0, 0, 0, 0.4);
    height: 35px;
    width: 100%;
    text-align: center;
    position: relative;
    top: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
}

.moment_img a {
    color: white;
    line-height: 33px;
}
.morebutton {
    font-size: 10px;
    text-decoration: none;
    color: blue;
    font-weight: bold;
}

.morebutton:hover {
    color: red;

}
</style>