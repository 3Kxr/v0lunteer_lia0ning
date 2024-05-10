<template>

    <div class="message_list">
        <div class="message_header">
            <img src="../public/img/index-icon-paihang.png" alt="">
            <p>通知</p>
            <RouterLink to="/messagemore" class="morebutton">更多</RouterLink>
        </div>
        <div class="message_main">
            <ul v-for="item in messageData.slice(0, 4)" :key="item.id">
                <li>
                    <span>{{ item.title }}</span>
                    <span>{{ item.time }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { reactive} from "vue";
import axios from "axios";

const messageData = reactive([]);

axios.get("http://localhost:3000/messageData")
    .then((response) => {
        messageData.push(...response.data);
        // console.log(messageData);
    })
    .catch((error) => {
        console.error(error);
    });
</script>

<style scoped>
.message_list {
    width: 40%;
    display: flex;
    flex-direction: column;

}

img {
    width: auto;
}

li {
    list-style: none;

}
li:hover{
    color: red;
}

li span:first-child {
    margin-right: 15px;
}

li span:last-child {

    right: 0;
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

.message_main {
    height: 200px;
    display: flex;
    flex-direction: column;

}
.morebutton{
    font-size: 10px;
    text-decoration: none;
    color: blue;
    font-weight: bold;
    }
    .morebutton:hover{
        color:red;

    }
</style>



