<template>
    <div class="flex flex-col min-h-screen">
        <!-- 顶部导航栏 -->
        <HeaderHtml></HeaderHtml>
        <!-- 中间内容区域 -->
        <main class="mt-18">
            <router-view></router-view>
        </main>
        <!-- 底部 -->
        <FooterHtml></FooterHtml>
    </div>
</template>
<script setup>
import FooterHtml from '@/components/FooterHtml.vue'
import HeaderHtml from '@/components/HeaderHtml.vue'
</script>