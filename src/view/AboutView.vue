<template>
    <div>
      <div>这是about页面</div>
      <div>
        <button @click="toHomePage">跳转至home</button>
      </div>
      <div>
        <button @click="toTestPage">跳转至test</button>
      </div>
    </div>
  </template>
   
  <script lang="ts" setup>
  import { useRoute, useRouter } from 'vue-router';
   
  const router = useRouter()
  const route = useRoute()
   
  function toHomePage() {
    router.push({
      name: 'home',
      params: {
        title: 'about'
      }
    })
  }
   
   
  function toTestPage() {
    router.push({
      name: 'test',
      params: {
        title: 111
      },
    })
  }
   
  console.log(route);
   
  </script>