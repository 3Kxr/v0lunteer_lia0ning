<template>
    <div class="not-found">
        <h1 class="title">404 Not Found</h1>
        <p class="message">您访问的页面不存在</p>
        <router-link to="/" class="link">返回首页</router-link>
    </div>
</template>

<script setup>
</script>

<style scoped>
.not-found {
    text-align: center;
    padding: 50px;
}

.title {
    font-size: 36px;
    color: #333;
}

.message {
    font-size: 18px;
    color: #666;
    margin-bottom: 20px;
}

.link {
    font-size: 16px;
    color: #007bff;
    text-decoration: none;
}

.link:hover {
    text-decoration: underline;
}
</style>
