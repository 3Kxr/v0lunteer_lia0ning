<template>
    <div class="bgc">
        <div class="check_box">
            <div class="check_box_title">
                <h3>用户注册</h3>
            </div>
            <div class="check_box_main">
                <p>根据《辽宁省注册志愿者管理办法》，申请成为辽宁省注册志愿者需具备以下基本条件：</p>
                <ol>
                    <li>热心社会公益事业，具有"奉献、友爱、互助、进步"的志愿服务精神。</li>
                    <li>年满十四周岁(未满十八周岁的须经其法定监护人同意)。</li>
                    <li>具备参加志愿服务所需要的基本能力和身体素质。</li>
                    <li>品行端正，遵守国家法律法规和志愿者组织的相关规定。</li>
                </ol>

                <div class="info_center">
                    <p>推荐下载APP</p>
                    <img src="../public/img/ma-andriod.png" alt="">
                    <p>尊享志愿者的福利</p>
                </div>  

            </div>
        </div>


    </div>
</template>

<script setup>
</script>

<style scoped>
.bgc {
    background-image: url("../../public/img/1_129.png");
    background-repeat: repeat;
    height: 1800px;
    /* background-attachment: fixed; */
    background-position: center;

}
.check_box_title{
    text-align: center;
    
}
.login_bgc {
    height: 500px;
    width: 75%;
    background-color: #fff;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    position: relative;
}
.info_center{
    text-align: center;
    margin: 0 auto;
}
.check_box {
    
    width: 20%;
    text-align: center;
    position: absolute;
    margin: auto;
    padding: 0 40px;
    display: inline-block;

}

button {
    background-color: blue;
    color: white;
    width: 100%;
    border: none;
    text-align: center;
    font-size: 20px;
}

button:hover {
    background-color: gray;
}

input {
    display: block;
    margin: 20px auto;
    width: 99%;
    border-radius: 15px;

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

.username {

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