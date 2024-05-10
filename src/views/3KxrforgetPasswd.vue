<template>
    <div class="bgc">
        <div class="login_bgc">
            <div class="check_box">
                <form action="/">
                    <div class="check_box_title">
                        <h3>重置密码</h3>
                    </div>
                    <div class="check_box_main">
                        <div class="icon icon-user">
                            <span class="icon_username"></span>
                            <input :value="userName" type="text" placeholder="用户名" class="username">
                        </div>
                        <div class="">
                            <i class="icon_password"></i>
                            <input type="password" placeholder="密码">
                        </div>
                       
                    </div>
                    <div class="mb-4">
                        <el-button type="primary" @click="submit">找回密码</el-button>
                    </div>
                    <button @click="back" class="forget_passwd" style="width:20%;text-align:center;right:0;">返回</button>
                </form>

            </div>

        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'


const router = useRouter();
const back = () => {
    router.push('/login');
};
</script>

<style scoped>
.bgc {
    background-image: url("../../public/img/1_129.png");
    background-repeat: repeat;
    height: 1800px;
    /* background-size: 1; */
    /* background-attachment: fixed; */
    /* background-position: center; */

}

.login_bgc {
    height: 500px;
    width: 80%;
    background-color: #fff;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 80px;
    margin: 0 auto;
    position: static;
    margin-bottom: 40px;
    column-gap: 40px;
}

.check_box {
    width: 30%;
    text-align: center;
    position: absolute;
    margin: auto;
    padding: 0 40px;
    display: inline-block;

}

button {
    background-color: #61bcd2;
    color: white;
    width: 100%;
    border: none;
    text-align: center;
    font-size: 20px;
}

button:hover {
    background-color: #086077;
}

input {
    display: block;
    margin: 20px auto;
    width: 99%;
    height: 30px;
}

input:first-child {
    background-image: url("");
}

input::placeholder {
    font-size: 16px;

}

a:hover {
    color: red;
}

.icon_username {
    position: absolute;
    left: 0;
    background-image: url("../../public/img/username.png");
    background-repeat: no-repeat;
    background-position: 0px 0px;
    background-color: white;
}

.icon_password {
    background-image: url("../../public/img/password.png");
    background-repeat: no-repeat;
    background-position: 0px 0px;
}


.forget_passwd {
    display: block;
    margin: 20px auto;
    width: 99%;
    text-align: right;
    color: #000;
    font-size: 16px;
    text-decoration: none;
}
</style>