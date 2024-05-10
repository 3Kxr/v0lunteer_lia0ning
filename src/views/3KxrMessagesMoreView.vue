<template>
  <div class="bgc">
    <div class="header">
      <h2>通知</h2>
      <button @click="back">返回首页</button>
    </div>
    <ul>
      <li v-for="title in messageData" :key="title.id">
        <RouterLink to="/messagedetail" class="text_style">{{ title.title }}</RouterLink>
        <span>{{ title.time }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router';

const messageData = reactive([]);

axios.get("http://localhost:3000/messageData")
  .then((response) => {
    messageData.push(...response.data);
    console.log(messageData);
  })
  .catch((error) => {
    console.error(error);
  });



const router = useRouter();

const back = () => {
  router.push('/');
};

</script>

<style scoped>
.bgc {
  background-color: rgb(227, 214, 215);
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
button{
    border: none;
    width: 80px;
    cursor: p ointer;
}

ul {
  padding: 0;
  display: flex;
  flex-direction: column;
}

li {
  list-style: none;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
  height: 80px;
  line-height: 80px; 
  text-decoration: none;
}
li:hover{
  background-color: beige;  
}
.text_style{
  text-decoration: none;
  color: black;

}
.text_style:hover{
  color: red;
}
</style>
