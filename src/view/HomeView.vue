<template>
    <div>
      <div>这是home页面</div>
      <div>
        <button @click="toAboutPage">跳转至about</button>
      </div>
      <div>
        <button @click="toTestPage">跳转至test</button>
      </div>
    </div>
  </template>
   
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
   
  const router = useRouter()
   
  function toAboutPage() {
    router.push({
      path: '/about',
      query: {
        title: '666'
      }
    })
  }
   
  function toTestPage() {
    router.push({
      path: '/test/' + 888,
    })
  }
   
  </script>
   
   