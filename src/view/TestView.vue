<template>
    <div>
      <div>这是test页面</div>
      <button @click="toHomePage">跳转至home</button>
    </div>
  </template>
   
  <script setup lang="ts">
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const route = useRoute()
   
   
  function toHomePage() {
    router.push('/')
  }
   
  console.log(route);
   
  </script>