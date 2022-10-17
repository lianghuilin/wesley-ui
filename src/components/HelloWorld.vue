<script setup>
import { ref } from 'vue'

import BarChart from '../../components/bar-chart/index.vue'

defineProps({
  msg: String
})

const count = ref(0)

const barData = ref([
  {
    name: '2011',
    type: 'bar',
    data: [18203, 23489, 29034, 104970, 131744, 630230]
  },
  {
    name: '2012',
    type: 'bar',
    data: [19325, 23438, 31000, 121594, 134141, 681807]
  }
])
</script>

<template>
  <h1>{{ msg }}</h1>

  <bar-chart :data="barData" :customStyle="{
    width: '800px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }"></bar-chart>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
