<template>
    <footer class="bg-gray-800 text-white p-6">
        <section class="flex justify-between items-start flex-col md:flex-row md:justify-normal">

            <div class="text-3xl font-bold flex items-start">
                Ceranva
            </div>
            <ul class="w-1/3 md:flex-1 flex justify-between items-center flex-col gap-5 text-ltr">
                <li><router-link to="/" class="cursor-pointer font-bold">Quick Links</router-link></li>
                <li><router-link to="/" class="cursor-pointer">About Us</router-link></li>
                <li><router-link to="/" class="cursor-pointer">Contact Us</router-link></li>
            </ul>
            <ul class="w-1/3 md:flex-1 flex justify-between items-left flex-col gap-5 text-ltr">
                <li><router-link to="/" class="cursor-pointer font-bold">Contact Info</router-link></li>
                <li>
                    <router-link to="/" class="cursor-pointer flex items-center gap-2">
                        <!-- <Message style="width: 1em; height: 1em; margin-right: 8px" /> -->
                        <div class="w-4 h-4"><el-icon class="w-full"><Message  /></el-icon></div>
                        <div class="flex-1">sales@ceramic-wx.com</div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/" class="cursor-pointer flex items-center gap-2">
                        <!-- <Location class="w-4 h-4"/> -->
                        <div class="w-4 h-4"><el-icon class="w-full"><Location  /></el-icon></div>
                        <div class="flex-1">Lisan Village, Yangsanshi Subdistrict, Liling, Hunan</div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/" class="cursor-pointer flex items-center gap-2">
                        <div class="w-4 h-4"><el-icon class="w-full"><Phone /></el-icon></div>
                        <div class="flex-1">+86 18627330995</div>
                    </router-link>
                </li>
            </ul>
        </section>
       
            <!-- <el-icon><Message /></el-icon> -->
        
        
    </footer>
</template>

<script setup>

</script>

<style scoped>
</style>