<template>
    <div>
        <header class="top_header">
            <div class="logo_info">
                <!-- 导航 -->
                <img src="../public/img/logo.png" alt="志愿辽宁" @click="djcgoIndex" class="homelogo">
                <img src="../public/img/banner-img1.png" alt="共青团">
                <p>共青团辽宁省委员会</p>
                <img src="../public/img/banner-img2.png" alt="志愿者">
                <p>辽宁省青年志愿者协会</p>
            </div>
            <div v-if="userName" class="welcome_button">
                <p>欢迎您，{{ userName }} | <RouterLink to="/personCenter">个人中心</RouterLink> | <span>退出</span></p>
            </div>

            <RouterLink v-else to="/login" class="login_button">登录</RouterLink>
        </header>
    </div>
</template>

    <script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const djcgoIndex = () => {
        router.push({ path: '/' });
    };
    </script>

<style scoped>
.top_header {
    height: 90px;
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    margin-bottom: 3px solid #f0f0f0;
    flex-wrap: nowrap;
}

.top_header div {
    justify-content: space-between;
}

.logo_info img:first-child {
    height: 70%;
    display: flex;
    margin: 16px;
}

img {
    display: inline-block;
    margin-left: 12px;
    margin-top: 25px;
}

p {
    line-height: 60px;
    margin-left: 3px;
}

.logo_info {
    line-height: 80px;
    display: flex;
    line-height: px;
}

.logo_info img {
    height: 40px;
    cursor: pointer;
}

.login_button {
    text-decoration: none;
    color: black;
    padding: 30px 80px;
}
.welcome_button {
    text-decoration: none;
    color: black;
    padding: 30px 80px;
}
</style>
