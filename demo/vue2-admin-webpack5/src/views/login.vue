<template>
    <div>
        <div  class="text-2xl font-bold text-gray-800 mt-4">登录</div>
        <img :src="require('@/assets/logo.svg')" alt="Logo" class="width-100 height-100" />
        <div class="">{{ appInfo.appName }}</div>
    </div>
</template>
<script>
import appInfo from '@/data.json';
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      appInfo: appInfo // 将导入的JSON数据赋值给data
    }
  },
}
</script>
<style></style>