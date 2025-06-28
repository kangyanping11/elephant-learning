<template>
    <header class="bg-white w-full h-18 fixed top-0 left-0 right-0 p-3 md:py-4 ">
        <!-- lg:justify-normal ：屏幕宽度 大于等于 1024px 时 justify-normal 生效 -->
        <section class="flex items-center justify-between lg:justify-normal gap-x-20">
            <div class="ml-10 text-3xl font-bold ">
                <router-link to="/">Ceranva</router-link>
            </div>
            <ul class="hidden sm:flex items-center justify-between gap-10 text-sm font-bold ">
                <li v-for="item in navLinks" :key="item.id" :class="{'text-orange-400': isActive === item.id}" class="cursor-pointer" @click="isSelect(item.id)">
                    <router-link :to="item.path">{{ item.name }}</router-link>
                </li>
            </ul>
            <div @click="expandMenu"  class="sm:hidden ml-auto  flex items-center justify-center w-8 h-8 cursor-pointer">
               <el-icon class="w-full h-full object-cover"><Menu /></el-icon> 
            </div>
        </section>
        <div v-if="isMenuExpanded" class="sm:hidden w-60 absolute top-14 right-3 px-3 bg-white rounded-sm border-1 border-gray-200 shadow-lg z-10">
            <ul class="flex flex-col items-start justify-start">
                <li v-for="(item, index) in navLinks" :key="item.id" class="cursor-potinter w-full  py-4" :class="{'border-b border-gray-200': index!==navLinks.length-1}" @click="isSelect(item.id)">
                    <router-link :to="item.path" class="font-bold" :class="{'text-orange-400': isActive === item.id, }">
                        <div class="flex justify-between">
                            <div>{{ item.name }}</div>
                            <div v-if="item.children"><el-icon><ArrowDown class="w-4 h-4" /></el-icon></div>
                        </div>
                    </router-link>
                    <ul v-if="isChildOpen(item)" class="flex flex-col items-start justify-start gap-2 pt-3 pl-8 text-sm" :class="{ 'hidden': !isActive === item.id }">
                        <li v-for="child in item.children" :key="child.id" class="cursor-pointer" @click.stop="isSelect(child.id)" >
                            <router-link :to="child.path" :class="{ 'text-orange-400': isActive === child.id }">{{ child.name }}</router-link>
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    </header>
    <!-- <el-icon><Menu /></el-icon> -->
</template>
<script setup>
import { ref, computed } from 'vue';
const navLinks = [
    { id: 1, name: 'Home', path: '/home' },
    { id: 2, name: 'Product', path: '/' ,children: [
        { id: 2.1, name: 'New bone china', path: '/' },
        { id: 2.2, name: 'Gold Mug', path: '/' },
        { id: 2.3, name: 'Lustre Mug', path: '/' },
        { id: 2.4, name: 'Stoneware Mug', path: '/' },
        { id: 2.5, name: 'Gift Mug', path: '/' },
        { id: 2.6, name: 'Dinnerware Set', path: '/' },
    ]},
    { id: 3, name: 'Blog', path: '/' },
    { id: 4, name: 'About Us', path: '/about' },
    { id: 5, name: 'Contact Us', path: '/' }
];
const isActive = ref(1); // 默认选中 Home
const isSelect = (id) => {
    isActive.value = id;
}

const isMenuExpanded = ref(false); // 菜单面板是否展开
const expandMenu = () => {
    isMenuExpanded.value = !isMenuExpanded.value;
}

// 子菜单是否打开
const isChildOpen = (item) => {
    return item.children && (item.id === isActive.value || item.children.some(child => child.id === isActive.value));
}
</script>
<style scoped>
</style>