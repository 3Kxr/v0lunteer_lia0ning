<template>
    <div>
        <footer class="footer">
            <img src="../public/img/logo.png" alt="">
            <p>&copy;2706董嘉诚</p>
            <p>Copyright zyln.net.cn 2013-2024 All Rights 备案号：辽ICP备2023001617号</p>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
.footer{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;   
    justify-content: space-between;
    height:5rem;
    background-color: #fff;
    margin-top: 10px;
    line-height: 50px;
    position: fixed;
    width: 100%;
    bottom: 0;
    font-size: 14px;
}
img{
    height: 80%;
    line-height: 100%;
}
</style>