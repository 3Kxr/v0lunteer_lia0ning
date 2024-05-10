<template>
    <div class="right">
        <div class="top">
            <img src="../public/img/ma-andriod.png" alt="">
            <p>扫码下载app</p>
        </div>
        <div class="bottom">
            <p>志愿辽宁官方客服</p>
            <img src="../public/img/tel.png"/>
            <p class="tel">4008355377</p>
            <p>8:00-20:00</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
p{
    text-align: center;
}
.right{
    display: flex;
    flex-direction: column;
    height: 276px;
}
.bottom{
    background-color: rgb(243, 240, 240);
    text-align: center;
    margin-top: 3px;
}
.bottom img{
    background-color: #fff;
    text-align: center;
    margin: 0 auto;
}
.top{
    height: auto;
    background-color: rgb(243, 240, 240);
    text-align: center;
}
.top img{
    width: 80px;
    margin: 0 auto;
}
.tel{
    color: blue;
    font-weight: bold;
}
</style>
