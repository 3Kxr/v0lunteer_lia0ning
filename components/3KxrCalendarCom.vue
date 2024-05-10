<template>
    <el-calendar ref="calendar">
        <template #header="{ date }">
            <span>日历</span>
            <span>{{ date }}</span>
            <el-button-group>
                <el-button size="small" @click="djcselectDate('prev-year')">
                    上一年
                </el-button>
                <el-button size="small" @click="djcselectDate('prev-month')">
                上个月
                </el-button>
                <el-button size="small" @click="djcselectDate('today')">今日</el-button>
                <el-button size="small" @click="djcselectDate('next-month')">
                    下个月
                </el-button>
                <el-button size="small" @click="djcselectDate('next-year')">
                    下一年
                </el-button>
            </el-button-group>
        </template>
    </el-calendar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { CalendarDateType, CalendarInstance } from 'element-plus'

const calendar = ref<CalendarInstance>()
const djcselectDate = (val: CalendarDateType) => {
    if (!calendar.value) return
    calendar.value.selectDate(val)
}
</script>

<style>
template{
    width: 80%;
    display: flex;
    
}
</style>