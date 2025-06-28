<template>
    <header class="bg-white w-full h-18 fixed top-0 left-0 right-0 p-3 md:py-4 ">
        <!-- lg:justify-normal ：屏幕宽度 大于等于 1024px 时 justify-normal 生效 -->
        <section class="flex items-center justify-between lg:justify-normal gap-x-20">
            <div class="ml-10 text-4xl font-bold ">
                <router-link to="/">Ceranva</router-link>
            </div>
            <ul class="flex items-center justify-between gap-10 text-sm font-bold ">
                <li v-for="item in navLinks" :key="item.id" :class="{'text-orange-400': isActive === item.id}" class="cursor-pointer" @click="isSelect(item.id)">
                    <router-link :to="item.path">{{ item.name }}</router-link>
                </li>
            </ul>
        </section>
    </header>
</template>
<script setup>
import { ref } from 'vue';
const navLinks = [
    { id: 1, name: 'Home', path: '/home' },
    { id: 2, name: 'Product', path: '/' },
    { id: 3, name: 'Blog', path: '/' },
    { id: 4, name: 'About Us', path: '/about' },
    { id: 5, name: 'Contact Us', path: '/' }
];
const isActive = ref(1); // 默认选中 Home

const isSelect = (id) => {
    isActive.value = id;
}
</script>
<style scoped>
</style>