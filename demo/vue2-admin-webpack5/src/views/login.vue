<template>
    <div>
        <div class="login-class">登录</div>
        <img :src="require('@/assets/logo.svg')" alt="Logo" class="logo">
        <div>{{ appInfo.appName }}</div>
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