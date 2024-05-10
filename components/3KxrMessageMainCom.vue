<template>
    <div class="message_main">

        <!-- 通知插槽 -->
        <firstChild>
        </firstChild>
        <div slot="SecondChild">
            
        </div>
        <SecondChild></SecondChild>
        <!-- 方块插槽 -->

        <telChild></telChild>
            <!-- 官网联系方式插槽 -->
    </div>
</template>

<script setup>
import firstChild from "./2706djcMessageFirstCom.vue"
import SecondChild from "./2706djcMessageSecondeCom.vue";
import telChild from "./2706djcMessageTelCom.vue";

</script>

<style scoped>
.message_main {
    display: flex;
    flex-direction: row;
    height: 276px;
}

li:hover {
    color: red;
}

#tel {
    color: #658ff8;
    font-weight: bold;
    font-size: 15px;
}

.message_main {
    display: flex;
    justify-content: space-between;
}

.volunteer_number {
    background-color: orange;
    color: orange;
}

.volunteer_number p:last-child {
    font-weight: bold;
    font-size: 27px;
}

.first_second_second {
    display: flex;
    flex-direction: row;
}

.first_second_second div {
    background-color: #f7f7f8;
}

.offical_app_tel {
    display: block;

}

.offical_tel {
    text-align: center;
}

.offical_tel p:nth-last-child(2) {
    color: #658ff8;
    font-size: 8px;

}
</style>