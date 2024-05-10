    <template>
        <!-- FIXME: 全局背景图片无法使用无限,由于部分css已经遗忘，所以在这留一个FIXME -->
        <div class="bgc">
            <div class="login_bgc">
                <div class="check_box">
                    <form action="/">
                        <div class="check_box_title">
                            <h3>登录</h3>
                        </div>
                        <div class="check_box_main">
                            <div class="icon icon-user">
                                <i class="icon_username"></i>
                                <input v-model="userName" type="text" placeholder="用户名" class="username">
                            </div>
                            <div class="">
                                <i class="icon_password"></i>
                                <input v-model="password" type="password" placeholder="密码">
                            </div>
                        </div>
                        <div class="mb-4">
                            <el-button type="primary" @click="submit">登录</el-button>
                        </div>
                    </form>
                    <el-button type="primary" style="margin-top: 10px;" @click="drawer = false">
                        <RouterLink to="/forgetpasswd" class="forget_passwd">忘记密码</RouterLink>
                    </el-button>

                    <el-drawer v-model="drawer" title="点歪了！点击中间的字" :with-header="true">
                        <span>功能维护中……</span>
                    </el-drawer>
                </div>
            </div>
        </div>
    </template>

    <script setup>
    import { ref } from 'vue';
    import {useRouter} from 'vue-router';
    import { useStore } from 'vuex';

    const router = useRouter();
    const store = useStore();
    const userName = ref('');

    const submit = () => {
        store.commit('setUserName', userName.value); 
        router.push({ path: '/', query: { userName: userName.value } }); 
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
        width: 100%;

    }

    .forget_passwd{
        display: block;
        margin: 20px auto;
        width: 99%;
        text-align: right;
        color: #000;
        font-size: 16px;
        text-decoration: none;
    }
    </style>